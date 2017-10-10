const tapeEquilibrium = function (array) {
    let left = 0;
	let right = 0;
	let difference = 0;
	let answer = Infinity;
	let totalSum = array.reduce(function(a,b){return a + b});
	for(let i = 1; i < array.length; i++){
		left = left + array[i-1];
		right = totalSum - left;
		difference = Math.abs(left-right);
		answer = (answer>difference) ? difference : answer;
	}
	return answer;
}