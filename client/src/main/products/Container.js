import React from "react";
import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { selectMeme, getUrlParams } from "../redux";

class MemeContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.selectMeme(this.props.match.params.id);
        this.props.getUrlParams(this.props.match.params);
    }

    render() {
        return (
            <ProductPage product={this.props.match.params.product}/>
        )
    }
}

export default connect(null, { selectMeme, getUrlParams })(MemeContainer);
