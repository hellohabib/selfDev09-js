// mouse-enter
        document.getElementById('btn-example')
        .addEventListener('mouseenter', function(){
            console.log('Event Triggered');
        })
// mouse-move
        document.getElementById('btn-example')
        .addEventListener('mousemove', function(){
            console.log('Event Triggered');
        })
// mouse-out
        document.getElementById('btn-example')
        .addEventListener('mouseout', function(){
            console.log('Event Triggered');
        })
// input text field: focus and blur
        document.getElementById('input-email')
        .addEventListener('focus', function(){
            console.log('User is about to enter email');
        })

                document.getElementById('input-email')
        .addEventListener('blur', function(){
            console.log('Finished enter email');
        })

        document.getElementById('input-name')
        .addEventListener('focus', function(){
            console.log('User is about to enter Name');
        })

                document.getElementById('input-name')
        .addEventListener('blur', function(){
            console.log('Finished enter Name');
        })
// key-down
        document.getElementById('input-email')
        .addEventListener('keydown', function(event){
            console.log('User is typing: ',event.target.value); // event: কোন ইভেন্ট হচ্ছে তার বিস্তারিত taget: কোথায় ইভেন্ট হচ্ছে  value: ইভেন্টের স্পেসিক ভ্যালু 
        })
// key-up
        document.getElementById('input-email')
        .addEventListener('keyup', function(event){
            console.log('User is typing: ',event.target.value); // event: কোন ইভেন্ট হচ্ছে তার বিস্তারিত taget: কোথায় ইভেন্ট হচ্ছে  value: ইভেন্টের স্পেসিক ভ্যালু 
        })
