getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function newGame() {
    dead.textContent = 0;
    lost.textContent = 0;
}

for(let i of Array(9).keys()) {
    hole = getHole(i+1);
    hole.onclick = (element) => {
        let t = element.target;
        console.log(t.classList.contains( 'hole_has-mole' ))
        if (t.classList.contains( 'hole_has-mole' )) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            alert("Победа!");
            newGame();
        }
        if (lost.textContent == 5) {
            alert("Вы проиграли");
            newGame();
        }
    }
}