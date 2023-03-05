export function isNumber(value) {
	const type = typeof value
	if (type === 'number') {
		return value - value === 0
	}
	if (type === 'string' && value.trim() !== '') {
		return Number.isFinite ? Number.isFinite(+value) : isFinite(+value) 
	}
	return false
}

export function isOdd(value) {
	const num = Math.abs(value)
	if (!isNumber(value) || !Number.isSafeInteger(num)) {
		throw new TypeError('expected an safe integer value')
	}
	return (num & 1) === 1
}

export function isEven(value) {
	return !isOdd(value)
}

export function isAlpha(value) {
	if (typeof value !== 'string' || value.length > 1) {
		throw new TypeError('expected an 1-char length string value')
	}
	return value.toLocaleLowerCase() !== value.toLocaleUpperCase()
}

export function isAlphaNumeric(value) {
	if (typeof value !== 'string' || value.length > 1) {
		throw new TypeError('expected an 1-char length string value')
	}
	return isNumber(value) || isAlpha(value)
}

export function isASCII(value) {
	if (typeof value !== 'string' || value.length > 1) {
		throw new TypeError('expected an 1-char length string value')
	}
	return value.charCodeAt(0) < 128
}

export default {
	isNumber,
	isOdd,
	isEven,
	isAlpha,
	isAlphaNumeric,
	isASCII,
}
