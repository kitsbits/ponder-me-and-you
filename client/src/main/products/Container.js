import React from "react";
import ProductPage from "./ProductPage";
import { connect } from "react-redux";
import { selectMeme } from "../redux";

class MemeContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.selectMeme(this.props.match.params.id);
    }

    render() {
        return (
            <ProductPage />
        )
    }
}

export default connect(null, { selectMeme })(MemeContainer);
