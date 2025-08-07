/*
Review of Milestone-3
-------------------------------------------------
** Three ways to Declare Variable: 
-------------------------------------------------
1. const ==>> Value will not be changed
2. let ==>> Value might change
3. var ==>> Should not use, unless exceptional cases.

-------------------------------------------------
** Primiive Data Type
-------------------------------------------------
1. Number */
    //const roll=10;  <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    //console.log(roll); <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    /*
2. String */
    //let name="Mark Jukerbarg"; <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    //console.log(name); <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    /*
3. Boolean */
    //const needToBeHonest=true; <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    //console.log(needToBeHonest); <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    /*
-------------------------------------------------
** Non-Primiive Data Type
-------------------------------------------------
1. Array */
    //let family=['Father','Mother','Sister','Brother']; <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    //console.log(family); <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    /*
2. Object */
    //let student={class:9, name:"Abu Syeed", age:15, address: 'khulna'} <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    //console.log(student); <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    /*

-------------------------------------------------
** Conditions
-------------------------------------------------
1. if... else if... else... */
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
    let price=499;
    if (price>1000){
        console.log('Out of my budget - I cant buy this');
    }
    else if(price>=500 && price<=1000){
        console.log('Out of my budget - But I can try to buy');
    }
    else{
        console.log('Within my budget');
    }
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
        /*
-------------------------------------------------
** for - Loop
-------------------------------------------------
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
for (i=1;i<=10;i++){
    console.log('My For-Loop number is: '+i);
}
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
-------------------------------------------------
** while - Loop
-------------------------------------------------
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
i=1;
while(i<=10){
    console.log('My While-Loop number is: '+i);
    i++;
}

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
-------------------------------------------------
** Retrive items from an Array using For-Loop
-------------------------------------------------
*/

    /* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
let words=['Apple', 'Ball','Cat','Dog','Elephant'];
for(let i=0; i<words.length; i++){
    console.log(words[i]);
}
 এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*

-------------------------------------------------
** Reverse-Retrive items from an Array using While-Loop
-------------------------------------------------
*/

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
let words=['Apple', 'Ball','Cat','Dog','Elephant'];
let j=0;
while(j<words.length){
    console.log(words[j]);
    j++;
}
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/*
-------------------------------------------------
** Retrive items of an Array
-------------------------------------------------
*/
//Push ==>> পড়তে হবে arrayName.push
// Pop ==>> পড়তে হবে arrayName.pop
// Shift ==>> পড়তে হবে arrayName.shift
// UnShift ==>> পড়তে হবে arrayName.unshift

//************* Using for-loop and UN-SHIFT
//************* Using for-loop and UN-SHIFT

/* // <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
let numbers=[1,2,3,4,5]
console.log(numbers);
let numbersReversed=[];
for (let i=0; i<numbers.length; i++){
    numbersReversed.unshift(numbers[i]);
   //numbers.shift(numbers[i]);
}
console.log(numbersReversed);
//এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

//************* Using for-loop and PUSH
//************* Using for-loop and PUSH

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

let numbers=[1,2,3,4,5];
console.log(numbers);
let numbersReversed=[];
for (let i=numbers.length-1; i>=0;i--){
    numbersReversed.push(numbers[i]);
}
console.log(numbersReversed);

//এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

//************* reverse() function
//************* reverse() function

 /* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
let numbers=[1,2,3,4,5];
console.log(numbers);
numbers.reverse();
console.log(numbers);

  এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
-------------------------------------------------
** Sorting - using arrayName.sort()
-------------------------------------------------
*/
// **** arrayName.sort();

// **** এটা স্ট্রিং টাইপ এরের জন্য ঠিক কাজ করে, যেমনঃ

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const friends =['babul','abul','kabul','tabul','dabul','fabul'];
console.log(friends);
friends.sort();
console.log(friends);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

// **** এটা সিঙ্গেল-ডিজিট-নম্বর টাইপ এরের জন্য ঠিক কাজ করে, যেমনঃ

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const numbers =[8,2,9,4,7,6,3,5];
console.log(numbers);
numbers.sort();
console.log(numbers);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

// **** কিন্তু এটা ডাবল-ডিজিট-নম্বর টাইপ এরের জন্য ঠিক কাজ করে না, যেমনঃ

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const doubleDigitNumbers =[2,1,12,109,100,6,105,13,10];
console.log(doubleDigitNumbers);
doubleDigitNumbers.sort();
console.log(doubleDigitNumbers);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

 // **** তবে ডাবল-ডিজিট-নম্বর টাইপ এরের জন্য অন্য ফাংশন ব্যবহার করে সর্ট করা যায়, যেমনঃ

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const sortedDoubleDigitNumbers =[2,1,12,109,100,6,105,13,10];
console.log(sortedDoubleDigitNumbers);
sortedDoubleDigitNumbers.sort(function(a,b){return a-b});
console.log(sortedDoubleDigitNumbers);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

// ** উপরে এসেন্ডিং অর্ডারে সর্ট হয়েছে। ডিসেন্ডিং অর্ডারে সর্ট করার জন্য নিচের এক্সাম্পলঃ

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const sortedDoubleDigitNumbers =[2,1,12,109,100,6,105,13,10];
console.log(sortedDoubleDigitNumbers);
sortedDoubleDigitNumbers.sort(function(a,b){return b-a});
console.log(sortedDoubleDigitNumbers);
//এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
-------------------------------------------------
** Array of Objects
-------------------------------------------------
*/

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/*
-------------------------------------------------
** Array of Arrays
-------------------------------------------------
*/

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/*
-------------------------------------------------
** Copy Array 
-------------------------------------------------
*/
/*
 **এক এরে থেকে আর এক এরে ডাইরেক্ট কপি করলে যে কোন এরে তে ভ্যালু চেঞ্জ করলে অন্য এরে তেও ওই ভ্যালু চেঞ্জ হয়ে যায়। যেমনঃ
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
let products=[25,26,27];
console.log(products);
let copyProducts=[];
copyProducts=products;
console.log(copyProducts);
copyProducts[0]=30;
console.log(products); // চেঞ্জ করলাম কপি তে, চেঞ্জ হল দুই জায়গায়
console.log(copyProducts);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/* 
 ** কারন নন-প্রিমিটিভ ডাটা টাইপের জন্য এধরনের কপি করলে প্রথম ভ্যারিয়েবলের ভ্যালু কপি না করে এর মেমোরি রেফারেন্স কপি করে দ্বিতীয় ভ্যারিয়েবলে এসাইন করা হয়। ফলে যে কোন এক ভ্যারিয়েবলে ভ্যালু চেঞ্জ করা হলে তা মেমরির ওই রেফারেন্সের জায়গায় চেঞ্জ হয় ফলে দুই ভ্যারিয়েবলেই ভ্যালু চেঞ্জ হিসাবে দেখায়।
 **তাই সত্যিকার অর্থে এক এরে থেকে আর এক এরে কপি করার প্রয়োজন হলে ডাইরেক্ট কপি করা ঠিক হবে না। কপি করার জন্য বিভিন্ন পদ্ধত্তি আছে। যেমনঃ
*/
//* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

//এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
//

/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */



/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */



/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
-------------------------------------------------
** Challenge Tasks
-------------------------------------------------
*/
/* 
---------------------------------------------
 ******** Task 1
 ---------------------------------------------
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: 
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors);
let reversedColors=[];
for (color of colors){
    reversedColors.unshift(color);
}
console.log(reversedColors);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/*
---------------------------------------------
******** Task 2
---------------------------------------------
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: 
const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 76, 46]
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers=[];
for (number of numbers){
    if(number%2==0){
        evenNumbers.push(number);
    }
}
console.log(evenNumbers);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
---------------------------------------------
******** Task 3
---------------------------------------------
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: 
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik'
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let result="";
for(number of numbers){
    result=result+number;
}
console.log(result);
//*******output: TomTimTinTik
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
---------------------------------------------
******** Task 4 (Hard)
---------------------------------------------
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output.
Input: 
const statement = 'I am a hard working person'
Output:
'person working hard a am I'
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const statement = 'I am a hard working person';
const words = statement.split(" ");
//console.log(words);
let reversedWords=words.reverse();
//console.log(reversedWords);
let reverseStatement="";
for (i in reversedWords){
    reverseStatement=reverseStatement+" "+reversedWords[i];
}
console.log(reverseStatement);
//*******output:  person working hard a am I
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
const statement = 'I am a hard working person';
const words = statement.split(" ");
let result="";
for(i=words.length-1; i>=0; i--){
    result=result+" "+words[i];
}
console.log(result);

//*******output:  person working hard a am I
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
---------------------------------------------
******** Task 5
---------------------------------------------
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
---------------------------------------------
******** Task 6
---------------------------------------------
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/*
---------------------------------------------
******** Task 7
---------------------------------------------
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */