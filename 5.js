function balikKata(kata) {
	var str = kata;
	var newString = "";

	for (var i = str.length - 1; i >= 0; i--) {
		newString = newString + str[i];
	}
	return newString;
}

console.log(balikKata("Hello World and Coders"));
console.log(balikKata("John Doe"));
console.log(balikKata("I am a bookworm"));
console.log(balikKata("Coding is my hobby"));
console.log(balikKata("Super"));
