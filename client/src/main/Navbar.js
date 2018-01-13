import React from "react";
import glamorous from "glamorous";

export default function Navbar() {
    ///////// STYLES \\\\\\\\\\
    const mediaQueries = {
        medium: "@media screen and (max-width: 785px)",
    }
    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        height: "75px",
        backgroundColor: "#ECFF6A",
        width: "100%",
        marginBottom: "100px",
    });

    const Logo = glamorous.img({
        height: "88.45px",
        width: "444.22px",
        transform: "translateY(40%)",
    });

    const LinkContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        width: "25%",
        [mediaQueries.medium]: {
            width: "100%",
            justifyContent: "center",
        }
    });

    const NavLink = glamorous.a({
        color: "#24251D",
        margin: "auto 10px",
    });
    ////////////////////////////////////

    return (
        <Container>
            <Logo src="https://www.dropbox.com/s/z9dvyed568m20a6/logo.png?raw=1"/>
            <LinkContainer>
                <NavLink href="" target="blank">
                    <i className="fa fa-3x fa-instagram"></i>
                </NavLink>
                <NavLink href="" target="blank">
                    <i className="fa fa-3x fa-facebook-official"></i>
                </NavLink>
            </LinkContainer>
        </Container>
    )
}
