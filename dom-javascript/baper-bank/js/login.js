document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passField = document.getElementById('password');
    const password = passField.value;
    
    if(email === '' && password === ''){
        alert('enter email and password')
    }
    
    else{
        if(email === 'sb07008@gmail.com' && password === 'secret'){
            window.location.href = 'bank.html'
        }
        else{
            alert('please enter valid pass and mail')
        }
    }
    
})