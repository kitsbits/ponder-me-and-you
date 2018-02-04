import React from "react";
import glamorous from "glamorous";
import { colors } from "../../styles/global";

export default function CartTotal(props) {
    const Total = glamorous.h3({
        textAlign: "right",
        borderTop: `2px dotted ${colors.grey}`,
        paddingTop: "22px",
    })
    return (<Total>Total: ${props.total}</Total>)
}
