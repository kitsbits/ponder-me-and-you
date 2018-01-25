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
    inCart: JSON.parse(window.localStorage.getItem("cart")) || [],
    tax: 0.00,
    total: 0.00,
    shipping: 0.00
};

export default function reducer(prevState = state, action) {
    let newCart = [...prevState.inCart];
    switch(action.type) {
        case "ADD_ITEM":
        newCart.push(action.item);
        localStorage.setItem("cart", JSON.stringify(newCart));
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
