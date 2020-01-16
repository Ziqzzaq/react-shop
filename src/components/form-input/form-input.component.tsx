import React from 'react';

import './form-input.styles.scss';
import { FormInputProps } from './form-input.types';

const FormInput: React.FC<FormInputProps> = ({
    handleChange,
    label,
    ...otherProps
}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;
