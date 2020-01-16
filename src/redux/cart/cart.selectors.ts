import { AppState } from '../../app.types';
import { createSelector } from 'reselect';

const selectCart = (state: AppState) => state.cartState;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cartState) => cartState.hidden
);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + (cartItem.quantity ?? 0),
        0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (accumulatedQuaPrice, cartItem) =>
            accumulatedQuaPrice + (cartItem.quantity ?? 0) * cartItem.price,
        0
    )
);
