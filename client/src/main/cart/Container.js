import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart";
import Item from "./Item";

class CartContainer extends React.Component {
    mapCart() {
        return this.props.cart.inCart.map((item, i) => {
            return <Item key={i} item={item}/>
        });
    }

    render() {

        // return <h1>hi</h1>
        return this.mapCart();
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addItem })(CartContainer);
