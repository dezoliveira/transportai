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

//User Search Inputs
const btnSearch = document.getElementById('btnSearch')
const userList = document.getElementById('user-list')
const userInput = document.getElementById('user-input')
const userEditList = document.getElementById('user-edit-list')
const userEditInput = document.getElementById('user-edit-input')

//User Form Inputs
const registerName = document.getElementById('register-name')
const registerMail = document.getElementById('register-mail')
const registerPassword = document.getElementById('register-password')

const btnEdit = document.getElementById('btn-edit')

//Contracts
const contractList = document.getElementById('contract-list')
const contractInput = document.getElementById('contract-input')
const contractEditList = document.getElementById('contract-edit-list')
const contractEditInput = document.getElementById('contract-edit-input')

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

const contracts = [
  {
    id: 1,
    name: 'Serviço 1',
    date: '12/12/2023',
    price: '500'
  }
]

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
            <i onclick="deleteForm()" class="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"></i>
          </td>
        </tr>
      </tbody>
    `
  }

  for (i in contracts) {
    let id = contracts[i].id
    let name = contracts[i].name
    let date = contracts[i].date
    let price = contracts[i].price

    //contract list
    contractList.innerHTML += `
      <tbody>
        <tr id="${id}">
          <td>${name}</td>
          <td>Iniado em: ${date}</td>
          <td>${price}</td>
        </tr>
      </tbody>
    `

    //edit list
    contractEditList.innerHTML += `
      <tbody>
        <tr id="${id}">
          <td>${name}</td>
          <td>Iniado em: ${date}</td>
          <td>${price}</td>
          <td class="text-center">
            <i onclick="editContractForm(${id})" class="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#contractModal"></i>
            <i onclick="deleteContractForm()" class="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#contractModal"></i>
          </td>
        </tr>
      </tbody>
    `
  }
}

const editForm = (id) => {
  let user = users.filter((user) => user.id === id )
  let editModal = document.querySelector('#exampleModalCenter .modal-content')

  editModal.innerHTML = `
        <div class="modal-header">
          <h5 class="modal-title">Editar Usuário</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
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
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Salvar Alterações</button>
        </div>
  `
}

const deleteForm = () => {
  let deleteModal = document.querySelector('#exampleModalCenter .modal-content')
  deleteModal.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title">Deletar Usuário</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Tem certeza que deseja deletar o usuário ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      <button onclick="deleteUser()" type="button" class="btn btn-primary">Deletar Usuário</button>
    </div>
  `
}

const deleteUser = () => {
  Swal.fire({
    title: 'Deu tudo certo',
    text: 'Usuário deletado com sucesso!',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  
  return
}

const deleteContract = () => {
  Swal.fire({
    title: 'Deu tudo certo',
    text: 'Contrato deletado com sucesso!',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  
  return
}

const editContractForm = (id) => {
  let contract = contracts.filter((contract) => contract.id === id )
  let editModal = document.querySelector('#contractModal .modal-content')

  editModal.innerHTML = `
        <div class="modal-header">
          <h5 class="modal-title">Editar Contrato</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form onsubmit="submitForm(event)" class="d-flex flex-column gap-4 p-4">
            <div>
              <label for="form-login">Nome do Contrato</label>
              <input id="contract-name" class="form-control" value="${contract[0].name}" />
            </div>
            <div>
              <div>
                <label for="contractDate">Data do Contrato</label>
                <input id="contractDate" class="form-control" type="date" value="${contract[0].date}"/>
              </div>
            </div>
            <div>
              <label for="form-login">Valor do Contrato</label>
              <input id="contract-price" class="form-control" placeholder="Ex: 450,00" value="${contract[0].price}" />
            </div>
            <div class="btn-group">
              <button class="btn btn-primary">Cadastrar</button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Salvar Alterações</button>
        </div>
  `
}

const deleteContractForm = () => {
  let deleteModal = document.querySelector('#contractModal .modal-content')
  deleteModal.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title">Deletar Contrato</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Tem certeza que deseja deletar o contrato ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      <button onclick="deleteContract()" type="button" class="btn btn-primary">Deletar Contrato</button>
    </div>
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

submitForm = (e) => {
  e.preventDefault()
  Swal.fire({
    title: 'Deu tudo certo!',
    text: 'Usuario Cadastro com sucesso!',
    icon: 'success',
    confirmButtonText: 'Ok'
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('#exampleModalCenter .modal-content').innerHTML = ''
    }
  })
  return
} 

//datepicker
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')

//Users Toggle Input
userInput.addEventListener('input', (e) => {
  let inputUser = e.target.value
  console.log(inputUser.length)
  if (inputUser.length) {
    userList.style.display = 'block'
  } else {
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

//Contract Toggle Input
contractInput.addEventListener('input', (e) => {
  let inputContract = e.target.value

  if(inputContract.length) {
    contractList.style.display = 'block'
  } else {
    contractList.style.display = 'none'
  }
})

contractEditInput.addEventListener('input', (e) => {
  let inputContract = e.target.value

  if(inputContract.length) {
    contractEditList.style.display = 'block'
  } else {
    contractEditList  .style.display = 'none'
  }
})

//Dashboard Search
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
