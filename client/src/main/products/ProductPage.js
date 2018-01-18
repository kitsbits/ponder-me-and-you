import React from "react";
import glamorous from "glamorous";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

function ProductPage(props) {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({
        paddingBottom: "55px",
    });
    const Title = glamorous.h2({
        textAlign: "right",
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
            <Title>{props.selectedMeme.ready ? props.selectedMeme.meme.title.toUpperCase() : "LOADING..."}</Title>
            <Background><Meme src={props.selectedMeme.ready ? props.selectedMeme.meme.products[props.product].pictureUrl : null}/></Background>
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProductPage);
