import React from "react";
import glamorous from "glamorous";


export default function AddComponent(props) {
    ///////// STYLES \\\\\\\\\\

    ////////////////////////////////

    return (
        <form onSubmit={props.handleSubmit} name="add">
            <input type="text" name="title" value={props.input.title} placeholder="Enter a title" onChange={props.handleChange}/>
            <input type="text" name="pictureUrl" value={props.input.pictureUrl} placeholder="Enter the picture URL" onChange={props.handleChange}/>
            <button type="submit">ADD</button>
        </form>
    )
}
