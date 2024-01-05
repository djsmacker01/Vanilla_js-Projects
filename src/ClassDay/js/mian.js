
const check = () => {
    const day = document.querySelector('#day').value

    if (day === 'Monday' || day === 'Tuesday' || day === 'Thursday') {
      
        document.querySelector('#placeToSee').innerHTML = 'Class Day'
        
    } else if (day === 'Saturday' || day === 'Sunday') {

        document.querySelector('#placeToSee').innerHTML = 'weekend'
     }
    else {
    
        document.querySelector('#placeToSee').innerHTML = 'Borring day'
        }
}
    document.querySelector('#check').addEventListener('click', check)

