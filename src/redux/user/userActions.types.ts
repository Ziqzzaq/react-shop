import { UserActions } from './userActions.enum';
import { User } from '../../models/state/UserState';

interface SetCurrentUser {
    type: typeof UserActions.setCurrentUser;
    payload: User | null;
}

export type UserActionsTypes = SetCurrentUser;
