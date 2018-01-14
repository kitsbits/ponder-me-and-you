import React from "react";
import axios from "axios";
import glamorous from "glamorous";
import { mediaQueries } from "../../styles/global";
import Component from "./Component";

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

    genCardHeights(mediaQuery) {

    }

    componentDidMount() {
        this.getMemes();
    }

    render() {
        ///////// STYLES \\\\\\\\\\
        const Container = glamorous.div({
            display: "flex",
            flexDirection: "column",
            marginLeft: "33%",
            marginTop: "200px",
            [mediaQueries.medium]: {
                margin: "300px auto auto auto",
            }
        });
        ////////////////////////////////

        return (
            <Container>
                {this.mapMemes()}
            </Container>
        )
    }
}
