import { useState } from 'react';
import TextField from '@mui/material/TextField';

const textNameValidation = [
    "email обов'язковий",
    "email неправильного формату"
]

export const EmailValidation = ({ onValidation, id, name, autoComplete, placeholder }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {

        const { id: filterName, value } = e.target

        if (value.trim().length === 0) {
            setError(true)
            setErrorText(textNameValidation[0])
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setError(true)
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
