import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { validateName } from './NameValid';
import { validateEmail } from './EmailValid';
import { validateTextArea } from './TextAreaValid';

export const TextInput = ({ onValidation, id, name, autoComplete, placeholder }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const { id: filterName, value } = e.target

        let valid = '';
        if (filterName === 'firstName') {
            valid = validateName(value)
            setErrorText(valid.errorMessage)
            setError(valid.isValid)
        } else if (filterName === 'email') {
            valid = validateEmail(value)
            setErrorText(valid.errorMessage)
            setError(valid.isValid)
        } else if (filterName === 'email') {
            valid = validateTextArea(value)
            setErrorText(valid.errorMessage)
            setError(valid.isValid)
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
