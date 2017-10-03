const oddOccurrencies = function (array) {
    if (array.length === 1) return array[0];
	array = array.sort();
	for (let i = 0; i < array.length - 1; i+=2){
		if(array[i] !== array[i+1]){
			return array[i];
		} else if(i+2 === array.length - 1){
			return array[i+2];
		}
	}
}