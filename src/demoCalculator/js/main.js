let listTotal = 0

const zeroValue = () => {
    listTotal = 0
   document.querySelector('#outcomeList').innerHTML = listTotal 
}

const add3 = () => { 
    listTotal += 3
    document.querySelector('#outcomeList').innerHTML = listTotal
}

const add8 = () => { 
    listTotal += 8
    document.querySelector('#outcomeList').innerHTML = listTotal
}

const sub2 = () => {
    listTotal -= 2
    document.querySelector('#outcomeList').innerHTML = listTotal
}

document.querySelector('#pumpkin').addEventListener('click', zeroValue)
document.querySelector('#dominosPizza').addEventListener('click', add3)
document.querySelector('#MeatPie').addEventListener('click', add8)
document.querySelector('#iceCream').addEventListener('click', sub2)