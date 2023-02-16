function hotelCost (days){
    const firstToTenDays = 500;
    const TenToTwentyDays = 300; 
    const TwentyToinfiniy = 100;
    let total 
    if(days>=1 && days<=31){
        if(days <= 10){
            total = days * firstToTenDays;
        }
        else if(days <= 20 && days>10){
            const fistTenDaysCost = firstToTenDays * 10;
            const remainingDays = days - 10;
            const perTwentyDays = TenToTwentyDays * remainingDays;
            total = fistTenDaysCost + perTwentyDays;
        }
        else{
            const first1ToTenDays = firstToTenDays * 10;
            const sendond11To20Days = TenToTwentyDays * 10;
            const remainingDays = days - 20;
            const thirdInfinityDays = remainingDays * TwentyToinfiniy;
            const totalAbovee20DaysCost = first1ToTenDays + sendond11To20Days + thirdInfinityDays;
            total  = totalAbovee20DaysCost;
        }
    }
    else{
        console.log('must be you stay one day');
    }

    console.log(total);
}
hotelCost(25)