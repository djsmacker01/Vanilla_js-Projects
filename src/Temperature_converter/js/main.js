const convert = () => {
    let temp = document.querySelector('#temp').value;
    temp = temp * 9 / 5 + 32
    document.querySelector('#container').innerHTML = temp;
}

document.querySelector('#sim').addEventListener('click', convert);
