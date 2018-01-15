import axios from "axios";

// ACTIONS \\
export function getMemes() {
    return (dispatch) => {
        axios
        .get("http://localhost:6100/home")
        .then(response => {
            dispatch({
                type: "GET_MEMES",
                memes: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    };
}
/////////////////////

// REDUCER \\
const state = {
    memes: []
};

export default function landing(prevState = state, action) {
    switch(action.type) {
        case "GET_MEMES":
            return {
                ...prevState,
                memes: action.memes
            };

        default:
        return state;
    }
}
/////////////////////
