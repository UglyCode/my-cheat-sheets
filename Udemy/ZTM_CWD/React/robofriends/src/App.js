import React, {Component} from 'react';
import {robots} from "./robots";
import CardList from "./CardList";
import Searchbox from './Searchbox';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    };

    render() {
        const filteredRobo = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield)
        });
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobo}/>
            </div>
        );
    };
}

export default App;