function createLabel(text = 'text', htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, name, value, text = "text", placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.placeholder = placeholder
  input.value = value
  input.type = text
  return input
}

const devForm = document.querySelector('#devForm')
const addTechBtn = document.querySelector('#addTechBtn')
const developers = []
let rowInput = 0

addTechBtn.addEventListener('click', function(ev) {
  ev.preventDefault()
  
  const devInput = document.querySelector('#devInput')
  const newRow = document.createElement('li')
  const rowIndex = rowInput
  rowInput++
  newRow.id = 'rowInput-' + rowIndex
  newRow.className = 'rowInput'

  const techNameLabel = createLabel('Name: ', 'techName')
  const techNameInput = createInput('techName-' + rowIndex, 'techName', null)

  newRow.append(techNameLabel, techNameInput)
  devInput.appendChild(newRow)
})
