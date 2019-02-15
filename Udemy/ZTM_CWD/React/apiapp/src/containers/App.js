import React, {Component} from 'react';
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import AmountBox from '../components/AmountBox';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swapiUsersCache: [],
            actualUsers: [],
            searchfield: '',
            cardsAmount: 10
        }
    }

    async _updateSwapiUsers(amount){
        const cardsAmount = Math.min(Math.max(amount, 5),25);
        const {swapiUsersCache} = this.state;

        let fetchArr =[];
        const cacheLength = swapiUsersCache.length;

        if (cacheLength < cardsAmount) {

            for (let i = cacheLength; i < cardsAmount; i++){
                fetchArr.push(fetch(`https://swapi.co/api/people/${i+1}`)); //0 elem not defined at wsapi
            }

            let swapiArr = await Promise.all(fetchArr);
            swapiArr = await Promise.all(swapiArr.map( elem => elem.json()));
            swapiArr.forEach(elem => swapiUsersCache.push(elem));

            this.setState({ swapiUsersCache: swapiUsersCache});
        }

        this.setState({actualUsers: swapiUsersCache.slice(0,cardsAmount)});
    }

    componentDidMount(){

        this._updateSwapiUsers(this.state.cardsAmount);

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    };

    onAmountChange = (event) => {
        const amount = event.target.value;
        this.setState({cardsAmount: amount});
        this._updateSwapiUsers(amount);
    };


    render() {
        const {actualUsers, searchfield, cardsAmount}  = this.state;
        const filteredRobo = actualUsers.filter(robo => {
            return robo.name && robo.name.toLowerCase().includes(searchfield)
        });
        if (!actualUsers.length){
            return <h1 className='tc'>Loading</h1>
        }
        return (
            <div className='tc'>
                <h1 className='f1'>ROBO STARS WAR</h1>
                <div>
                <Searchbox searchChange={this.onSearchChange}/>
                <AmountBox amountChange={this.onAmountChange} amount={cardsAmount}/>
                </div>
                <Scroll>
                    <CardList robots={filteredRobo}/>
                </Scroll>
            </div>
        );
    };
}


export default App;