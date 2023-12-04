const allFontSize = Array.from(document.querySelector('.book__control').querySelectorAll('.font-size'))
const allTextColor = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'))
const allBackground = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'))

const classBookContent = document.querySelector('.book__content')

function getActivePosition(listClasses, findClass) {
    return listClasses.findIndex(el => el.classList.contains(findClass))
}

function changeActivePosition(listClasses, position, findClass, firstPart, needAttribyte) {
    let activePosition = getActivePosition(listClasses, findClass)
    listClasses[activePosition].classList.remove(findClass)
    listClasses[position].classList.add(findClass)

    let size = listClasses[position].getAttribute(needAttribyte)
    let sizePrev = listClasses[activePosition].getAttribute(needAttribyte)

    if (classBookContent.classList.contains(firstPart+sizePrev)) {
        classBookContent.classList.remove(firstPart+sizePrev)
    }
    classBookContent.classList.add(firstPart+size)
}

function assignKey(listClasses, listArgs) {
    listClasses.forEach((el) => {
        el.addEventListener('click', (event) => {
            event.preventDefault()
            let indexToChanges = listClasses.indexOf(el)
            changeActivePosition(listClasses, indexToChanges, ...listArgs)
        })
    })
}

const allBookControl = [...document.querySelectorAll('.book__control')]
for (let i of allBookControl) {
    let block = NaN
    if (i.classList.contains('book__control_font-size')) {
        block = [...i.querySelectorAll('.font-size')]
        assignKey(block, ['font-size_active', 'book_fs-', 'data-size'])
    } 
    else if (i.classList.contains('book__control_color')) {
        block = [...i.querySelectorAll('.color')]
        assignKey(block, ['color_active', 'book_color-', 'data-text-color'])
    }
    else if (i.classList.contains('book__control_background')) {
        block = [...i.querySelectorAll('.color')]
        assignKey(block, ['color_active', 'bg_color_', 'data-bg-color'])
    }
}