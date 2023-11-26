import { checkIsEmptyString, checkIsCorrectlyEmail } from '../../utils/validation';

const errors = {
    empty: "email обов'язковий",
    wrong: "email неправильного формату",
}

export const validateEmail = (email) => {
    const value = email.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = errors.empty
    } else if (checkIsCorrectlyEmail(value)) {
        result.isValid = false
        result.errorMessage = errors.wrong
    }

    return result
}
