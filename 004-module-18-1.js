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


/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */


/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */


/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */



/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */



/* <<== এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে

এই কমেন্ট উঠাইয় দিয়ে প্রাক্টিস করতে হবে ==>> */