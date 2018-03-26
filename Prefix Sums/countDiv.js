const countDiv = (A,B,K) => {
    const total = Math.floor(B/K) + Math.floor(A/K);
    if(A%K===0)
        return total+=1;
    else 
        return total;
}