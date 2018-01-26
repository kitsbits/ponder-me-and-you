import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import { mediaQueries, colors } from "../styles/global";
import { misc } from "../assets/pictures";
export default function Navbar() {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({
        position: "fixed",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        height: "75px",
        backgroundColor: colors.green,
        width: "100%",
        margin: "0 auto 100px auto",
        transition: "all 0.2s ease-in-out",
        zIndex: "2",
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
        color: colors.grey,
        margin: "auto 10px",
        [mediaQueries.medium]: {
            margin: "auto 50px",
        }
    });
    ////////////////////////////////////

    return (
        <Container>
            <Link to="/"><Logo src={misc.logo}/></Link>
            <LinkContainer>
                <NavLink href="" target="blank">
                    <i className="fa fa-3x fa-instagram"></i>
                </NavLink>
                <NavLink href="" target="blank">
                    <i className="fa fa-3x fa-facebook-official"></i>
                </NavLink>
                <Link to="/cart">CART</Link>
            </LinkContainer>
        </Container>
    )
}
