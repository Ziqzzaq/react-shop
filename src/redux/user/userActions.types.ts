import { UserActions } from './userActions.enum';
import { User } from '../../models/state/AppState';

interface SetCurrentUser {
    type: typeof UserActions.setCurrentUser;
    payload: User | null;
}

export type UserActionsTypes = SetCurrentUser;
