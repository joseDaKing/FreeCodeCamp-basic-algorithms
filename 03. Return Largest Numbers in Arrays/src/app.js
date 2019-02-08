const largestNumberOfArrays = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    else {
        let largestNumberArr = [];
        
        for (let i = 0; i < arr.length; i++) {
           
            largestNumberArr.push([...arr][i].sort((a, b) => a < b )[0]);
        }

        return largestNumberArr;
    }
};