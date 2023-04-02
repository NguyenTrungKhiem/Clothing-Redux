// For add Item to cart --- Action

export const addCart = (product) => {
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For delete Item to cart --- Action

export const delCart = (product) => {
    return {
        type:"DELITEM",
        payload:product
    }
}