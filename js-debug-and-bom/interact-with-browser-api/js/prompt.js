// alert
// alert have ok button when we click ok return undefined
const alertPopup = () => {
    alert('hello javascript')

}



// confirm
/* confirm have 2 button which is ok and cancel . it give us Boolean value (true/false);
ok button  == true;
cancel button == false; 
*/
const confirmPopup = () => {
   const confirmValue = confirm('do you want a good developer ??');
   console.log(confirmValue);
}



// prompt 
/* 
prompt give us two button ok/cancel and also give use an input field for submit value ;
ok button == input field value;
cancel button = null 
*/
const promptField = () => {
    const promptValue = prompt('what is your name')
    console.log(promptValue);
}