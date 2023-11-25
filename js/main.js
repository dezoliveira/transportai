const home = document.querySelector('#home')
const profile = document.querySelector('#profile')
const messages = document.querySelector('#messages')
const settings = document.querySelector('#settings')
const btnSearch = document.getElementById('btnSearch')
const datePeriod = document.getElementById('datePeriod')
const userList = document.getElementById('user-list')
const userInput = document.getElementById('user-input')
const userEditList = document.getElementById('user-edit-list')
const userEditInput = document.getElementById('user-edit-input')

const tabUsers = document.getElementById('pills-users')

tabUsers.addEventListener('click', () => {
  userList.style.display = 'none'
  userInput.innerText = ''

  userEditList.style.display = 'none'
  userEditInput.innerText = ''
})

const users = [
  {
    id: 1,
    name: 'Andres Oliveira',
    role: 'Admin'
  },
  {
    id: 2,
    name: 'John Dee',
    role: 'User'
  }
]

submitForm = (e) => {
  e.preventDefault()
  Swal.fire({
    title: 'Deu tudo certo!',
    text: 'Usuario Cadastro com sucesso!',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  return
} 

//datepicker
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')

userInput.addEventListener('input', (e) => {
  let inputUser = e.target.value

  if (inputUser.length) {
    userList.style.display = 'block'
  } else{
    userList.style.display = 'none'
  }
})

userEditInput.addEventListener('input', (e) => {
  let inputUser = e.target.value

  if (inputUser.length) {
    userEditList.style.display = 'block'
  } else{
    userEditList.style.display = 'none'
  }
})

btnSearch.addEventListener('click', () => {
  let startDateVal = startDate.value
  let endDateVal = endDate.value

  if(!startDateVal.length) {
    // return alert('Digite a data Inicial')
    Swal.fire({
        title: 'Erro!',
        text: 'Digite a Data Inicial',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
    return
  }
  
  if(!endDateVal.length) {
    // return alert('Digite a data Final')
    Swal.fire({
        title: 'Error!',
        text: 'Digite a Data Final',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
    return
  }

  let arr1 = startDateVal.split('-')
  let arr2 = endDateVal.split('-')
  
  let newStartDate = arr1[0] + '/' + arr1[1] + '/' + arr1[2]
  let newEndDate = arr2[0] + '/' + arr2[1] + '/' + arr2[2]

  datePeriod.textContent = `Período de ${newStartDate} á ${newEndDate}`
})
