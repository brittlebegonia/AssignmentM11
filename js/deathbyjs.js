//STEP 1
// function alphaOrder(str) {
//     return str.split("").sort().join("")
// }

// console.log(alphaOrder("webmaster"))

//STEP 2
// function capitalizeWords(str) {
//     return str
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
// }

// console.log(capitalizeWords("the quick brown fox"))

//STEP 3
// function countVowels(str) {
//     let vowels = "aeiouAEIOU"
//     let count = 0

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }

//     return count
// }

// console.log(countVowels("The quick brown fox"))

//STEP 4
// function randomId(length) {
//     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//     let result = ""

//     for (let i = 0; i < length; i++) {
//         result += chars.charAt(Math.floor(Math.random() * chars.length))
//     }

//     return result
// }

// console.log(randomId(8))

//STEP 5
// function longestCountry(arr) {
//     let longest = ""

//     for (let country of arr) {
//         if (country.length > longest.length) {
//             longest = country
//         }
//     }

//     return longest
// }

// console.log(longestCountry(["Australia", "Germany", "United States of America"]))