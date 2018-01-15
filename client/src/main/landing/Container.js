import React from "react";
import axios from "axios";
import glamorous from "glamorous";
import { mediaQueries } from "../../styles/global";
import MemeComponent from "./MemeComponent";

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
                return <MemeComponent
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
        });
        ////////////////////////////////

        return (
            <Container>
                {this.mapMemes()}
            </Container>
        )
    }
}
