import { useState } from 'react';
import TextField from '@mui/material/TextField';

const textNameValidation = [
    'Залишилось символів',
]

export const MessageValidation = ({ onValidation, id, name, autoComplete, rows, placeholder }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {

        const { id: filterName, value } = e.target

        const requiredSymbol = 30;
        const leftSymbol = requiredSymbol - value.length;

        if (leftSymbol > 0) {
            setError(true)
            setErrorText(`${textNameValidation[0]} ${leftSymbol}/30`)
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
            multiline
            id={id}
            placeholder={placeholder}
            name={name}
            rows={rows}
            hiddenLabel
            autoComplete={autoComplete}
            value={inputValue}
            onChange={handleInputChange}
            error={error}
            helperText={errorText}
        />
    );
};
