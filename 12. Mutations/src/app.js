const mutationV1 = arr => {
    if (arr.length === 0) {
        return null;
    }

    else {
        const removeDuplicate = arr => {
            const set = new Set(arr);
            return [...set];
        }
        
        const firstArr = removeDuplicate([...arr][0].toLowerCase().split("")).sort();
        const lastArr = removeDuplicate([...arr][1].toLowerCase().split("")).sort();

        let containsAllLetter = true;
        
        for (let i = 0; i < lastArr.length; i++) {
            if (!(firstArr.includes(lastArr[i]))) {
                containsAllLetter = false;
                break;
            }
        }
        return containsAllLetter;
    }
}

const mutation = arr => {
    if (arr.length === 0) {
        return null;
    }

    else {
        const removeDuplicate = arr => {
            const set = new Set(arr);
            return [...set];
        }
        
        const firstArr = removeDuplicate([...arr][0].toLowerCase().split(""));
        const lastArr = removeDuplicate([...arr][1].toLowerCase().split(""));

        let containsAllLetter = true;
        
        for (let i = 0; i < lastArr.length; i++) {
            if (firstArr.indexOf(lastArr[i]) === -1) {
                containsAllLetter = false;
                break;
            }
        }
        console.log(containsAllLetter);
        return containsAllLetter;
    }
}

mutation(["hello", "Hello"]) //should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //should return true.
mutation(["mary", "army"]) //should return true.
mutation(["mary", "aarmy"]) //should return true.
mutation(["alien", "line"]) //should return true.
mutation(["floor", "for"]) //should return true.
mutation(["hello", "neo"]) //should return false.
mutation(["voodoo", "no"]) //should return false.