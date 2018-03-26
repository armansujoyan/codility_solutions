const passingCars = () => {
    let ones = 0;
    let passings = 0;
    for(let i=0;i<A.length;i++)
        if(A[i] === 1)
            ones++;
    if(ones===0 || ones===A.length)
        return 0;
    for(let i=0;i<A.length;i++){
        if(A[i] === 0)
            passings += ones;
        else
            ones -= 1;
    }
    if(passings>Math.pow(10,9))
        return -1;
    else
        return passings;
}