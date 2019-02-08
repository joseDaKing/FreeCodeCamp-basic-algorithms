const factorialize = (num) => {
    if (num<0) {
        return -1; 
    } 

    else if (num === 0) {
        return 1
    }

    else {
        let factor = 1;
        for(let i = 1; i <= num; i++) {
            factor *= i;
        }
        
        return factor;
    }
}

console.log(factorialize(0));