const allClassRotatorCase = Array.from(document.querySelector('.rotator').querySelectorAll('.rotator__case'))

function getActivePosition(listClasses) {
    return listClasses.findIndex(el => el.classList.contains('rotator__case_active'))
}

function changeActivePosition(position) {
    let activeIndex = getActivePosition(allClassRotatorCase)
    allClassRotatorCase[activeIndex].classList.remove('rotator__case_active')
    allClassRotatorCase[position].classList.add('rotator__case_active')
    allClassRotatorCase[position].style.color = allClassRotatorCase[position].getAttribute('data-color')
    return Number(allClassRotatorCase[position].getAttribute('data-speed'))
}

function activateRotator(list) {
    let count = 0
    setTimeout(function timer() {
        count++
        if (count >= list.length) {
            count = 0
        }
        let needSpeed = changeActivePosition(count)
        setTimeout(timer, needSpeed)
    })
}

activateRotator(allClassRotatorCase)