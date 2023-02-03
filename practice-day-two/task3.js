// 3
/* 
এখন  একটা  রি-ইউজেবল  ফাঙ্কশন  লিখো   যাকে  তুমি  শুধু  (চেস্ট ,বাইসেপ ,ট্রাইসেপ ) এইগুলা  দিয়ে  ডাক  দিলে  সে  তোমাকে  ডিটেলস  ওয়ার্কআউট দিয়ে  দিবে ।
*/



function workout(workoutName) {
    var bicepWorkout = ["cable cros", "bicep", "bicep"];
    var chestWorkout = ["chest fly", "chest press", "chest"];

    if(workoutName == 'chest'){
        return chestWorkout;
    }
    else if(workoutName == 'bicep'){
        return bicepWorkout;
    }
    else{
        return 'dont know'
    }
}

var workoutPlan = workout('chest');
console.log(workoutPlan);