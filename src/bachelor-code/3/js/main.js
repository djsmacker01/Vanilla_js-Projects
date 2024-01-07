// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }

const claire = document.querySelector('#claire');
const nikki = document.querySelector('#nikki');

 document.querySelector('#contPrev').addEventListener('click', contPrev)
// console.log(test)
	// .

document.querySelector('#contNext').addEventListener('click', contNext)
// console.log(test1)
function contNext() {
	claire.classList.add('hidden')
	alert('Ops! Wrong choice')
}

function contPrev() {
	claire.classList.add('hidden')
	nikki.classList.toggle('hidden')
}

