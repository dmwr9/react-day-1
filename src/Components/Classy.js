import React, {Component} from 'react';

class Classy extends Component{
    constructor(){
        super();
        this.state = {
            myName: 'Adam',
            bestFriend: 'Joey',
            favFruits: ['coconut', 'mango', 'peach']
        }
    }

    changeFriend = () => {
        this.setState({
            bestFriend: 'Chris'
        })
    };

    render(){
        return <div className="classy">
                <h3>I am a Class Component. I can hold state.</h3>
                <div>My name is: {this.state.myName}</div>
                <div>My best friend is: {this.state.bestFriend}</div>
                <button onClick={this.changeFriend}>CHANGE FRIEND</button>
            </div>
    }
}

export default Classy;