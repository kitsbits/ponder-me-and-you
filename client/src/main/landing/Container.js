import React from "react";
import Component from "./Component";
import axios from "axios";

export default class LandingContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            memes: []
        };

        this.getMemes = this.getMemes.bind(this);
    }

    getMemes() {
        axios
        .get("http://localhost:6100/home")
        .then(response => {
            this.setState({
                memes: response.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    mapMemes() {
        return this.state.memes.map(meme => {
                return <Component
                    key={meme._id}
                    meme={meme}/>
        });
    }

    componentDidMount() {
        this.getMemes();
    }

    render() {
        console.log(this.state.memes);
        return (
            this.mapMemes()
        )
    }
}
