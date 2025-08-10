
// copy array =====>>>>>> newArray = [...array] Spread Operator এর মাধ্যমে এরে কপি করলে কপি এবং অরিজিনাল যে কোন এরে তে আলাদা ভাবে চেঞ্জ করা যায়। ডাইরেক্ট কপি করলে এক এরে তে চেঞ্জ করলে অন্য এরে তেও চেঞ্জ হয়ে  যায়।  

letters=['a','b','c','d'];
for (i of letters){
    console.log(i);
}

// copy array =====>>>>>> newArray = [...array] Spread Operator এর মাধ্যমে এরে কপি করলে কপি এবং অরিজিনাল যে কোন এরে তে আলাদা ভাবে চেঞ্জ করা যায়। ডাইরেক্ট কপি করলে এক এরে তে চেঞ্জ করলে অন্য এরে তেও চেঞ্জ হয়ে  যায়।  
/*
letters=['a','b','c','d'];
console.log(letters);
newLetters=[...letters];
console.log(newLetters);
letters.push('e');
console.log(letters);
console.log(newLetters);
newLetters.unshift('e');
console.log(letters);
console.log(newLetters);
//console.log(result);
*/
// array.includes(9) =====>>>>>> () এর মধ্যের ভ্যালু এরে তে থাকলে true দেয়, না থাকলে false দেয়
/*
const marks=[5,6,7,8];
let result=marks.includes(8);
console.log(result);
*/
// array.push(9) =====>>>>>> () এর মধ্যের প্যারামিটার শেষে ইনসার্ট করে দেয়
/*
const marks=[5,6,7,8];
console.log(marks);
marks.push(9);
console.log(marks);
*/
// array.unshift(9) =====>>>>>> () এর মধ্যের প্যারামিটার প্রথমে ইনসার্ট করে দেয়
/*
const marks=[5,6,7,8];
console.log(marks);
marks.unshift(9);
console.log(marks);
*/
// array.pop() =====>>>>>> শেষ আইটেম ডিলিট করে দেয়
/*
const marks=[5,6,7,8];
console.log(marks);
marks.pop();
console.log(marks);
*/
// array.shift() =====>>>>>> প্রথম আইটেম ডিলিট করে দেয়
/*
const marks=[5,6,7,8];
console.log(marks);
marks.pop();
console.log(marks);
*/
// array.shift() ==>> প্রথম আইটেম ডিলিট করে দেয়
/*
const marks=[5,6,7,8];
console.log(marks);
marks.shift();
console.log(marks);
*/