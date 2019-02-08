const truncateWords = (str, wordLength) => {
    const regex = /.[^\s]+/gi;
    let strArr = str.match(regex);

    if (strArr.length === 0) {
        return -1;
    }

    else {
        const subArr = strArr.slice(0, wordLength);
        let subStr = subArr.join("");
        subStr += "...";

        return subStr;
    }
}

const truncateLetters = (str, letterLength) => {
    if (str === "") {
        return -1;
    }

    else {
        let substr = str.substring(0, letterLength);
        substr += "...";
        return substr;
    }
}

console.log(truncateLetters("Hej jag heter yousif vad heter du min vän?", 20));