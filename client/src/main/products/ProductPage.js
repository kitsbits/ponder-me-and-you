import React from "react";
import glamorous from "glamorous";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { mediaQueries, colors } from "../../styles/global";

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
        [mediaQueries.medium]: {
            height: "320.97px",
            width: "375px",
        },
        [mediaQueries.small]: {
            height: "256.77px",
            width: "300px",
        }
    });

    const DetailsContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "35px",
        width: "465px",
        [mediaQueries.medium]: {
            width: "375px",
        },
        [mediaQueries.small]: {
            width: "300px",
        }
    });

    const BuyButton = glamorous.button({
        height: "65px",
        width: "150px",
        outline: "none",
        border: "none",
        backgroundColor: colors.green,
        fontSize: "1em",
    });

    const SelectSize = glamorous.select({
        height: "65px",
        width: "200px",
        fontSize: "1.2em",
        color: colors.grey,
        borderRadius: "none",
        outline: "none",
        textAlign: "center",
    });

    // Img styles are dynamically set based on url parameters - edit these styles in ProductPage's Container class
    const Meme = glamorous.img(props.memeStyles());
    ////////////////////////////////
    return (
        <Container>
            <Title>{props.selectedMeme.ready ? props.selectedMeme.meme.title.toUpperCase() : "LOADING..."}</Title>
            <Background><Meme src={props.selectedMeme.ready ? props.selectedMeme.meme.products[props.params.type].pictureUrl : null}/></Background>
            <DetailsContainer>
                <BuyButton type="button">ADD TO CART</BuyButton>
                <SelectSize>
                    {props.sizes()}
                </SelectSize>
            </DetailsContainer>
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProductPage);
