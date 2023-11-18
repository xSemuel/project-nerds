import { useState } from 'react';
import TextField from '@mui/material/TextField';

const textNameValidation = [
    'Введіть не менше 4 символів',
]

export const NameValidation = ({ onValidation, id, name, autoComplete, defaultValue }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {

        const { id: filterName, value } = e.target

        if (value.trim().length <= 3) {
            setError(true)
            setErrorText(textNameValidation[0])
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
