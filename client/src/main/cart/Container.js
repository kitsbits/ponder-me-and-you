import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../redux/cart";
import Item from "./Item";

class CartContainer extends React.Component {
    constructor() {
        super();
        this.removeItem = this.removeItem.bind(this);
    }
    mapCart() {
        return this.props.cart.inCart.map((item, i) => {
            return <Item key={i} item={item} remove={this.removeItem}/>
        });
    }

    removeItem(item) {
        this.props.removeItem(item);
    }

    render() {
        return this.mapCart();
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addItem, removeItem })(CartContainer);
