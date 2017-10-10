const maxCounters = function (N,M){
	let counterInstance = new Array(N);
  let max = 0;
  let maxBuffer = 0;
  
  for (let i = 0; i < N; ++i){
  	counterInstance[i] = 0;
  }
  debugger;
  for (let j = 0; j < M.length; ++j){
  	if(M[j] >= 1 && M[j] <= N){
    	if(maxBuffer > 0 && counterInstance[M[j] - 1] < maxBuffer){
      	counterInstance[M[j] - 1] = maxBuffer + 1;
      	if (counterInstance[M[j] - 1] > max){
        	max = counterInstance[M[j] - 1];
        }
      } else {
      	counterInstance[M[j] - 1] += 1;
        if (counterInstance[M[j] - 1] > max){
        	max = counterInstance[M[j] - 1];
        }
      }
    }	else {
    	maxBuffer = max;
    }
  }

  for(let k = 0; k < counterInstance.length; ++k){
  	if(counterInstance[k] < maxBuffer) counterInstance[k] = maxBuffer;
  }
  
  return counterInstance;
}
