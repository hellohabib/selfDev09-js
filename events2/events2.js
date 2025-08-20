
// Change the text of an h3 heading element 
document.getElementById('btn-change-text')
.addEventListener('click',function(){
    const changeText=document.getElementById('change-text-el');
    changeText.innerText="This is modified text";
})


// Change the text of p element with user's text input element value 
document.getElementById('btn-update')
.addEventListener('click',function(){
    const inputtext=document.getElementById('input-text');
    document.getElementById('output-text').innerText=inputtext.value;
    //console.log(inputtext);
})