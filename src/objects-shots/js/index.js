// Add event listeners

document.querySelectors('button').addEventListener('click', getDrinks)

// using the enter key to fire an event from the input element
document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { 
        document.querySelector('button').click();
    }
})

let listOfDrinks, intervalID;
let index = 0;

function getDrinks() {
    let search = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('main')
        })
}