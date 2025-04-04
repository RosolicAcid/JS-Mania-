function toUpperCaseCustom(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
            char = String.fromCharCode(code - 32);
        }
        result += char;
    }
    return result;
}
// Example usage:
console.log(toUpperCaseCustom("hello world!"));
console.log(toUpperCaseCustom("JavaScript"));


//let try this without using any kindof builtin function

console.log(".......................................Another approach Divider.............................")

function toUpperCaseManual(str) {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isLowercase = false;
        let index = 0;
        for (let j = 0; j < 26; j++) {
            if (char === lowercase[j]) {
                index = j;
                isLowercase = true;
                break;
            }
        }
        if (isLowercase) {
            result += uppercase[index];
        } else {
            result += char;
        }
    }

    return result;
}


// Example usage:
console.log(toUpperCaseManual("hello world!"));
console.log(toUpperCaseManual("JavaScript"));
console.log(toUpperCaseManual("123abcXYZ!"));
