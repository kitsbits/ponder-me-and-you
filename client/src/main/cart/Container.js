import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart";
import Item from "./Item";

class CartContainer extends React.Component {
    mapCart() {
        return this.props.cart.inCart.map((item, i) => {
            return <Item key={i}/>
        });
    }

    render() {
        
        // return <h1>hi</h1>
        return this.mapCart();
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addToCart })(CartContainer);
