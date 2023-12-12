//Nav
const home = document.querySelector('#home')
const profile = document.querySelector('#profile')
const messages = document.querySelector('#messages')
const settings = document.querySelector('#settings')

//Nav Tabs
const tabUsers = document.getElementById('pills-users')
const tabUsersList = document.getElementById('users-list-tab')
const tabRegisterList = document.getElementById('users-register-tab')
const tabEditList = document.getElementById('users-edit-tab')

//User List
const datePeriod = document.getElementById('datePeriod')

//Search Inputs
const btnSearch = document.getElementById('btnSearch')
const userList = document.getElementById('user-list')
const userInput = document.getElementById('user-input')
const userEditList = document.getElementById('user-edit-list')
const userEditInput = document.getElementById('user-edit-input')

//Form Inputs
const registerName = document.getElementById('register-name')
const registerMail = document.getElementById('register-mail')
const registerPassword = document.getElementById('register-password')

const btnEdit = document.getElementById('btn-edit')

//on load
window.onload = () => {
  //create userList
  for (i in users) {
    let id = users[i].id
    let userName = users[i].name
    let email = users[i].email
    let role = users[i].role

    //user list
    userList.innerHTML += `
    <tbody>
      <tr id="${id}">
        <td>${userName}</td>
        <td>${email}</td>
        <td>${role}</td>
      </tr>
    </tbody>
    `

    //edit list
    userEditList.innerHTML += `
      <tbody>
        <tr id="${id}">
          <td>${userName}</td>
          <td>${email}</td>
          <td>${role}</td>
          <td class="text-center">
            <i onclick="editForm(${id})" class="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"></i>
            <i class="fa-solid fa-trash"></i>
          </td>
        </tr>
      </tbody>
    `
  }
}

const editForm = (id) => {
  let user = users.filter((user) => user.id === id )
  let editModal = document.querySelector('#exampleModalCenter .modal-body')

  editModal.innerHTML = `
    <form onsubmit="submitForm(event)" class="d-flex flex-column gap-4 p-4">
      <div>
        <label for="form-login">Nome do usuário</label>
        <input id="edit-username" class="form-control" value="${user[0].name}" />
      </div>
      <div>
        <label for="form-login">Email</label>
        <input id="edit-user-mail" class="form-control" value="${user[0].email}"/>
      </div>
      <div>
        <label for="form-login">Senha antiga</label>
        <span class="d-flex align-items-center gap-2 hidden-wrapper" style="position: relative;">
          <input id="register-password" type="password" class="form-control"/>
          <span class="hidden-icon" style="position: absolute; right: 10px;">
            <i class="fa fa-eye" id="togglePassword"></i>
          </span>
        </span>
      </div>
      <div>
        <label for="form-login">Nova senha</label>
        <span class="d-flex align-items-center gap-2 hidden-wrapper" style="position: relative;">
          <input id="register-password" type="password" class="form-control"/>
          <span class="hidden-icon" style="position: absolute; right: 10px;">
            <i class="fa fa-eye" id="togglePassword"></i>
          </span>
        </span>
      </div>
    </form>
  `
}

const arrContainers = [tabUsersList, tabRegisterList, tabEditList]

arrContainers.forEach((element, i) => {
  element.addEventListener('click', () => {
    switch(i){
      case 0:
        userEditInput.value = ''
        registerName.value = ''
        registerMail.value = ''
        registerPassword.value = ''
        return
      case 1:
        userInput.value = ''
        userEditInput.value = ''
        return
      case 2:
        userInput.value = ''
        registerName.value = ''
        registerMail.value = ''
        registerPassword.value = ''
        return
    }
  })
})

// tabUsers.addEventListener('click', () => {
//   userList.style.display = 'none'
//   userInput.innerText = ''

//   userEditList.style.display = 'none'
//   userEditInput.innerText = ''
// })

document.addEventListener('click', (e) => {
  
})

const users = [
  {
    id: 1,
    name: 'Andres Oliveira',
    role: 'Admin',
    password: '123456',
    email: 'admin@gmail.com',
  },
  {
    id: 2,
    name: 'John Dee',
    role: 'User',
    password: '123456',
    email: 'jd@gmail.com',
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
  console.log(inputUser.length)
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
