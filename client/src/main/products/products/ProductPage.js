import React from "react";
import glamorous from "glamorous";
import { connect } from "react-redux";
import { mediaQueries, colors } from "../../../styles/global";

import Option from "./Option";
import Price from "./Price";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSize: [...props.products.sizes[props.params.product].keys()][0]
        };

        this.mapSizes = this.mapSizes.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount() {

    }

    mapSizes() {
        const product = this.props.params.product;
        const availableSizes = [...this.props.products.sizes[product].keys()];
        return availableSizes.map(size => {
                return <Option key={size} size={size} />;
        });
    }

    handleSelect() {
        this.setState({
            selectedSize: document.getElementById("sizes").selectedOptions[0].value
        });
    }

    render() {
        ///////// STYLES \\\\\\\\\\
        const Container = glamorous.div({
            display: "flex",
            flexDirection: "column",
            paddingBottom: "35px",
            [mediaQueries.large]: {
                flexDirection: "row",
                justifyContent: "space-around",
                width: "70vw",
                maxWidth: "980px",
            },
        });

        const ProductContainer = glamorous.div({
            paddingBottom: "55px",
            width: "465px",
            [mediaQueries.medium]: {
                width: "375px",
            },
            [mediaQueries.small]: {
                width: "300px",
            },
        });
        const Title = glamorous.h2({
            textAlign: "right",
        });

        const Background = glamorous.div({
            position: "relative",
            background: `url(${this.props.backgroundUrl()}) no-repeat center`,
            backgroundSize: "cover",
            height: "398px",
            width: "100%",
            [mediaQueries.medium]: {
                height: "320.97px",
            },
            [mediaQueries.small]: {
                height: "256.77px",
            }
        });

        const DetailsContainer = glamorous.div({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "35px",
            width: "100%",
            [mediaQueries.medium]: {
                marginBottom: "130px",
            },
        });

        const BuyButton = glamorous.button({
            height: "65px",
            width: "30%",
            outline: "none",
            border: "none",
            backgroundColor: colors.green,
            fontSize: "1em",
        });

        const Price = glamorous.h1({
            color: colors.darkGreen,
        })

        const SelectContainer = glamorous.div({
            position: "relative",
            height: "65px",
            width: "40%",
            border: `1px solid ${colors.grey}`,
        });

        const SelectSize = glamorous.select({
            position: "relative",
            height: "62px",
            width: "100%",
            fontSize: "1.2em",
            WebkitAppearance: "none",
            backgroundColor: "transparent",
            paddingLeft: "15px",
            color: colors.grey,
            border: "none",
            outline: "none",
            textAlign: "center",
            zIndex: "1",
        });

        const chevron = {
            color: colors.grey,
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
        }

        const MoreContainer = glamorous.div({
            marginTop: "15px",
        });

        const ChooseMemeTitle = glamorous.p({
            paddingBottom: "15px",
            borderBottom: `1px dashed ${colors.grey}`,
            marginBottom: "35px",
        });

        const MemesContainer = glamorous.div({
            width: "550px",
            height: "300px",
            whiteSpace : "nowrap",
            overflowX: "scroll",
            [mediaQueries.medium]: {
                whiteSpace : "normal",
                width: "300px",
                height: "auto",
            },
            [mediaQueries.large]: {
                whiteSpace : "normal",
                width: "250px",
                height: "467px",
            },
        });

        const Meme = glamorous.img(this.props.memeStyles());
        ////////////////////////////////
        return (
            <Container>
            <ProductContainer>
                <Title>{this.props.products.selectedMeme.ready ? this.props.products.selectedMeme.meme.title.toUpperCase() : "LOADING..."}</Title>
                <Background><Meme src={this.props.products.selectedMeme.ready ? this.props.products.selectedMeme.meme.products[this.props.params.product].pictureUrl : null}/></Background>
                <DetailsContainer>
                    <BuyButton type="button">ADD TO CART</BuyButton>
                    <Price>${this.props.products.sizes[this.props.params.product].get(this.state.selectedSize)}</Price>
                    <SelectContainer>
                        <SelectSize onChange={this.handleSelect} id="sizes" value={this.state.selectedSize}>
                            {this.mapSizes()}
                        </SelectSize>
                        <i className="fa fa-lg fa-chevron-down" style={chevron}/>
                    </SelectContainer>
                </DetailsContainer>
            </ProductContainer>
            <MoreContainer>
                <ChooseMemeTitle>More</ChooseMemeTitle>
                <MemesContainer>
                    {this.props.mapMemes()}
                </MemesContainer>
            </MoreContainer>
            </Container>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProductPage);
