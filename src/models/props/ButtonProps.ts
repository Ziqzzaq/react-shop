import { ReactChildren } from 'react';
import firebase from 'firebase';

export interface ButtonProps {
    children: ReactChildren | string | never[];
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => Promise<firebase.auth.UserCredential>;
    isGoogleSignIn?: true;
}
