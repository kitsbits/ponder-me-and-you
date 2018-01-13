import React from "react";
import Component from "./Component";
import axios from "axios";

export default class AddContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            pictureUrl: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: newValue
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addMeme(this.state);
        this.setState({
            title: "",
            pictureUrl: ""
        });
    }

    addMeme(memeDetails) {
        axios
        .post("http://localhost:6100/add-meme", memeDetails)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <Component
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                input={this.state}/>
        )
    }
}
