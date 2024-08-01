"use client";

import { createContext, useContext, useReducer, useState } from "react";
import { getStripeProducts } from "../_lib/actions";
import toast from "react-hot-toast";

const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "adding":
      return {
        ...state,
        itemAdding: true,
        cartItems: [...state.cartItems, action.payload],
        isLoading: false,
      };

    case "cart/loaded":
      return {
        ...state,
        isLoading: false,
        cartItems: action.payload,
      };
    case "item/added":
      return {
        ...state,
        itemAdding: false,
      };
    case "item/removed":
      return {
        ...state,
        isLoading: false,
        cartItems: state.cartItems.filter((cartItem) => {
          if (cartItem[0].id !== action.payload) {
            return true;
          } else {
            return false;
          }
        }),
      };
    case "errored":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const initialState = {
    isLoading: false,
    itemAdding: false,
    cartItems: [],
    error: "",
  };
  const [openCart, setOpenCart] = useState(false);
  const [stateCart, setStateCart] = useState([]);
  const [{ isLoading, cartItems, itemAdding }, dispatch] = useReducer(
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
  async function addCartItem(id) {
    const products = await getStripeProducts();
    dispatch({ type: "loading" });
    try {
      const item = products?.filter((e) => e.id === id);
      const res = localStorage.getItem("cartItems");
      const data = res ? JSON.parse(res) : [];
      const repeatData =
        data.length > 0 && data.filter((e, i) => e[0].id === id);
      if (repeatData.length > 0) {
        toast.success("Item is already in the cart");
        return;
      }
      const updatedItems = [...data, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      dispatch({ type: "adding", payload: item[0].product.name });
      setTimeout(() => dispatch({ type: "item/added" }), 2000);
      toast.success(`${item[0].product.name} added to cart`);
      return item;
    } catch {
      dispatch({
        type: "errored",
        payload: "There was an error adding an item to the cart",
      });
      toast.error("There was an error adding an item to the cart");
    }
  }
  function deleteCartItem(id) {
    dispatch({ type: "loading" });
    try {
      const res = localStorage.getItem("cartItems");
      const data = res ? JSON.parse(res) : [];
      const updatedItems = data.filter((item) => {
        return item[0].id !== id;
      });
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
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
        setStateCart,
        stateCart,
        getCartItems,
        deleteCartItem,
        addCartItem,
        setOpenCart,
        openCart,
        itemAdding,
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
