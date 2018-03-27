const distinct = (A)=>{
    if(A.length === 0) return 0;
    const sorted = A.sort((a,b) => {return a-b});
    let distinctCount = 1;

    for(let i=0;i<A.length-1;i++){
        if(A[i] !== A[i+1])
            distinctCount++;
    }

    return distinctCount;
}