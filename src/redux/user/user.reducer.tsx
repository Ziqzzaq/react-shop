import { UserActionsTypes } from './userActions.types';
import { UserState } from '../../models/state/AppState';
import { UserActions } from './userActions.enum';

const INITIAL_STATE: UserState = {
    currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action: UserActionsTypes) => {
    switch (action.type) {
        case UserActions.setCurrentUser:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};
