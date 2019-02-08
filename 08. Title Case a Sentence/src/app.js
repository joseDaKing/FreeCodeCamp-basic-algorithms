const capitilizeStr = str => {
    if (str === "") {
        return -1;
    }

    else {
        const lowerCase = str.toLowerCase();
        const regex = /.[^\s]+/gi;
        let strArr = lowerCase.match(regex);
        
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].trim().split("");
            strArr[i][0] = strArr[i][0].toUpperCase();
            strArr[i] = strArr[i].join("");
        }

        let strCapitilized = strArr.join(" ");
        return strCapitilized;
    }
};