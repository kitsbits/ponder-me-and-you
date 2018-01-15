import React from "react";
import axios from "axios";
import glamorous from "glamorous";
import { mediaQueries } from "../../styles/global";
import { connect } from "react-redux";
import { getMemes } from "../redux/landing";
import MemeComponent from "./MemeComponent";

class LandingContainer extends React.Component {

    mapMemes() {
        return this.props.landing.memes.map(meme => {
                return <MemeComponent
                    key={meme._id}
                    meme={meme}/>
        });
    }

    componentDidMount() {
        this.props.getMemes();
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {getMemes})(LandingContainer);
