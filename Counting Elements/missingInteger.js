const missingInteger = function(A){
	const elementIdx = new Array(A.length);
	for(let i = 0; i < A.length; ++i){
		if(A[i]>0){
			elementIdx[A[i]-1] = true;
		}
	}
	for(let j =0; j < A. length; ++j){
		if(elementIdx[j] !== true){
			return j + 1;
		}
	}
	return A.length + 1;
}