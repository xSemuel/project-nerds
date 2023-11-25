import { useState } from 'react';
import TextField from '@mui/material/TextField';




const errors = {
    empty: 'Поле не може бути пустим',
    minLength: 'Введіть не менше 4 символів',
}

const checkIsEmptyString = (value) => value.length === 0

const checkIsNumberInRange = (value, min, max) => value.length > min && value.length <= max

const validateName = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = errors.empty
    } else if (checkIsNumberInRange(value, 0, 3)) {
        result.isValid = false
        result.errorMessage = errors.minLength
    }

    return result
}

// ----------



const textNameValidation = [
    'Поле не може бути пустим',
    'Введіть не менше 4 символів',
]

export const NameValidation = ({ onValidation, id, name, autoComplete, placeholder }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {
        const { id: filterName, value } = e.target

        const { isValid, errorMessage } = validateName(value)
        setError(!isValid)
        setErrorText(errorMessage)

        // if (value.trim().length === 0) {
        //     setErrorText(textNameValidation[0])
        // }
        // if (value.trim().length <= 3 && value.trim().length > 0) {
        //     setErrorText(textNameValidation[1])
        // } else {
        //     setError(false)
        //     setErrorText('')
        // }

        setInputValue(value);
        onValidation(filterName, value, error);       
    };

  return (
        <TextField
            required
            fullWidth
            id={id}
            placeholder={placeholder}
            name={name}
            hiddenLabel
            autoComplete={autoComplete}
            value={inputValue}
            onChange={handleInputChange}
            error={error}
            helperText={errorText}
        />
    );
};
