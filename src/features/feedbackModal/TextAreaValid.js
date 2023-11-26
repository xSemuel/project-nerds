import { checkIsEmptyString, checkIsCorrectlyMinSymbol } from '../../utils/validation';

const errors = {
    empty: 'Поле не може бути пустим',
    symbolLast: 'Залишилось символів',
}

const requiredSymbol = 30;

export const validateTextArea = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }
    const leftSymbol = requiredSymbol - value.length;

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = errors.empty
    } else if (checkIsCorrectlyMinSymbol(leftSymbol, requiredSymbol)) {
        result.isValid = false
        result.errorMessage = `${errors.symbolLast} ${leftSymbol}/${requiredSymbol}`
    }

    return result
}
