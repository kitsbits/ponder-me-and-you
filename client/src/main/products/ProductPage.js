import React from "react";
import glamorous from "glamorous";
import { connect } from "react-redux";

function ProductPage(props) {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({

    });
    const Title = glamorous.h2({

    });

    const Background = glamorous.div({
        position: "relative",
        background: "url(https://www.dropbox.com/s/jfrbw41y6pa3yi6/framed_background.jpg?raw=1) no-repeat center",
        backgroundSize: "cover",
        height: "398px",
        width: "465px",
    });

    const Meme = glamorous.img({
        position: "absolute",
        top: "50px",
        left: "50px",
        height: "220px",
        width: "220px",
    });
    ////////////////////////////////

    return (
        <Container>
            <Title>{props.selectedMeme.meme.title}</Title>
        <Background><Meme src={props.selectedMeme.canEdit ? props.selectedMeme.meme.products.framed.pictureUrl : null}/></Background>
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProductPage);
