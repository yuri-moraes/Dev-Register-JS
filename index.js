function createLabel(text = 'text', htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, name, placeholder = '', value, text = "text") {
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
  
  const devInputs = document.querySelector('#devInputs')
  const newRow = document.createElement('li')
  const rowIndex = rowInput
  rowInput++
  newRow.id = 'rowInput-' + rowIndex
  newRow.className = 'rowInput'

  const techNameLabel = createLabel('Name: ', 'techName')
  const techNameInput = createInput('techName-' + rowIndex, 'techName', '', null)

  const expLabel = createLabel('Experience: ', 'expLabel')
  const id1 = 'expInput' + rowIndex + '.1'
  const expInput1 = createInput(id1, 'expInput' + rowIndex, '', '0-2 anos', 'radio')
  const expLabel1 = createLabel('0-2 anos ', 'expLabel')
  const id2 = 'expInput' + rowIndex + '.2'
  const expInput2 = createInput(id2, 'expInput' + rowIndex, '', '3-4 anos', 'radio')
  const expLabel2 = createLabel('3-4 anos ', 'expLabel')
  const id3 = 'expInput' + rowIndex + '.3'
  const expInput3 = createInput(id3, 'expInput' + rowIndex, '', '5+ anos', 'radio')
  const expLabel3 = createLabel('5+ anos ', 'expLabel')

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remove'
  removeRowBtn.addEventListener('click', function () {
    devInputs.removeChild(newRow)
  })

  newRow.append(techNameLabel, techNameInput, expLabel, expInput1, expLabel1, expInput2, expLabel2, expInput3, expLabel3, removeRowBtn)
  devInputs.appendChild(newRow)
})

devForm.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullNameInput = document.querySelector('#fullname')
  const inputRows = document.querySelectorAll('.rowInput')
  let technologies = []

  inputRows.forEach(function (row) {
    const techNameInput = document.querySelector('#' + row.id + ' input[name="techName"] ').value
    const techExpInput = document.querySelector('#' + row.id + ' input[type="radio"]:checked ').value
    technologies.push({ name: techNameInput, experience: techExpInput })
  })

  const newDev = { fullname: fullNameInput.value, technologies: technologies }
  developers.push(newDev)

  fullNameInput.value = ''
  inputRows.forEach(function(rows) {
    rows.remove()
  })

  console.log(developers)
  alert('Cadastro concluído!')
})

