//Exercise 2: Valid Palindrome

const isPalindrome = function (str) {
  let arrangeStr = [];
  let newStr = [];
  let newStrLength = 0;
  for (let i = 0; i < str.length; i++) {
    arrangeStr = str[i];
    console.log(arrangeStr);
    if(/[a-zA-Z]/.test(arrangeStr)){
      console.log(arrangeStr);
      newStr+=arrangeStr.toLowerCase();
      console.log(newStr);
    }
  }
  
   for (let i = 0; i < newStr.length/2; i++) {
    console.log(newStr.length/2);
    if(newStr[i] !== newStr[newStr.length-1-i]){
      return false
    }
  }
      return true
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
