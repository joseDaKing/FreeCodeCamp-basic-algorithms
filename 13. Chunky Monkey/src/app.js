const divideArr = (arr, size) => {
    if (Array.length === 0) {
        return null;
    }

    else {
        let entireArr = [...arr];
        let dividedArr = [];
        let nestedArrLength = Math.floor(arr.length/size); 

        for (let a = 0; a < nestedArrLength; a++) {
            dividedArr.push([]);
            for (let i = 0; i < size; i++) {
                dividedArr[a].push(entireArr.shift());
            }
        }

        if (0 < entireArr.length) {
            dividedArr.push(entireArr);
        }
        
        console.log(dividedArr);
        return [...dividedArr];
    }
};

//divideArr(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]].
divideArr(["a", "b", "c", "d"], 2)

//divideArr([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
divideArr([0, 1, 2, 3, 4, 5], 3)

//divideArr([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].
divideArr([0, 1, 2, 3, 4, 5], 2)

//divideArr([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
divideArr([0, 1, 2, 3, 4, 5], 4)

//divideArr([0, 1, 2, 3, 4, 5, 6], 3) //should return [[0, 1, 2], [3, 4, 5], [6]].
divideArr([0, 1, 2, 3, 4, 5, 6], 3)

//divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)

//divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
divideArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
