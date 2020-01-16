import { AppState } from '../../app.types';
import { createSelector } from 'reselect';

const selectUser = (state: AppState) => state.userState;

export const selectCurrentUser = createSelector(
    [selectUser],
    (userState) => userState.currentUser
);
