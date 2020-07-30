function ubahHuruf() {
	var kata = "i love javascript";
	var str = "";

	for (var i in kata) {
		if (
			kata[i] == "a" ||
			kata[i] == "i" ||
			kata[i] == "u" ||
			kata[i] == "e" ||
			kata[i] == "o"
		) {
			str += "$";
		} else {
			str += kata[i];
		}
	}
	return str;
}

console.log(ubahHuruf());
