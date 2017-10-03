const permMissingElements = function (array) {
    let L = array.length + 1;
	if(L === 1) return 1;
	sum = array.reduce(function (previous, current){
		return previous + current;
	})
	return (L*(L+1)/2) - sum;	
}