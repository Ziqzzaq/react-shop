import { CartActionsEnum, CartActionsTypes } from './cartActions.types';
import { AddItemToCart } from '../../helpers/cart.helper';
import { CartState } from './cart.types';

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
        default:
            return state;
    }
};
