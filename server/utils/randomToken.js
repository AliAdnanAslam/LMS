const randomToken = (length) => {
	let text = "";
	const possible = "abcdefghijklmnopqrstuvwxyz0123456789_-.";
	for ( let i = 0; i < length; i++) {
	text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}


module.exports = randomToken;
