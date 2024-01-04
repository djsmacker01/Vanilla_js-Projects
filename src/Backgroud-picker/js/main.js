

const colorGreen = () => {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'white'
}

const colorBlue = () => { 
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('body').style.color = 'white'
}

const colorPurple = () => { 
    document.querySelector('body').style.backgroundColor = 'purple'
    document.querySelector('body').style.color = 'white'
}

document.getElementById('green').onclick = colorGreen;
document.getElementById('purple').onclick = colorPurple;
document.getElementById('blue').onclick = colorBlue;

console.log(colorBlue);
