//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  const url = `https://openlibrary.org/isbn/9781444765427.json`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
     .then(data => {
        console.log(data)
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// https://www.youtube.com/embed/5D9j-8Vhyto?rel=0&showinfo=0
