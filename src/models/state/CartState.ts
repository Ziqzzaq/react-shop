import { Item } from './ShopState';

export interface CartState {
    hidden: boolean;
    cartItems: Item[];
}
