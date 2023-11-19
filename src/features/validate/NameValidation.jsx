import { useState } from 'react';
import TextField from '@mui/material/TextField';

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

        if (value.trim().length === 0) {
            setErrorText(textNameValidation[0])
        }
        if (value.trim().length <= 3 && value.trim().length > 0) {
            setErrorText(textNameValidation[1])
        } else {
            setError(false)
            setErrorText('')
        }

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
