import { CartState } from './CartState';
import { UserState } from './UserState';

export interface AppState {
    userState: UserState;
    cartState: CartState;
}
