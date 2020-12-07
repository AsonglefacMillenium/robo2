import React, { Component } from 'react';
import Cardlist from './Cardlist'
import Searchbox from './Searchbox';
import {
    friends
} from './friends';



class App extends Component {

    constructor() {
        super()
        this.state = {
            friends: friends,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })



    }

    render() {
        const filteredfriends = this.state.friends.filter(friend => {
            return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return ( <
            div className = 'tc' >
            <
            h1 > SUPER FRIENDS < /h1>

            <
            Searchbox searchChange = {
                this.onSearchChange
            }
            / >

            <
            Cardlist friends = { filteredfriends }
            / > < /
            div >
        );
    }
}

export default App;