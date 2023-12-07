const buttons = Array.from(document.querySelectorAll('.dropdown'));

buttons.forEach((item) => {
    const mainArtical = item.querySelector('.dropdown__value')
    const dropdownArticals = item.querySelector('.dropdown__list')
    const listItem = Array.from(item.querySelectorAll('.dropdown__item'))
    
    function activateMenu(menuListDisplay) {
        menuListDisplay.classList.toggle('dropdown__list_active')
        }
        
    function changeArtical(event) {
        event.preventDefault()
        mainArtical.textContent = event.target.textContent
        event.target.closest('.dropdown__list').classList.remove('dropdown__list_active')
    }
    
    mainArtical.addEventListener('click', () => {activateMenu(dropdownArticals)})

    for(let item of listItem) {
        item.addEventListener('click', changeArtical)
    }
})


