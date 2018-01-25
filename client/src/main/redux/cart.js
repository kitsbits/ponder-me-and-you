// ACTIONS \\
export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
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
    let newCart = [...prevState.inCart];
    newCart.push(action.item);
    switch(action.type) {
        case "ADD_ITEM":
            return {
                ...prevState,
                inCart: newCart
            }

        case "REMOVE_ITEM":
            return {
                ...prevState,
                inCart: newCart.push(action.item)
            }
        default:
            return prevState;
    }
}

/////////////////////////////
