const home = document.querySelector('#home')
const profile = document.querySelector('#profile')
const messages = document.querySelector('#messages')
const settings = document.querySelector('#settings')
const btnSearch = document.getElementById('btnSearch')
const datePeriod = document.getElementById('datePeriod')

//datepicker
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')

btnSearch.addEventListener('click', () => {
  let startDateVal = startDate.value
  let endDateVal = endDate.value

  datePeriod.textContent = `Período de ${startDateVal} á ${endDateVal}`
})

const swapTabs = (tab) => {
    let selectedTab = tab
    let tabId = tab.id.replace('tab-', '')
    const activeTabs = document.querySelectorAll('.active') 
    
    for(i=0; i < activeTabs.length; i++){
        if(activeTabs[i].className.includes() === 'active') {
            activeTabs.classList.remove('active')
        }

                    console.log(activeTabs[i].className)
    }
    
    document.querySelector('#' + tabId).classList.add('active')
    selectedTab.classList.add('active')
}
