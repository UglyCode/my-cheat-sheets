import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
    apiKey: '2c149afabd8141448623c02e728db777'
});

const particlesOptions = {
    particles: {
        number: {
            value: 80
        },
        line_linked: {
            shadow: {
                enable: true,
                color: '#000',
                blur: 1
            }
        },
        color:{
            value: '#FF4596'
        }
    }
};

const parceClarifaiAnswer = (response) =>{
    return response.outputs[0].data.regions.map((elem)=>{

    });
};

const parseBoundingBox = (width, height, boxObj) => {
    console.log(width, height, boxObj);
    let box = {
        top: height * boxObj.top_row,
        left: width * boxObj.left_col,
        bottom: height * (1 - boxObj.bottom_row),
        right: width * (1 - boxObj.right_col)
    };
    console.log(box);
    return box;

};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            boundingBoxes: [{
                top_row: 0,
                left_col: 0,
                bottom_row: 0,
                right_col: 0
            }],
            route: 'signIn',
            isSignedIn: false
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };

    onSubmit = () =>{
      console.log('gooo');
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then((response) => {
                console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
                this.setState({boundingBoxes: this.calcBoxes(response.outputs[0].data.regions)});
            })
            .catch(function(err) {
                console.log(err);
            }
        );
    };

    calcBoxes(clarifaiRegions){
        console.log(clarifaiRegions);
        return clarifaiRegions.map((elem)=>{
            let box = elem.region_info.bounding_box;
            box.top_row *= 100;
            box.left_col *= 100;
            box.bottom_row = (1-box.bottom_row) *100;
            box.right_col = (1-box.right_col) * 100;
            return box;
        })
    }

    onRouteChange = (route) => {
        if(route === 'signOut'){
            this.setState({isSignedIn: false})
        } else if (route === 'home'){
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    };

    render() {
        const {isSignedIn, input, boundingBoxes, route} = this.state;
        return (
          <div className="App">
              <Particles className='particles'
                  params={particlesOptions}
              />
              <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
              {route === 'home'
                  ? <div>
                      <Logo />
                      <Rank />
                      <ImageLinkForm
                          onInputChange={this.onInputChange}
                          onSubmit={this.onSubmit}
                      />
                      <FaceRecognition imgLink={input} imgBox={boundingBoxes[0]}/>
                  </div>
                  : (
                      route === 'signIn'
                      ? <SignIn  onRouteChange={this.onRouteChange}/>
                      : <Register onRouteChange={this.onRouteChange}/>
                  )
              }
          </div>
        );
  }
}

export default App;
