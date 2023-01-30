var signal = 'yellow'
if(signal == 'red'){
    console.log('danger');
}
else if(signal == 'yellow'){
    console.log('stop');
}
else{
    console.log('go');
}


// switch 
switch(signal){
    case 'red':
        console.log('danger plz stop');
        break;
        case 'yellow':
            console.log('stop dont go');
            break;
            default:
                console.log('plz go');
}