const p = document.getElementById('timer')
let countdown = setInterval( () => {
    p.textContent = Number(p.textContent) - 1

    if (p.textContent < 0) {
        // останавливаем отсчёт
        clearInterval(countdown);
        alert("Вы победили в конкурсе!");
       }
}, 1000)