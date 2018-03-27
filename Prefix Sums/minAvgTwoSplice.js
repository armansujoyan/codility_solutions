minAvgTwoSlice = (N) => {
    let sums = new Array(N.length+1).fill(0);
    
    for(let i=0;i<N.length;i++){
        sums[i+1]= sums[i] + N[i];
    }
    
    let minAvg = Infinity;
    let minIndex = 0;

    for(let i=0;i<N.length-1;i++){
        let i0 = i;
        let i1 = i + 1;
        let avg2 = (sums[i1+1] - sums[i0])/ 2.0;

        if(avg2 < minAvg){
            minAvg = avg2;
            minIndex = i;
        }
        
        if(i < N.length - 2){
            let i2 = i + 2;
            let avg3 = (sums[i2+1] - sums[i0])/3.0;
            
            if(avg3<minAvg) {
                minAvg = avg3;
                minIndex = i;
            }
        }
    }

    return minIndex
}