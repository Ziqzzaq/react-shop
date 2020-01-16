import { Action } from 'redux';
import { Item } from '../../pages/shop/shop.types';

export enum CartActionsEnum {
    toggleCartHiddenType = 'TOGGLE_CART_HIDDEN',
    addItemType = 'ADD_ITEM',
    clearItemFromCartType = 'CLEAR_ITEM_FROM_CART',
    removeItemType = 'REMOVE_ITEM'
}

interface Actions<P> {
    payload?: P;
}

interface ToggleCartHidden extends Action<CartActionsEnum>, Actions<boolean> {}

interface AddItem extends Action<CartActionsEnum>, Actions<Item> {}

interface clearItemFromCart extends Action<CartActionsEnum>, Actions<Item> {}

interface removeItem extends Action<CartActionsEnum>, Actions<Item> {}

export type CartActionsTypes =
    | ToggleCartHidden
    | AddItem
    | clearItemFromCart
    | removeItem;
