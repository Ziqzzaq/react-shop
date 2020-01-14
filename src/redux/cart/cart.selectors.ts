import { AppState } from '../../models/state/AppState';
import { createSelector } from 'reselect';

const selectCart = (state: AppState) => state.cartState;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + (cartItem.quantity ? cartItem.quantity : 0),
        0
    )
);
