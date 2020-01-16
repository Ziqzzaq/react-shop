import { Item } from '../../pages/shop/shop.types';

export interface CartState {
    hidden: boolean;
    cartItems: Item[];
}
