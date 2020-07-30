function piramid() {
	for (var i = 0; i <= 5; i++) {
		var str = "";
		for (var j = 0; j <= 5 - i; j++) str += " ";
		for (var k = 0; k <= i; k++) {
			if (k == i) {
				str += "X";
			} else {
				str += "X" + "O";
			}
		}
		console.log(str);
	}
}

piramid();
