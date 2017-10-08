const frogRiverJump = function solution(X, A) {
    
  let leaves = [];
  let i = 0;
  let result = -1;
  
  for(i=0;i<A.length;i++){
  	if(typeof leaves[A[i]] === 'undefined'){
    	leaves[A[i]] = i;
    }
  }
  
  if(leaves.length <= X){
  	return -1;
  }
  
  for(i = 1; i <= X; i++){
  	if(typeof leaves[i] === 'undefined'){
    	return -1;
    } else {
    	result = Math.max(result,leaves[i])
    }
  }
  
  return result;
}
