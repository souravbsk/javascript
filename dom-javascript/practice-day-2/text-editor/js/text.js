
document.getElementById('bold').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal'
        document.getElementById('bold').classList.remove('text-white', 'bg-blue-600')

    }
    else {
        textArea.style.fontWeight = 'bold'
        document.getElementById('bold').classList.add('text-white', 'bg-blue-600')
    }


})
document.getElementById('italic').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal'
        document.getElementById('italic').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.fontStyle = 'italic'
        document.getElementById('italic').classList.add('text-white', 'bg-blue-600')
    }

})

document.getElementById('underline').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = 'none'
        document.getElementById('underline').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.textDecoration = 'underline'
        document.getElementById('underline').classList.add('text-white', 'bg-blue-600')
    }
})
document.getElementById('align-left').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textAlign === 'left') {
        textArea.style.textAlign = 'inherit'
        document.getElementById('align-left').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.textAlign = 'left'
        document.getElementById('align-left').classList.add('text-white', 'bg-blue-600')
    }

})
document.getElementById('align-center').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textAlign === 'center') {
        textArea.style.textAlign = 'left'
        document.getElementById('align-center').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.textAlign = 'center'
        document.getElementById('align-center').classList.add('text-white', 'bg-blue-600')
    }

})
document.getElementById('align-right').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textAlign === 'right') {
        textArea.style.textAlign = 'left'
        document.getElementById('align-right').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.textAlign = 'right'
        document.getElementById('align-right').classList.add('text-white', 'bg-blue-600')
    }

})
document.getElementById('align-justify').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textAlign === 'justify') {
        textArea.style.textAlign = 'left'
        document.getElementById('align-justify').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.textAlign = 'justify'
        document.getElementById('align-justify').classList.add('text-white', 'bg-blue-600')
    }

})
document.getElementById('numberInput').addEventListener('input', function (e) {
    console.log(e.target.value)
    const fontValue = e.target.value;
    const textArea = document.getElementById('text-area');
    textArea.style.fontSize = `${fontValue}px`
    document.getElementById('numberInput').classList.add('text-white', 'bg-blue-600')

})
document.getElementById('case').addEventListener('click', function (e) {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textTransform === 'uppercase') {
        textArea.style.textTransform = 'lowercase'
        document.getElementById('case').classList.remove('text-white', 'bg-blue-600')
    }
    else {
        textArea.style.textTransform = 'uppercase'
        document.getElementById('case').classList.add('text-white', 'bg-blue-600')
    }
});
document.getElementById('fontColor').addEventListener('input', function (e) {
    const colorValue = e.target.value;
    const textArea = document.getElementById('text-area');
    textArea.style.color = colorValue;
    document.getElementById('fontColor').classList.add('text-white', 'bg-blue-600')

})
