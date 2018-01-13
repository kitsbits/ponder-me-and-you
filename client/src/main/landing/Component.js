import React from "react";

export default function Component(props) {
    return (
        <div>
            <h1>{props.meme.title}</h1>
            <img src={props.meme.pictureUrl} alt="a picture" width="470px" height="470px" />
        </div>
    )
}
