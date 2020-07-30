function half() {
	var kata = "javascript";
	for (var i in kata) {
		var str = "";
		for (var j = 0; j <= kata.length - i; j++) {
			str += " ";
		}
		if (i == 0) {
			for (var k = 0; k <= i; k++) {
				str += kata[kata.length - 1];
			}
			console.log(str);
		} else {
			for (var k = 0; k <= i; k++) {
				str += kata[k];
			}
			console.log(str);
		}
	}
	return str;
}

half();
