import React from "react";
import glamorous from "glamorous";

export default function AddComponent(props) {
    ///////// STYLES \\\\\\\\\\
    const Form = glamorous.form({
    });
    ////////////////////////////////

    return (
        <Form onSubmit={props.handleSubmit}>
            <input type="text" name="title" value={props.input.title} onChange={props.handleChange}/>
            <input type="text" name="pictureUrl" value={props.input.pictureUrl} onChange={props.handleChange}/>
            <button type="submit">ADD</button>
        </Form>
    )
}
