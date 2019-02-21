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


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            boundingBoxes: [],
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
                  ? <div className='flex'>
                      <div className=' w-10'>
                        <Logo />
                      </div>
                      <div className=' w-80'>
                          <Rank />
                          <ImageLinkForm
                              onInputChange={this.onInputChange}
                              onSubmit={this.onSubmit}
                          />
                          <FaceRecognition imgLink={input} imgBoxes={boundingBoxes}/>
                      </div>
                  </div>
                  : (
                      route === 'register'
                      ? <Register onRouteChange={this.onRouteChange}/>
                      : <SignIn  onRouteChange={this.onRouteChange}/>
                  )
              }
          </div>
        );
  }
}

export default App;
