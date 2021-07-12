function init() {
  const grid = document.querySelector('.grid')
  const cells = []
  const width = 9
  const cellCount = width * width

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log((i / 3) % 1 )
      // cell.classList.add(i)
      
      if ((i / 3) % 1 === 0) {
        cell.classList.add('left')
      } 
      if (((i + 1) / 9) % 1 === 0) {
        cell.classList.add('right')
      }
      if ((i > 17 && i < 27) || (i > 44 && i < 54)) {
        cell.classList.add('bottom')
      }
      grid.appendChild(cell)
      cells.push(cell)
    }
  }
  createGrid()
}

window.addEventListener('DOMContentLoaded', init)