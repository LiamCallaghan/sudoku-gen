function init() {
  const grid = document.querySelector('.grid')
  const cells = []
  const width = 9
  const cellCount = width * width
  let nineCount = 1
  let rowCount = 1

  function rowMaker() {

    function randomNum(square) {
      square.innerHTML = Math.floor((Math.random() * 9) + 1)
    }

    const row1 = document.querySelectorAll('.row1')
    const row2 = document.querySelectorAll('.row2')
    const row3 = document.querySelectorAll('.row3')
    const row4 = document.querySelectorAll('.row4')
    const row5 = document.querySelectorAll('.row5')
    const row6 = document.querySelectorAll('.row6')
    const row7 = document.querySelectorAll('.row7')
    const row8 = document.querySelectorAll('.row8')
    const row9 = document.querySelectorAll('.row9')

    row1.forEach(randomNum)
    row2.forEach(randomNum)
    row3.forEach(randomNum)
    row4.forEach(randomNum)
    row5.forEach(randomNum)
    row6.forEach(randomNum)
    row7.forEach(randomNum)
    row8.forEach(randomNum)
    row9.forEach(randomNum)
  }

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log((i / 3) % 1 )

      cell.classList.add(`column${nineCount}`)
      nineCount++

      if (nineCount < 10) {
        cell.classList.add(`row${rowCount}`)
      } else {
        cell.classList.add(`row${rowCount}`)
        rowCount++
        nineCount = 1
      }

      // cell.innerHTML = i
      
      if ((i / 3) % 1 === 0) {
        cell.classList.add('left')
      } 
      if (((i + 1) / 9) % 1 === 0) {
        cell.classList.add('right')
      }
      if ((i > 17 && i < 27) || (i > 44 && i < 54) || (i > 71)) {
        cell.classList.add('bottom')
      }
      if (i < 9) {
        cell.classList.add('top')
      }
      grid.appendChild(cell)
      cells.push(cell)
    }
  }
  createGrid()
  rowMaker()
}

window.addEventListener('DOMContentLoaded', init)