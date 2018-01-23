// ACTIONS \\
export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        item
    }
}

/////////////////////////////

// REDUCER \\
const state = {
    inCart: [],
    tax: 0.00,
    total: 0.00,
    shipping: 0.00
};

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            let newCart = [...prevState.inCart];
            return {
                ...prevState,
                inCart: newCart.push(action.item)
            }
        default:
            return prevState;
    }
}

/////////////////////////////
