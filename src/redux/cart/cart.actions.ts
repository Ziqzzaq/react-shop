import { CartActionsEnum } from './cartActions.types';
import { Item } from '../../pages/shop/shop.types';

export const toggleCartHidden = () => ({
    type: CartActionsEnum.toggleCartHiddenType
});

export const addItem = (item: Item) => ({
    type: CartActionsEnum.addItemType,
    payload: item
});
