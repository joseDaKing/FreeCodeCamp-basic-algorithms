const getIndexToIns = (arr, value) => {
    if (arr.length === 0) {
        return 0;
    }

    else {
        const sortedArr = [...arr].sort((a, b) => a > b);
        let lowestIndex;

        for (let i = 0; i <= arr.length; i++) {
            if (sortedArr[i] < value) {
                lowestIndex = i;
            }
        }

        lowestIndex++;

        if (isNaN(lowestIndex)) {
            lowestIndex = 0;
        }

        return lowestIndex;
    } 
}