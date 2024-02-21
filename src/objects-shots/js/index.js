// Add event listeners

document.querySelectors('button').addEventListener('click', getDrinks)

// using the enter key to fire an event from the input element
document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { 
        document.querySelector('button').click();
    }
})