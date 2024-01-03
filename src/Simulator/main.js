document.querySelectorAll('#sim').addEventListener('click', run)

function run() { 
    const fName = document.querySelector('#firstName').value
    const lName = document.querySelector('#lastName').value
    const mName = document.querySelector('#middleName').value
    const age = document.querySelector('#age').value
    
    document.querySelector('#container').innerHTML = `My Names are ${fName} ${mName} ${mName}, i'am ${age} years old`

}
