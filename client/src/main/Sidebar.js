import React from "react";
import glamorous from "glamorous";
import { mediaQueries, colors } from "../styles/global"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Sidebar(props) {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({
        position: "fixed",
        margin: "200px auto auto 4%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        [mediaQueries.medium]: {
            position: "absolute",
            flexDirection: "row",
            left: "50%",
            transform: "translateX(-55%)",
        }
    });

    const Links = glamorous.a({
        width: "125px",
        height: "35px",
        backgroundColor: colors.green,
        margin: "10px 0",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
        color: colors.grey,
        fontSize: "1.2em",
        ":hover": {
            borderBottom: `2px solid ${colors.grey}`,
        },
        [mediaQueries.medium]: {
            marginRight: "10px",
            width: "110px",
            height: "55px",
        }
    });

    const Title = glamorous.h1({
        marginRight: "20px",
    });

    const ProductLinkContainer = glamorous.div({

    });

    const productLinks = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "66px",
        fontSize: "1.2em",
        textDecoration: "none",
        color: colors.grey,

    };
    ////////////////////////////////
    return (
        <Container>
            <Title>SHOP</Title>
            <Links href="" target="blank">PRINTS</Links>
            <Links href="" target="blank">TOTES</Links>
            {props.urlParams ?
            (<ProductLinkContainer>
                <Link to={`/meme/${props.urlParams.id}/framed`} style={productLinks}>Matte Poster<br/>FRAMED</Link>
                <Link to={`/meme/${props.urlParams.id}/unframed`} style={productLinks}>Matte Poster<br/>UNFRAMED</Link>
                <Link to={`/meme/${props.urlParams.id}/canvas`} style={productLinks}>Canvas Print</Link>
            </ProductLinkContainer>)
            :
            null}
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(Sidebar);
