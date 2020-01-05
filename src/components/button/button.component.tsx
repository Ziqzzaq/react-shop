import React from 'react';
import './button.styles.scss';
import { ButtonProps } from '../../models/props/ButtonProps';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';

const Button: React.FC<ButtonProps> = ({
    children,
    isGoogleSignIn,
    ...otherProps
}) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`}
        {...otherProps}
    >
        {isGoogleSignIn ? <GoogleIcon className="google-sign-in__icon" /> : null}

        <span className="button__text">{children}</span>
    </button>
);

export default Button;
