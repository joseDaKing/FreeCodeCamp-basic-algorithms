const confirmStrEnding = (str, ending) => {
    const endingSize = ending.length;
    const strSize = str.length;

    if (ending === "" || str === "" || strSize < endingSize) {
        return -1;
    }
    
    else{
        const substr = str.substring(strSize - endingSize);

        if (substr === ending) {
            console.log(true);
            return true;
        }

        else {
            console.log(false)
            return false;
        }
    }
}