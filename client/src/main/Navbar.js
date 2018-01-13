import React from "react";
import glamorous from "glamorous";

export default function Navbar() {
    ///////// STYLES \\\\\\\\\\
    const mediaQueries = {
        small: "@media screen and (max-width: 414px)",
        medium: "@media screen and (max-width: 768px)",
    }
    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        height: "75px",
        backgroundColor: "#ECFF6A",
        width: "100%",
        margin: "0 auto 100px auto",
        transition: "all 0.2s ease-in-out",
        [mediaQueries.medium]: {
            flexDirection: "column-reverse",
            height: "190px",
            padding: "25px",
            margin: "0 auto 50px auto",
        }
    });

    const Logo = glamorous.img({
        height: "auto",
        width: "444px",
        transform: "translateY(40%)",
        transition: "all 0.2s ease-in-out",
        [mediaQueries.medium]: {
            height: "auto",
            width: "300px",
            transform: "translateY(0)",
            marginTop: "25px",
        }
    });

    const LinkContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        width: "25%",
    });

    const NavLink = glamorous.a({
        color: "#24251D",
        margin: "auto 10px",
        [mediaQueries.medium]: {
            margin: "auto 50px",
        }
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
