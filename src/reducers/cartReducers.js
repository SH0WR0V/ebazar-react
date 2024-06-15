export const cartReducers = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products, total: payload.total };

        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products, total: payload.total };

        case "CLEAR_CART":
            return { ...state, cartList: payload.cartList, total: payload.total };

        case "UPDATE_QUANTITY":
            return { ...state, cartList: payload.products, total: payload.total };

        default:
            throw new Error("No case found");
    }
}
