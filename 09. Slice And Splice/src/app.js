const frankenSplice = (arr1, arr2, n) => {
    if (arr1.length === 0 || arr2.length === 0) {
        return null;
    }

    else {
        let 
            subArrFront,
            subArrBack,
            frankenArr,
            arr2Length;
        
        arr2Length = arr2.length;
        subArrFront = [...arr2].slice(0, n);
        subArrBack = [...arr2].slice(arr2Length - n, arr2Length);
        frankenArr = [...arr1];

        for (let i = n - 1; i >= 0; i--) {
            frankenArr.splice(0, 0, subArrFront[i]);
        }

        for(let i = 0; i < n; i++) {
            frankenArr.splice(frankenArr.length, 0, subArrBack[i])
        }

        console.log(frankenArr);
        return frankenArr; 
    }
};