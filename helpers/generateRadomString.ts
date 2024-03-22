export const generateRadomString = (length: number): string => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result: string = "";

	for (var i = 0; i < length ; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return result;

}