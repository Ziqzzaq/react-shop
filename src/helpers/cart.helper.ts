import { Item } from '../models/state/ShopState';

export const AddItemToCart = (cartItems: Item[], cartItemToAdd: any) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity ? cartItem.quantity + 1 : 0
                  }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
