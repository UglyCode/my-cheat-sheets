import React, {Component} from 'react';
import BackBtn from '../components/BackBtn';
import Card from '../components/Card';

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            postsCache: [],
            commentsCache: [],
            extendCommentsPosts: [],
            currentRobotObj: undefined
        }
    }

    componentDidMount(){
        console.log(this.props.currentRobot);

        Promise.all([
            this.getPosts(),
            this.getComments(),
            this.getInfo(this.props.currentRobot+1)
        ]).then(fetchArr => this.setState({
            postsCache: fetchArr[0],
            commentsCache: fetchArr[1],
            currentRobotObj: this.makeRobotObj(fetchArr[2], this.props.currentRobot)
            })
        );

    }

    getPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    }

    getComments(){
        return fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
    }

    getInfo(robotId){
        return fetch(`https://swapi.co/api/people/${robotId}`).then(res => res.json());
    }

    makeRobotObj(swapiObject, id){

        let filteredObject = {
            height: swapiObject.height,
            mass: swapiObject.mass,
            hair_color: swapiObject.hair_color,
            skin_color: swapiObject.skin_color,
            eye_color: swapiObject.eye_color,
            birth_year: swapiObject.birth_year,
            gender: swapiObject.gender
        };

        return {
            id: id,
            name: swapiObject.name,
            description: filteredObject
        };
    }

    render() {
        const {currentRobotObj} = this.state;
        console.log(currentRobotObj);

        const output = currentRobotObj ?
            <Card
                key={currentRobotObj.id}
                id={currentRobotObj.id}
                name={currentRobotObj.name}
                description={currentRobotObj.description}
                cardClick={undefined}
            /> :
            <h1 className='tc'>Loading</h1> ;


        return(
            <div>
                <BackBtn onClick={this.props.backOnClick}/>
                {output}
            </div>
        );
    }
}

export default Posts;