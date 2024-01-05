let listTotal = 0

const zeroValue = () => {
    listTotal = 0
   document.querySelector('#outcomeList').innerHTML = listTotal 
}

const add3 = () => { 
    listTotal += 3
    document.querySelect('#outcomeList').innerHTML = listTotal
}

const add8 = () => { 
    listTotal += 8
    document.querySelect('#outcomeList').innerHTML = listTotal
}

const sub2 = () => {
    listTotal -= 2
    document.querySelect('#outcomeList').innerHTML = listTotal
}

document.querySelect('#pumpkin').addEventListener('click', zeroValue)
document.querySelect('#dominosPizza').addEventListener('click', add3)
document.querySelect('#MeatPie').addEventListener('click', add8)
document.querySelect('#iceCream').addEventListener('click', sub2)