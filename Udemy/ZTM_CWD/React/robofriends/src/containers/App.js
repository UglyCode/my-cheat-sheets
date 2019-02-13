import React, {Component} from 'react';
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll'

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
        const {robots, searchfield} = this.state;
        const filteredRobo = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield)
        });
        if (robots.length){
            return <h1>Loading</h1>
        }
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobo}/>
                </Scroll>
            </div>
        );
    };
}

export default App;