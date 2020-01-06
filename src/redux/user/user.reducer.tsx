import { UserActionsTypes } from './userActions.types';
import { AppState } from '../../models/state/AppState';

const INITIAL_STATE: AppState = {
    currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action: UserActionsTypes) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};
