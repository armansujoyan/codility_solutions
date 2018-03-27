const genomicRangeQuery = (S, P, Q) => {
    result = new Array(P.length);
    let arr = [];
    
    for(var x = 0; x < S.length; x++){
        arr[x] = new Array(4).fill(0);
    }
    
    for(let i=0;i<S.length;i++){
        if(S[i] === 'A') arr[i][0] = 1;
        if(S[i] === 'C') arr[i][1] = 1;
        if(S[i] === 'G') arr[i][2] = 1;
        if(S[i] === 'T') arr[i][3] = 1;
    }
    
    for(let k=1;k<S.length;k++){
        for(let r=0;r<4;r++){
            arr[k][r] += arr[k-1][r];
        }
    }
    
    for(let i=0;i<P.length;i++){
        let x = P[i];
        let y = Q[i];
        
        for(let a=0;a<4;a++){
            let sub = 0;
            if(x-1 >= 0) sub = arr[x-1][a];
            if(arr[y][a] - sub > 0){
                result[i] = a+1;
                break;
            }
        }
    }
    
    return result;
}