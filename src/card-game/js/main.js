let deckId = ' '
 fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const choice = document.querySelector('input').value
  console.log(choice)
 
  const url = `https://api.nasa.gov/planetary/apod?api_key=21DG9YugnkoCOwBp8nG4CbrHggWWaJVX1Ezmzhaw&date=${choice}`


 
}

