import { ChangeEvent } from 'react';

export interface FormInputProps {
    id: string;
    name: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value: string;
    required?: true;
    label?: string;
}
