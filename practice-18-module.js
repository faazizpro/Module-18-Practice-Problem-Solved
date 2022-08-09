
/*
প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 

১) রাত ৮ টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 

=====================================================================================================*/



for ( let i = 1; i <=10; i++){
    console.log(i);
    for(p = 0; p <works.length; p++){
        const index = p;
        const elements = works[index];
        console.log(elements);
    }
}


/*
=====================================================================================================


প্রাকটিস চ্যালেঞ্জ-২: 

আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 

=====================================================================================================*/

var tasks = ['Unlcok video at 8 pm', 'watch the video', 'Take note', 'pratice yourself', 'Go to support season']


let j = 1;
while (j <= 10){
    console.log(j);

    let i = 0;
    while ( i <tasks.length){
    
    console.log(tasks[i]);
    i++;
}
    j++;

    
}

/*
প্রাকটিস চ্যালেঞ্জ-৩: 

উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 

======================================================================================================*/
var tasks = ['Unlcok video at 8 pm', 'watch the video', 'Take note', 'pratice yourself', 'Go to support season'];

let i = 10;
while(i >= 1){
    console.log(i);
    

    let j = 0;
    while (j<tasks.length){
        console.log(tasks[j]);
        j++
    }
    i--
}

/*
প্রাকটিস চ্যালেঞ্জ-৪: 

উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 

======================================================================================================
*/
var works = ['unloak at 8', 'watch video', 'take note', 'practice', 'join support'];
for (let i = 10; i>= 1; i--){
    console.log(i);
    for(let schedule =0; schedule<works.length; schedule++){
        console.log(works[schedule]);
    }
}

