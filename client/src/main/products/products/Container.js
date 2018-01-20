import React from "react";
import ProductPage from "./ProductPage";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectMeme, getUrlParams, getMemes } from "../../redux";
import { mediaQueries, sizes } from "../../../styles/global";

class MemeContainer extends React.Component {
    constructor() {
        super();
        this.chooseBackground = this.chooseBackground.bind(this);
        this.setMemePosition = this.setMemePosition.bind(this);
        this.mapSizeSelections = this.mapSizeSelections.bind(this);
        this.mapMemes = this.mapMemes.bind(this);
    }

    componentDidMount() {
        this.props.getMemes();
        this.props.selectMeme(this.props.match.params.id);
        this.props.getUrlParams(this.props.match.params);
    }

    /////// THUMBNAIL METHODS ///////
    mapMemes() {
        return this.props.memes.map(meme => {
            return <Link to={`../${meme._id}/${this.props.match.params.product}`} key={meme._id}><Thumbnail meme={meme} /></Link>;
        });
    }
    //////////////////////////////////////////////

    /////// PRODUCT PAGE METHODS ///////
    mapSizeSelections() {
        const product = this.props.match.params.product;
        return sizes[product].map(size => {
            return <option key={size}>{size}</option>;
        });
    }

    chooseBackground() {
        switch(this.props.match.params.product) {
            case "framed":
                return "https://www.dropbox.com/s/jfrbw41y6pa3yi6/framed_background.jpg?raw=1";
            case "unframed":
                return "https://www.dropbox.com/s/xvgncdff7t5acfh/unframed_background.jpg?raw=1";
            case "canvas":
                return "https://www.dropbox.com/s/ywpkvpsrctvptjt/canvas_background.jpg?raw=1";
        }
    }

    setMemePosition() {
        switch(this.props.match.params.product) {
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
            <div>
                <ProductPage
                    params={this.props.match.params}
                    backgroundUrl={this.chooseBackground}
                    memeStyles={this.setMemePosition}
                    sizes={this.mapSizeSelections}
                    mapMemes={this.mapMemes}/>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { selectMeme, getUrlParams, getMemes })(MemeContainer);
