/*
-------------------------------------------------
** Function Defination এবং Function Call
-------------------------------------------------
*/
/*
-------------------------------------------------
** Practice Tasks - Simple function Related Practice Tasks
-------------------------------------------------
*/
/* 
---------------------------------------------
 ******** Task 1
 ---------------------------------------------
*/
/*
Take four parameters. Multiply the four numbers and then return the result
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
function multiplyFourNumbers(a,b,c,d){
    let result=a*b*c*d;
    return result;
} 
let output=multiplyFourNumbers(2,3,4,5)
console.log(output);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */
/* 
---------------------------------------------
 ******** Task 2
 ---------------------------------------------
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
function divOrMulBy2 (a){
    let b;
    if (a%2!==0){
        b=a*2
    }else{
        b=a/2;
    }
    return b;
}
let result=divOrMulBy2(246);
console.log(result);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/* 
---------------------------------------------
 ******** Task 3
 ---------------------------------------------
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
function avgOfArray(a){
    let arraySize=a.length;
    sum=0;
    for (let items of a){
        sum=sum+items;
    }
    arrayAvg=sum/arraySize;
    return arrayAvg;
}
let aa=[2,2,2,2];
let output=avgOfArray(aa);
console.log(output);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/* 
---------------------------------------------
 ******** Task 4
 ---------------------------------------------
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
function countZero(aa){
    let count=0;
    for (i=0;i<=aa.length;i++){
        if(aa[i]==="0"){
            count++;
        }        
    }
    return count;
}
    
let myStr="0101100101001";
let output=countZero(myStr);
console.log(output);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */

/* 
---------------------------------------------
 ******** Task 5
 ---------------------------------------------
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/
/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে
function odd_even(a){
    if(a%2===0){
        return "Even";
    }else {
        return "Odd";
    }
}
let output=odd_even(9);
console.log(output);
এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */