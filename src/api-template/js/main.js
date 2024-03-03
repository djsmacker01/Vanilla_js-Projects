//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  const url = `https://api.nasa.gov/planetary/apod?api_key=YoDv9wrd153GHLaxj5ixUkZlqcjqTLasfUawmTxO`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.explanation
        let test = document.querySelector('video')
        test.src = data.url
        console.log('Testing image', test)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

