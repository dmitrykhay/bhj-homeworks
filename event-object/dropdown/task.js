let tabs = Array.from(document.querySelectorAll('.tab'))
let tabsContent = Array.from(document.querySelectorAll('.tab__content'))

function getActiveIndex() {
    return tabs.findIndex(el => el.classList.contains('tab_active'))
}

function changePosition(position) {
    let indexActive = getActiveIndex()

    tabs[indexActive].classList.remove('tab_active')
    tabsContent[indexActive].classList.remove('tab__content_active')

    tabs[position].classList.add('tab_active')
    tabsContent[position].classList.add('tab__content_active')
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        let indexChange = tabs.indexOf(tab)
        changePosition(indexChange)
    })
})