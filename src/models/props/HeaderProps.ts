import firebase from 'firebase';

export interface HeaderProps {
    currentUser: firebase.User | null;
}
