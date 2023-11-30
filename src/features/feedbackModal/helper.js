// export validateEmail
// eport valide....
import { checkIsEmptyString, checkIsCorrectlyEmail } from '../../../utils/validation';

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

import { checkIsEmptyString, checkIsNumberInRange } from '../../../utils/validation';

const errors = {
    empty: 'Поле не може бути пустим',
    minLength: 'Введіть не менше 4 символів',
}

export const validateName = (name) => {
    const value = name.trim()
    const result = { isValid: true, errorMessage: '' }

    if (checkIsEmptyString(value)) {
        result.isValid = false
        result.errorMessage = errors.empty
    } else if (checkIsNumberInRange(value, 0, 3)) {
        result.isValid = false
        result.errorMessage = errors.minLength
    }

    return result
}

import { checkIsEmptyString, checkIsCorrectlyMinSymbol } from '../../../utils/validation';

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