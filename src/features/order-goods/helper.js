import { ErrorMessages } from './constants'
import { 
    checkIsEmptyString, 
    checkIsCorrectlyEmail, 
    checkIsNumberInRange, 
    checkIsCorrectlyTelephone,
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

export const validatePhone = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.empty
    } else if (checkIsCorrectlyTelephone(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.telephoneInvalidFormat
    }

    return result
};

export const validateNumberDepartment = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.empty
    } else if (isNaN(value)) {
        result.isValid = false
        result.errorMessage = ErrorMessages.isNumber
    }

    return result
};