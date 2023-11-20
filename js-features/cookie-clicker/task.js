const img = document.getElementById('cookie')
let clicks = document.getElementById('clicker__counter')
let speed = document.getElementById('clicker__speed')
let start = new Date().getTime()
img.onclick = () => {
    clicks.textContent = Number(clicks.textContent) + 1
    if (Number(clicks.textContent) % 2 != 0) {
        img.width += 20
        img.height += 20
    } else {
        img.width -= 20
        img.height -= 20
    }
    let end = new Date().getTime()
    speed.textContent = (1 / (end - start) * 1000).toFixed(2)
    start = end
}