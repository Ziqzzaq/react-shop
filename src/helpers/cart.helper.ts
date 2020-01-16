import { Item } from '../pages/shop/shop.types';

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
