import axios from "axios";

// ACTIONS \\
export function getMemes() {
    return (dispatch) => {
        axios
        .get("http://localhost:6100/memes")
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

export function addMeme(meme) {
    return (dispatch) => {
        axios
        .post("http://localhost:6100/admin", meme)
        .then(response => {
            dispatch({
                type: "ADD_MEME",
                memeAdded: response.data
            });
        })
        .catch(err => console.log(err));
    }
}

// get one meme
export function selectMeme(id) {
    return (dispatch) => {
        axios
        .get(`http://localhost:6100/memes/${id}`)
        .then(response => {
            dispatch({
                type: "SELECT_MEME",
                selectedMeme: response.data
            });
        })
        .catch(err => console.log(err));
    }
}

export function updateMeme(id, updatedMeme) {
    return (dispatch) => {
        axios
        .put(`http://localhost:6100/admin/${id}`, updatedMeme)
        .then(response => {
            dispatch({
                type: "UPDATE_MEME",
                updatedMeme: response.data
            });
        }).catch(err => console.log(err));
    };
}

// store url parameters in store to allow sidebar to access params, dynamically render user link options
export function getUrlParams(params) {
    return {
        type: "GET_URL_PARAMS",
        params
    }
}
/////////////////////

// REDUCER \\
const state = {
    memes: [],
    selectedMeme: {
        meme: {},
        ready: false
    },
    urlParams: {

    }
};

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "GET_MEMES":
            return {
                ...prevState,
                memes: action.memes
            };

        case "ADD_MEME":
            return {
                ...prevState,
                memes: [...prevState.memes].push(action.memeAdded)
            };

        case "SELECT_MEME":
            return {
                ...prevState,
                selectedMeme: {
                    ...prevState.selectedMeme,
                    meme: action.selectedMeme,
                    ready: true
                }
            };

        case "UPDATE_MEME":
            return {
                ...prevState,
                updatedMeme: action.updatedMeme
            };

        case "GET_URL_PARAMS":
            return {
                ...prevState,
                urlParams: action.params
            };

        default:
        return state;
    }
}
/////////////////////
