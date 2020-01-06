import { UserActions } from './userActions.enum';
import { User } from '../../models/state/AppState';

export const setCurrentUser = (user: User | null) => ({
    type: UserActions.setCurrentUser,
    payload: user
});
