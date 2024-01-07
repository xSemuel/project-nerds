
// ---------------- global

export const checkIsEmptyString = (value) => value.length === 0

// ---------------- for name

export const checkIsNumberInRange = (value, min, max) => value.length > min && value.length <= max

// ---------------- for email

export const checkIsCorrectlyEmail = (value) => (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))

// ---------------- for text area

export const checkIsCorrectlyMinSymbol = (leftSymbol, requiredSymbol ) => (leftSymbol > 0 && leftSymbol < requiredSymbol)

// ---------------- for telephone

export const checkIsCorrectlyTelephone = (value) => (!/^\(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value))