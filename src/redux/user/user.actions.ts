import { UserActions } from './userActions.enum';
import { User } from './user.types';

export const setCurrentUser = (user: User | null) => ({
    type: UserActions.setCurrentUser,
    payload: user
});
