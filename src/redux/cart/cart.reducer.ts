import { CartActionsEnum, CartActionsTypes } from './cartActions.types';
import { AddItemToCart, removeItemFromCart } from '../../helpers/cart.helper';
import { CartState } from './cart.types';
import { Item } from '../../pages/shop/shop.types';

const INITIAL_STATE: CartState = {
    hidden: true,
    cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action: CartActionsTypes) => {
    switch (action.type) {
        case CartActionsEnum.toggleCartHiddenType:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionsEnum.addItemType:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            };
        case CartActionsEnum.clearItemFromCartType:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== (action.payload as Item).id
                )
            };
        case CartActionsEnum.removeItemType:
            return {
                ...state,
                cartItems: removeItemFromCart(
                    state.cartItems,
                    action.payload as Item
                )
            };
        default:
            return state;
    }
};
