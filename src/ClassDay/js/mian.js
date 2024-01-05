document.querySelector('#check').addEventListener('click', check)

const checkBox = () => {
    const day = document.querySelector('#day').value

    if (day === 'monday' || day === 'tuesday' || day === 'thursday') {
        alert('Class Day')
        
    } else if (day === 'saturday' || day === 'sunday') {
        alert('Boring weekend')
     }
    else {
        alert('Invalid input, Try again')
        }
    }
