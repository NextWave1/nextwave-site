export const createPhoneNumber = (phoneNumber: number): string => {
	const array = Array.from(String(phoneNumber))
	return `+${array[0]} (${array.slice(1, 4).join('')})-${array
		.slice(4, 7)
		.join('')}-${array.slice(7, 9).join('')}-${array.slice(9, 11).join('')}`
}
