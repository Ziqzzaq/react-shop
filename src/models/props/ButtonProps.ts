import { ReactChildren } from 'react';

export interface ButtonProps {
    children: ReactChildren | string;
    type: 'button' | 'submit' | 'reset' | undefined;
}
