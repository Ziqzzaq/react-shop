import firebase from 'firebase';

export interface AppState {
    currentUser: firebase.User | null;
}
