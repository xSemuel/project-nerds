import { ErrorMessages } from './constants'
import { 
    checkIsEmptyString, 
    checkIsCorrectlyEmail, 
    checkIsNumberInRange, 
    checkIsCorrectlyMinSymbol 
} from '../../utils/validation';


export const validateEmail = (email) => {
    const value = email.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.emptyEmail
    } else if (checkIsCorrectlyEmail(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.emailInvalidFormat
    }

    return result
};

export const validateName = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.empty
    } else if (checkIsNumberInRange(value, 0, 3)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.nameMinLength
    }

    return result
};

const requiredSymbol = 30;

export const validateTextArea = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }
    const leftSymbol = requiredSymbol - value.length;

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.empty
    } else if (checkIsCorrectlyMinSymbol(leftSymbol, requiredSymbol)) {
        result.isValid = false
        result.errorMessage = `${ErrorMessages.textAreaSymbolLast} ${leftSymbol}/${requiredSymbol}`
    }

    return result
};