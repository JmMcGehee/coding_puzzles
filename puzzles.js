// Capitalize a title
// Write a function that takes a string and properly capitalizes it as if it were the title of a work of art.
//
// Your function should not use any built-in capitalization functions (e.g. toUpperCase())
//
// The first word should begin with an uppercase, and each subsequent word should begin with an uppercase except the words the, and, of, and for.
//
// For example, an input "war and peace" should return "War and Peace" and "the old man and the sea" should return "The Old Man and the Sea"

// Given a string of words
// Go through each word
//   Evaluate the first letter

let str = "word";

let capitalize = (word) => {
  let capitalizedWord = "";
  for (let i = 0; i < word.length; i++) {
    if (97 <= word.charCodeAt(i) <= 122) {
      capitalizedWord.concat(word.charAt(i))
    } else {
      capitalizedWord.concat(fromCharCode(word.charCodeAt(i)-32))
    }
    console.log(capitalizedWord);
  }
}

capitalize(str);
