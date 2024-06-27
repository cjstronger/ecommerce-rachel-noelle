"use client";

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  isLoading: false,
  cartItems: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cart/loaded":
      return {
        ...state,
        isLoading: false,
        cartItems: action.payload,
      };
    case "item/added":
      return {
        ...state,
        isLoading: false,
        cartItems: [...cartItems, action.payload],
      };
    case "item/removed":
      return {
        ...state,
        isLoading: false,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem !== action.payload
        ),
      };
    case "errored":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [{ isLoading, cartItems }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function getCartItems() {
    dispatch({ type: "loading" });
    try {
      const res = localStorage.getItem("cartItems");
      const data = res ? JSON.parse(res) : [];
      dispatch({ type: "cart/loaded", payload: data });
    } catch {
      dispatch({
        type: "errored",
        payload: "There was an error loading the cart",
      });
    }
  }
  function addCartItem(id) {
    dispatch({ type: "loading" });
    try {
      const res = localStorage.getItem("cartItems");
      const data = res ? JSON.parse(res) : [];
      const updatedItems = [...data, id];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      dispatch({ type: "item/added", payload: id });
    } catch {
      dispatch({
        type: "errored",
        payload: "There was an error adding an item to the cart",
      });
    }
  }
  function deleteCartItem(id) {
    dispatch({ type: "loading" });
    try {
      const res = localStorage.getItem("cartItems");
      const data = res ? JSON.parse(res) : [];
      const updatedItems = data.filter((item) => item !== id);
      localStorage.setItem(cartItems, JSON.stringify(updatedItems));
      dispatch({ type: "item/removed", payload: id });
    } catch {
      dispatch({
        type: "errored",
        payload: "There was an error removing the item from the cart",
      });
    }
  }
  return (
    <CartContext.Provider
      value={{
        isLoading,
        cartItems,
        getCartItems,
        deleteCartItem,
        addCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error(
      "You're trying to use the useCart outside of the Cart provider"
    );
  return context;
}

export { useCart, CartProvider };
