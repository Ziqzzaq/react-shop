import { CartState } from './redux/cart/cart.types';
import { UserState } from './redux/user/user.types';

export interface AppState {
    userState: UserState;
    cartState: CartState;
}
