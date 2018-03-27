const maxProductOfThree = (A)=>{
    A = A.sort((a,b)=>{return a-b});
    let last = A.length-1;
    let first = 0;
    let negativeCount = 0;

    for(let i=0;i<A.length;i++)
        if(A[i] < 0) negativeCount++;

    let lastSum = A[last]*A[last-1]*A[last-2];
    if(negativeCount >= 2)
        first = A[0]*A[1]*A[last];
    else
        first = -Infinity;

    if(lastSum > first)
        return lastSum;
    else
        return first;
}