import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
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
            input: ''
        }
    }

    onInputChange = (event) => {
      console.log(event.target.value);
    };

    onSubmit = () =>{
      console.log('gooo');
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
            .then(
            function(response) {
                console.log(response);
            },
            function(err) {
                // there was an error
            }
        );
    };

    render() {
    return (
      <div className="App">
          <Particles className='particles'
              params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
