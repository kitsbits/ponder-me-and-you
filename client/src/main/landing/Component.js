import React from "react";
import glamorous from "glamorous";
import { mediaQueries, colors } from "../../styles/global";

export default function Component(props) {
    const sizing = {
        height: 412,
        width: 412,
        padding: {
            top: 60,
            right: 70,
            bottom: 25,
            left: 70,
        },
        medium: {
            height: 375,
            width: 375,
        },
        small: {
            height: 300,
            width: 300,
        }
    }
    ///////// STYLES \\\\\\\\\\
    const Card = glamorous.div({
        padding: `${sizing.padding.top}px ${sizing.padding.right}px ${sizing.padding.bottom}px ${sizing.padding.left}px`,
        backgroundColor: "white",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
        marginBottom: `${sizing.padding.top + 10}px`,
        [mediaQueries.medium]: {
            padding: "0",
            backgroundColor: "transparent",
            boxShadow: "none",
        }
    });

    const Meme = glamorous.img({
        width: sizing.width,
        height: sizing.height,
        [mediaQueries.medium]: {
            height: sizing.medium.height,
            width: sizing.medium.width,
        },
        [mediaQueries.small]: {
            height: sizing.small.height,
            width: sizing.small.width,
        }
    });

    const ClickContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: `${sizing.width}px`,
        padding: "20px 0 0 0",
        [mediaQueries.medium]: {
            width: sizing.medium.width,
        },
        [mediaQueries.small]: {
            width: sizing.small.width,
        }
    });

    const BuyButton = glamorous.a({
        height: `${sizing.padding.right}px`,
        width: `${sizing.padding.right + 15}px`,
        padding: "5px 5px 35px 5px",
        textAlign: "center",
        backgroundColor: colors.green,
        fontSize: "2em",
    });

    const ShareContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        height: `${sizing.padding.right}px`,
        width: "150px",
        color: colors.grey,
    });

    const ShareTitle = glamorous.h3({
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "40px",
        margin: "0 0 5px 0",
        paddingRight: "10px",
        backgroundColor: colors.green,
    });

    const IconContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
    });

    const IconLinks = glamorous.a({
        textDecoration: "none",
        color: colors.grey,
    });
    ////////////////////////////////
    return (
        <Card>
            <Meme src={props.meme.pictureUrl} alt={props.meme.title} />
            <ClickContainer>
                <BuyButton>BUY</BuyButton>
                <ShareContainer>
                    <ShareTitle>SHARE</ShareTitle>
                    <IconContainer>
                        <IconLinks href=""><i className="fa fa-2x fa-twitter"></i></IconLinks>
                        <IconLinks href=""><i className="fa fa-2x fa-pinterest"></i></IconLinks>
                        <IconLinks href=""><i className="fa fa-2x fa-facebook-official"></i></IconLinks>
                    </IconContainer>
                </ShareContainer>
            </ClickContainer>
        </Card>
    )
}
