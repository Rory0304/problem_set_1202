import React from 'react';

const InputField = React.memo((props) => {
    const {
        label,
        type,
        name,
        required,
        maxLength,
        message,
        autoComplete,
        onBlur,
        onChange,
        value,
        placeholder,
    } = props;

    const inputProps = {
        placeholder,
        type,
        name,
        required,
        maxLength,
        autoComplete,
        value,
        onChange,
        onBlur,
    };

    return (
        <>
            <label>
                {label}
                <input {...inputProps} />
                {message && <span>{message}</span>}
            </label>
            <br />
        </>
    );
});

export default InputField;
