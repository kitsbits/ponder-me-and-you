import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem, computeTotal } from "../redux/cart";
import glamorous from "glamorous";

import Item from "./Item";
import NothingInCart from "./NothingInCart";
import CartTotal from "./CartTotal";

class CartContainer extends React.Component {
    constructor() {
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        this.props.computeTotal();
    }

    mapCart() {
        return this.props.cart.inCart.map((item, i) => {
            return <Item key={i}
                        item={item}
                        remove={this.removeItem}/>
        });
    }

    removeItem(item) {
        this.props.removeItem(item);
    }

    render() {
        return (
            <div>
                {this.mapCart()}
                {this.props.cart.total > 0 ? <CartTotal total={this.props.cart.total}/> : <NothingInCart/> }
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addItem, removeItem, computeTotal })(CartContainer);
