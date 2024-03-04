//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  const url = `https://api.nasa.gov/planetary/apod?api_key=21DG9YugnkoCOwBp8nG4CbrHggWWaJVX1Ezmzhaw&date=${choice}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
    .then(data => {
      if (data.media_type === 'image') {
           let test = document.querySelector('img')
        test.src = data.url
        console.log('Testing image', test)
      }
      else if(data.media_type === ' video') {
        document.querySelector('iframe').src = data.url
      }
        console.log(data)
        document.querySelector('h3').innerText = data.explanation
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// https://www.youtube.com/embed/5D9j-8Vhyto?rel=0&showinfo=0
