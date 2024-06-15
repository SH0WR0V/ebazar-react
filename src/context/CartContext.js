import { createContext, useContext, useReducer } from "react";
import { cartReducers } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducers, cartInitialState);

    function addToCart(product) {
        const updatedCartList = [...state.cartList, { ...product, quantity: 1 }];
        const updatedTotal = updatedCartList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCartList,
                total: Number(updatedTotal)
            }
        });
    }

    function removeFromCart(product) {
        const updatedCartList = state.cartList.filter((item) => item.id !== product.id);
        const updatedTotal = updatedCartList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCartList,
                total: Number(updatedTotal)
            }
        });
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                cartList: [],
                total: 0
            }
        });
    }

    function updateQuantity(productId, quantity) {
        const updatedCartList = state.cartList.map((item) =>
            item.id === productId ? { ...item, quantity } : item
        );
        const updatedTotal = updatedCartList.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
                products: updatedCartList,
                total: Number(updatedTotal)
            }
        });
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
