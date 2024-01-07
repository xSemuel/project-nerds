import { useState } from 'react';
import { TextField } from '@mui/material';
import { validateName, validateEmail, validateTextArea  } from './helper';


export const TextInput = ({ onValidation, id, name, label, autoComplete, placeholder, rows }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const { id: filterName, value } = e.target
        console.log(filterName, value)
        let validInput = '';
        if (filterName === 'firstName' || filterName === 'lastName' || filterName === 'telephone') {
            validInput = validateName(value)
            setErrorText(validInput.errorMessage)
            setError(!validInput.isValid)
        } else if (filterName === 'email') {
            validInput = validateEmail(value)
            setErrorText(validInput.errorMessage)
            setError(!validInput.isValid)
        } else if (filterName === 'message') {
            validInput = validateTextArea(value)
            setErrorText(validInput.errorMessage)
            setError(!validInput.isValid)
        }


        setInputValue(value);
        onValidation(filterName, value, error);       
    };

  return (
        <TextField
            required
            fullWidth
            label={label}
            rows={rows}
            multiline
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
