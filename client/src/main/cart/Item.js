import React from "react";
import glamorous from "glamorous";

export default function Item(props) {
    // STYLES \\
    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "900px",
    });
    //////////////////////////
    return (
        <Container>
            <p>{props.item.title}</p>
            <h1>{props.item.product}</h1>
            <img height="150px" width="150px" src={props.item.pictureUrl} alt="a picture" />
            <p>{props.item.selectedSize}</p>
            <h3>{props.item.price}</h3>
        </Container>
    );
}
