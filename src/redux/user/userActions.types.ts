import { UserActions } from './userActions.enum';
import { User } from './user.types';

interface SetCurrentUser {
    type: typeof UserActions.setCurrentUser;
    payload: User | null;
}

export type UserActionsTypes = SetCurrentUser;
