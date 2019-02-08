const str = "Hi my name is yousef and i am 20 years old"

const longestWord = str => {
    const regex = /[a-z]+/gi;
    let words = str.match(regex);
    words.sort((a, b) => (a.length < b.length));
    console.log(`The longest word is ${words[0]} and it contains ${words[0].length} letters.`);
    return {string: words[0], length: words[0].length};
};

longestWord(str);