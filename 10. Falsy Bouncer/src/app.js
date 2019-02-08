const removeFalseValues = arr => {
    if (arr.length === 0) {
        return null;
    }
    
    else {
        let uppdatedArr = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i]) {
                uppdatedArr.push(arr[i]);
            }
        }
        return uppdatedArr;
    }   
}