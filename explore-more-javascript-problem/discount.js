/* 
first 100 ----> 100tk
101-200 -------> 90tk
200+ ---------70tk
*/

function ticketPrice(ticketQty){
    const first100Ticket = 100;
    const second100Ticket = 90;
    const restTicket = 70;

    let totalCost;
    if(ticketQty <=100){
        totalCost = ticketQty * first100Ticket;
    }
    else if(ticketQty<=200){
        const first100Cost = first100Ticket * 100;
        const restTicket = ticketQty - 100;
        const second100Cost = restTicket * second100Ticket;
        totalCost = first100Cost + second100Cost;
    }
    else{
        const first100Cost = first100Ticket * 100;
        const second100Cost = second100Ticket *100;
        const restCost = ticketQty - 200;
        const restTicketCost = restCost * 70;
        totalCost = first100Cost + second100Ticket + restTicketCost;
    }
    return totalCost;


}