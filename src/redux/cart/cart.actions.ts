import { Item } from '../../models/state/ShopState';
import { CartActionsEnum } from './cartActions.types';

export const toggleCartHidden = () => ({
    type: CartActionsEnum.toggleCartHiddenType
});

export const addItem = (item: Item) => ({
    type: CartActionsEnum.addItemType,
    payload: item
});
