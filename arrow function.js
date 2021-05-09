/*1- write a function called "isEven" that takes a number as a parameter and returns true 
if the number is even and false otherwise.*/
let num = 7;
let  isEven = num % 2 === 0 ;
    
 console.log(isEven);
 
  //.....................................................................................

  
  /*3. write a function called "getMax" that takes an array of numbers as a parameter and 
  returns 
  the largest number.*/
  
  const getMax = [88, 100,254,86247,1895, 741];

  console.log(Math.max(...getMax));
  
  //..................................................................................
  /*4. write a function called "stringContains" that takes two strings as parameters and returns 
  true if the first string contains the second, and false otherwise.*/
  
  let stringContains = 'JavaScript String';
console.log(stringContains.includes('Script'));
  //------------------------------------------------------------------------------------------
  
  /*5. write a function called "capitalizeWords" that takes a string as a parameter and 
  capitalizes each word.
      example: capitalizeWords("i love programming") returns "I Love Programming".*/
  
      const words = "i love programming";

const capitalizeWords = words.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
console.log(capitalizeWords)

/*^ matches the beginning of the string.
\w matches any word character.
{1} takes only the first character.
Thus, ^\w{1} matches the first letter of the word.
| works like the boolean OR. It matches the expression after and before the |.
\s+ matches any amount of whitespace between the words (for example spaces, tabs, or line break*/
  
  //............................................................................................
  
  
  
  /*6. write a function called "arrayContains" that takes two arrays as parameters and returns
   true if the first array contains the second, and false otherwise.*/
   let arr1 = [1, 2, 3];
let arr2 = [1, 3];
let arrayContains = arr2.every( common => arr1.includes(common) );
console.log(arrayContains);
   //=========================================================================================
 
  
  /*2. write a function called "containsZero" that takes an array as a parameter and returns 
  true if the array contains at least one zero. false otherwise.*/
  function containsZero(array){
    let zero = array.includes(0);
    return zero;

 }
console.log(containsZero([20,5,0,8]))

//---------------------------------------------------------------------------------------
/*3. write a function called "allPositive" that takes an array as a parameter and returns 
true if all numbers are greater than zero. false otherwise.*/
let nums = [1, 8, 5];
let result = nums.every(function (positive) {
    return positive > 0;
});

console.log(result);

/*4. implement a function called "joinStrings" which is similar to Array.prototype.join(). 
this function will take as the first parameter an array of strings, and as the second 
parameter a character. if the second character is not specified it should be a comma ',' 
by default. the function shall concatinate the elements in the array with each other, 
and place the second parameter between each two strings.
examples:
    * joinStrings(['i', 'love', 'programming'], ' ') will return "i love programming";
    * joinStrings(['i', 'love', 'programming'], '#') will return "i#love#programming";
    * joinStrings(['i', 'love', 'programming']) will return "i,love,programming";
*/
const joinWords = ['i', 'love', 'programming'];
const joinedWords = joinWords.join('#');

console.log(joinedWords);