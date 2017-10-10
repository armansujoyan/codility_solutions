const cyclicRotation = function (array, rotation) {
    let answer = [];
	for (let i = 0; i < array.length; i++){
		answer[(i+rotation)%array.length] = array[i];
	}
	return answer;
}