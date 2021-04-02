import { Component, createContext } from "react";

interface ContextValue {
    cart: string[]
    addToCart: (product: string) => void;
    removeFromCart: (product: string) => void;
} 

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

