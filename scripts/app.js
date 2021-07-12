function init() {
  const grid = document.querySelector('.grid')
  const cells = []
  const width = 9
  const cellCount = width * width

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cells.push(cell)
    }
  }
  createGrid()
}

window.addEventListener('DOMContentLoaded', init)