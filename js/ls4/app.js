const board = document.querySelector('#board')
const colors = ['#E6AF2E','#00D9C0','#7CDEDC','#713E43','#FE5D26','#FFB7C3','#7284A8']
const SQARES_NAMBER = 500

for (let i = 0; i < SQARES_NAMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
  const index = Math.floor(Math.random() * colors.length) 
  return colors[index]
}