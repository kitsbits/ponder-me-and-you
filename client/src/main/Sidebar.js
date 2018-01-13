import React from "react";
import glamorous from "glamorous";
import { mediaQueries, colors } from "../styles/global"

export default function Sidebar() {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({
        position: "fixed",
        margin: "200px auto auto 4%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        [mediaQueries.medium]: {
            flexDirection: "row",
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
        }
    });

    const Title = glamorous.h1({
        marginRight: "20px",
    });
    ////////////////////////////////
    return (
        <Container>
            <Title>SHOP</Title>
            <Links href="" target="blank">PRINTS</Links>
            <Links href="" target="blank">TOTES</Links>
        </Container>
    )
}
