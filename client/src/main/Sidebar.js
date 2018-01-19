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
        // flexWrap: "wrap",
        [mediaQueries.medium]: {
            position: "absolute",
            flexDirection: "row",
            left: "50%",
            transform: "translateX(-55%)",
        }
    });

    const productPageLinks = {
        textDecoration: "none",
        color: colors.grey,
    }

    const Links = glamorous.div({
        position: "relative",
        width: "125px",
        height: "45px",
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
            width: "100px",
            height: "55px",
        }
    });

    const OnCurrentPage = glamorous.div({
        position: "absolute",
        bottom: "-2px",
        left: "15%",
        // height: "45px",
        width: "95%",
        borderBottom: `2px solid ${colors.grey}`,
    });

    const Title = glamorous.h1({
        marginRight: "10px",
    });

    const ProductLinkContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "35px auto auto 35px",
        height: "175px",
        [mediaQueries.medium]: {
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            bottom: "-750%",
            width: "100vw",
            margin: "auto",
            fontSize: "0.85em",
            height: "auto",
        },
        [mediaQueries.small]: {
            bottom: "-650%",
            marginLeft: "-5%",
            height: "auto",
        }
    });

    const productLinks = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // height: "66px",
        fontSize: "1.2em",
        textDecoration: "none",
        color: colors.grey,

    };
    ////////////////////////////////
    return (
        <Container>
            <Title>SHOP</Title>
            <Links><Link to={`/products/prints`} style={productPageLinks}>PRINTS{props.urlParams.product === "prints" ? <OnCurrentPage /> : null}</Link></Links>
            <Links><Link to={`/products/totes`} style={productPageLinks}>TOTES{props.urlParams.product === "totes"? <OnCurrentPage /> : null}</Link></Links>
            {props.urlParams ?
            (<ProductLinkContainer>
                <Link to={`/products/prints/${props.urlParams.id}/framed`} style={productLinks}>Matte Poster<br/>FRAMED{props.urlParams.type === "framed" ? <OnCurrentPage /> : null}</Link>
                <Link to={`/products/prints/${props.urlParams.id}/unframed`} style={productLinks}>Matte Poster<br/>UNFRAMED{props.urlParams.type === "unframed" ? <OnCurrentPage /> : null}</Link>
                <Link to={`/products/prints/${props.urlParams.id}/canvas`} style={productLinks}>Canvas Print{props.urlParams.type === "canvas" ? <OnCurrentPage /> : null}</Link>
            </ProductLinkContainer>)
            :
            null}
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(Sidebar);
