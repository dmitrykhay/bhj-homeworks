const allClassReveal = Array.from(document.querySelectorAll('.reveal'))

class showContent {
    constructor(listElements) {
        this.listElements = listElements

        this.timerCheck()
    }

    checkClass(element) {
        const {top, bottom} = element.getBoundingClientRect()
        if (bottom < 0) {
            return false
        }
        if (top > window.innerHeight) {
            return false
        }
        return true
    }

    activationSecondaryClass(listObjects) {
        for (let i of listObjects) {
            if (this.checkClass(i)) {
                i.classList.add('reveal_active')
            } else {
                if (i.classList.contains('reveal_active')) {
                    i.classList.remove('reveal_active')
                }
            }
        }
    }

    timerCheck() {
        setInterval(() => {
            this.activationSecondaryClass(this.listElements)
        }, 1000)
    }
}

new showContent(allClassReveal)