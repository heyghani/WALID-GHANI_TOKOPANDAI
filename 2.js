function sittingArrangement(person, column) {
	var array = [];
	var i = 0;

	if (column == 0) {
		return "Invalid number";
	} else {
		while (i < person.length) {
			for (j = 0; j <= column; j++) {
				array.push([person[i], person[j]]);
			}
			i++;
		}
		return array;
	}
}

console.log(sittingArrangement(["dewi", "shinta", "ani", "agus", "puji"], 2));
