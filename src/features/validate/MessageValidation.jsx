import { useState } from 'react';
import TextField from '@mui/material/TextField';

const textNameValidation = [
    'Поле не може бути пустим',
    'Залишилось символів',
]

const requiredSymbol = 30;

export const MessageValidation = ({ onValidation, id, name, autoComplete, rows, placeholder }) => {

  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(textNameValidation[0]);
  const [error, setError] = useState(true);

    const handleInputChange = (e) => {

        const { id: filterName, value } = e.target       
        const leftSymbol = requiredSymbol - value.length;

        if (value.trim().length === 0) {
            setErrorText(textNameValidation[0])
        }
        else if (leftSymbol > 0 && leftSymbol < requiredSymbol) {
            setErrorText(`${textNameValidation[1]} ${leftSymbol}/${requiredSymbol}`)
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
