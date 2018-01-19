import React from "react";
import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { selectMeme, getUrlParams } from "../redux";
import { mediaQueries, sizes } from "../../styles/global";

class MemeContainer extends React.Component {
    constructor() {
        super();
        this.chooseBackground = this.chooseBackground.bind(this);
        this.setMemePosition = this.setMemePosition.bind(this);
        this.mapSizeSelections = this.mapSizeSelections.bind(this);
    }

    componentDidMount() {
        this.props.selectMeme(this.props.match.params.id);
        this.props.getUrlParams(this.props.match.params);
    }

    mapSizeSelections() {
        const type = this.props.match.params.type;
        return sizes[type].map(size => {
            return <option key={size}>{size}</option>;
        });
    }

    chooseBackground() {
        switch(this.props.match.params.type) {
            case "framed":
                return "https://www.dropbox.com/s/jfrbw41y6pa3yi6/framed_background.jpg?raw=1";
            case "unframed":
                return "https://www.dropbox.com/s/xvgncdff7t5acfh/unframed_background.jpg?raw=1";
            case "canvas":
                return "https://www.dropbox.com/s/ywpkvpsrctvptjt/canvas_background.jpg?raw=1";
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
                    [mediaQueries.medium]: {
                        height: "190px",
                        width: "190px",
                        top: "30px",
                        left: "30px",
                    },
                    [mediaQueries.small]: {
                        height: "150px",
                        width: "150px",
                    }
                };

            case "unframed":
                return {
                    position: "absolute",
                    top: "-25px",
                    left: "50px",
                    height: "270px",
                    width: "270px",
                    [mediaQueries.medium]: {
                        height: "240px",
                        width: "240px",
                        left: "25px",
                    },
                    [mediaQueries.small]: {
                        height: "190px",
                        width: "190px",
                        top: "-20px",
                        left: "25px",
                    }
                };

            case "canvas":
                return {
                    position: "absolute",
                    left: "65px",
                    height: "405px",
                    [mediaQueries.medium]: {
                        height: "327px",
                        left: "50px",
                    },
                    [mediaQueries.small]: {
                        height: "264px",
                        left: "40px",
                    }
                };

        }
    }

    render() {
        return (
            <ProductPage
                params={this.props.match.params}
                backgroundUrl={this.chooseBackground}
                memeStyles={this.setMemePosition}
                sizes={this.mapSizeSelections}/>
        )
    }
}

export default connect(null, { selectMeme, getUrlParams })(MemeContainer);
