

const colorGreen = () => {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('body').style.color = 'white'
}

const colorBlue = () => { 
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'white'
}

const colorPurple = () => { 
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'
}

document.getElementById('green').onclick = colorGreen;
document.getElementById('purple').onclick = colorPurple;
document.getElementById('blue').onclick = colorBlue;

console.log(colorBlue);
