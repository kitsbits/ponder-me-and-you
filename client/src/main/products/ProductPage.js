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
        background: `url(${props.backgroundUrl()}) no-repeat center`,
        backgroundSize: "cover",
        height: "398px",
        width: "465px",
    });

    // Img styles are dynamically set based on url parameters - edit these styles in ProductPage's Container class
    const Meme = glamorous.img(props.memeStyles());
    ////////////////////////////////
    console.log(props.params);
    return (
        <Container>
            <Title>{props.selectedMeme.ready ? props.selectedMeme.meme.title.toUpperCase() : "LOADING..."}</Title>
            <Background><Meme src={props.selectedMeme.ready ? props.selectedMeme.meme.products[props.params.type].pictureUrl : null}/></Background>
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProductPage);
