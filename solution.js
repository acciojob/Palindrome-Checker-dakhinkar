// complete the given function

function palindrome(str){
//   By using for loop
//      str = str.toLowerCase();
//         let len = str.length;
//         for(let i = 0; i< len; i++){
//                 if(str[i] !== str[len -1 - i]){
//                         return false;
//                 }
//         }
//         return true;
  
// Built in method  
    let newStr = str.toLowerCase().split("").reverse().join("");
        return newStr == str.toLowerCase();
}
module.exports = palindrome
