import React from 'react';

import './button.styles.scss';
import { ButtonProps } from '../../models/props/ButtonProps';

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default Button;
