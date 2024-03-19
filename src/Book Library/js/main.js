//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('title')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  const url = `https://openlibrary.org/isbn/${choice}.json`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
     .then(data => {
       console.log(data.title)
       if (!localStorage.getItem('title')) {
         localStorage.setItem('title',data.title)
       }
       else {
          let books = localStorage.getItem('title') + ', ' + data.title
          localStorage.setItem('title', books);
       }
       
       // Put title into local storage
      
       document.querySelector('h2').innerText = localStorage.getItem('title')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

