import { Item } from '../../models/state/ShopState';
import { Action } from 'redux';

export enum CartActionsEnum {
    toggleCartHiddenType = 'TOGGLE_CART_HIDDEN',
    addItemType = 'ADD_ITEM'
}

interface Actions<P> {
    payload?: P;
}

interface ToggleCartHidden extends Action<CartActionsEnum>, Actions<boolean> {}

interface AddItem extends Action<CartActionsEnum>, Actions<Item> {}

export type CartActionsTypes = ToggleCartHidden | AddItem;
