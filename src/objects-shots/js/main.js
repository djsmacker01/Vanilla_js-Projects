//The user will enter a cocktail. Get a cocktail name, 
//photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value
    drink = drink.replace(/\+s/g,' ').trim()
     //Encode the search term to handle spaces and special characters
    const encodedDrink = decodeURIComponent(drink)
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedDrink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0]);
        document.querySelector('h2').innerHTML = data.drinks[0].strDrink
        document.querySelector('h3').innerHTML = data.drinks[0].strInstructions
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })

}
