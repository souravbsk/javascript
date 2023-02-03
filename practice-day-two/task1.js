// এমন  একটা  লুপ  লেখো  যে  তোমার  হয়ে  ১০ বার  sorry  লেখা  টা  প্রিন্ট  করবে 
for(let i = 1; i<=10; i++){
    console.log(i , 'sorry');
}

// এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে ডাক  দিলেই  সে sorry লেখা টাকে ১০ বার  কনসোল লগ  করবে
function sorryTenTime(){
    for(let i = 1; i<=10; i++){
        console.log(i , 'sorry');
    }
    
}
sorryTenTime()