const binaryGap = function(N) {
    let i = 0;
    let current_gap = 0
    let biggest_gap = 0;
    let open = false;
    while(Math.pow(2,i) < N){
        if((Math.pow(2,i) & N) == Math.pow(2,i)){
            if (open){
                biggest_gap = current_gap > biggest_gap ? current_gap:biggest_gap;
            }
            current_gap = 0;
            open = true;
        } else {
            current_gap++;
        }
        i++;
    }
    return biggest_gap;
}