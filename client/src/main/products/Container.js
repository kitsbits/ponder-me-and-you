import React from "react";
import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { selectMeme, getUrlParams } from "../redux";

class MemeContainer extends React.Component {
    constructor() {
        super();
        this.chooseBackground = this.chooseBackground.bind(this);
        this.setMemePosition = this.setMemePosition.bind(this);
    }

    componentDidMount() {
        this.props.selectMeme(this.props.match.params.id);
        this.props.getUrlParams(this.props.match.params);
    }

    chooseBackground() {
        switch(this.props.match.params.type) {
            case "framed":
                return "https://www.dropbox.com/s/jfrbw41y6pa3yi6/framed_background.jpg?raw=1";
            case "unframed":
                return "https://www.dropbox.com/s/xvgncdff7t5acfh/unframed_background.jpg?raw=1";
        }
    }

    setMemePosition() {
        switch(this.props.match.params.type) {
            case "framed":
                return {
                    position: "absolute",
                    top: "50px",
                    left: "50px",
                    height: "220px",
                    width: "220px",
                }


            case "unframed":
                return {
                    position: "absolute",
                    top: "-25px",
                    left: "50px",
                    height: "270px",
                    width: "270px",
                }

        }
    }

    render() {
        return (
            <ProductPage
                params={this.props.match.params}
                backgroundUrl={this.chooseBackground}
                memeStyles={this.setMemePosition}/>
        )
    }
}

export default connect(null, { selectMeme, getUrlParams })(MemeContainer);
