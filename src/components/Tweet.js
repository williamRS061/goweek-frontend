import React, { Component } from 'react'
import './Tweet.css';
import like from '../Like.png';


export default class Tweet extends Component {
    render(){
        const { tweet } = this.props;

        return (
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button">
                    <img src={like} alt="like" />
                    {tweet.likes}
                </button>
            </li>
        );
    }
}