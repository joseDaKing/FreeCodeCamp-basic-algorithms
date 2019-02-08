const repeatStrNumTimes = (str, num) => {
    if (num  === "") {
        return -1;
    }

    else {
        let repeatStr = "";
        for (let i = 1; i <= num; i++) {
            repeatStr += str;
        }

        console.log(repeatStr);
        return repeatStr; 
    }
}