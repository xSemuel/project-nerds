import { useState } from 'react';
import TextField from '@mui/material/TextField';

const textNameValidation = [
    "email обов'язковий",
    "email неправильного формату"
]

export const EmailValidation = ({ onValidation, id, name, autoComplete, defaultValue }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {

        const { id: filterName, value } = e.target

        if (value.trim().length === 0) {
            setError(true)
            setErrorText(textNameValidation[0])
        } else if (!value.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
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
