import React from "react";

export default function AddComponent(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="title" value={props.input.title} onChange={props.handleChange}/>
            <input type="text" name="pictureUrl" value={props.input.pictureUrl} onChange={props.handleChange}/>
            <button type="submit">ADD</button>
        </form>
    )
}
