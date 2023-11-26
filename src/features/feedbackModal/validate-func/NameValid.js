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
