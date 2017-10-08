const permCheck = function(N){
		const control = new Array(N.length);
    let left = 0;
    
    for(let i = 0; i < N.length; i++){
    	if(i === 0){
      	left = 0;
      }
      
      left = left < N[i] ? N[i] : left; 
    }
    
    if(left !== N.length){
    	return 0;
    }
    
    for(let i = 0;i < N.length; i++){
    	if(!control[N[i] - 1]){
      	control[N[i] - 1] = true;
        left --;
      }
    }
    
    return left === 0 ? 1 : 0;
}
