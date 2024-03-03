//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  const url = `https://api.nasa.gov/planetary/apod?api_key=YRqpm1WshA9gMDjk5O8yb8FbdKf5cXp0BI8hFWzxu`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.explanation
        let test = document.querySelector('img')
        test.src = data.url
        console.log('Testing image', test)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// https://www.youtube.com/embed/5D9j-8Vhyto?rel=0&showinfo=0
