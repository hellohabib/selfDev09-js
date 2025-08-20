//console.log("External File");
document.getElementById('btn-mk-green')
    .addEventListener('click',function(){
        document.body.style.backgroundColor='green';
    })

// Option-2 for Click Event Handler
function makeRed(){
            document.body.style.backgroundColor='red';
        }
function makeYellow(){
            document.body.style.backgroundColor='yellow';
        }
// inline function call
const btnMkPurple=document.getElementById('btn-mk-purple');
btnMkPurple.onclick=function(){
    document.body.style.backgroundColor='purple';
}
// define function and call without the ()
const btnMkBlue=document.getElementById('btn-mk-blue');
btnMkBlue.onclick=mkBlue; // এখানে ফাংশনের নামের পরে () দেওয়া যাবে না। দিলে js এই লাইনেই ফাংশন কল করে কালার ব্লু  করে ফেলবে। onClick ইভেন্টের জন্য অপেক্ষা করবে না।
function mkBlue(){
    document.body.style.backgroundColor='blue';
}