import { ReactChildren } from 'react';
import firebase from 'firebase';
import { CartActionsEnum } from '../../redux/cart/cartActions.types';

type onClickType =
    | ((item: any) => { type: CartActionsEnum; payload: any })
    | (() => Promise<firebase.auth.UserCredential>);

export interface ButtonProps {
    children: ReactChildren | string | never[];
    inverted?: true;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: onClickType;
    isGoogleSignIn?: true;
}
