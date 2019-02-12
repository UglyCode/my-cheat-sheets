import React, {Component} from 'react';
import CardList from "./CardList";
import Searchbox from './Searchbox';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    };

    render() {
        const filteredRobo = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield)
        });
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobo}/>
            </div>
        );
    };
}

export default App;