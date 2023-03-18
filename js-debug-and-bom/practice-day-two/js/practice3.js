const setItemWithValue = (key, value) => {
    localStorage.setItem(key, value)
}

const removeItemName = (key) => {
    localStorage.removeItem(key)
}


// name field
const sendName = () => {
    const nameField = document.getElementById('nameInput');
    const nameValue = nameField.value;
    if (nameValue === '') {
        alert('please enter a valid value');
        return
    }
    setItemWithValue('name', nameValue)
}
const deleteName = () => {
    removeItemName('name');
}


// email field
const sendMail = () => {
    const mailField = document.getElementById('mailField');
    const mailValue = mailField.value;
    console.log(mailValue);
    if (mailValue === '') {
        alert('please enter a valid value');
        return
    }
    setItemWithValue('email', mailValue)
}
const mailDelete = () => {
    removeItemName('email');
}


// text area 
const sendTextArea = () => {
    const textAreaField = document.getElementById('textAreaField');
    const textAreaValue = textAreaField.value;
    if (textAreaValue === '') {
        alert('please enter a valid value');
        return
    }
    setItemWithValue('message', textAreaValue)
}
const deleteTextArea = () => {
    removeItemName('message');
}

const clearBtn = () => {
    localStorage.clear();
}
const sendBtn = () => {
    const nameField = document.getElementById('nameInput');
    const mailField = document.getElementById('mailField');
    const textAreaField = document.getElementById('textAreaField');
    const nameValue = nameField.value;
    const mailValue = mailField.value;
    const textAreaValue = textAreaField.value;
    const info = {
        name: nameValue,
        email: mailValue,
        bio: textAreaValue,
    }
    const convertInfoString = JSON.stringify(info);
    localStorage.setItem('details', convertInfoString)
}


const getInfoValue = () => {
    const infos = localStorage.getItem('details');
    const infoParse = JSON.parse(infos);
    console.log(infoParse);
    document.getElementById('nameInput').value = infoParse.name;
    document.getElementById('mailField').value = infoParse.email;
    document.getElementById('textAreaField').value = infoParse.bio;
}
getInfoValue()