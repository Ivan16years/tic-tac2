let cells = document.querySelectorAll('#field td');
console.log(cells);

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function start() {
            if (i % 2 == 0) {
                this.textContent = 'X';
            } else {
                this.textContent = 'O';
            }
            i++;
            this.removeEventListener('click', start)
            if (isWinner(cells) == true) {
                winner.removeEventListener(`Победитель ${this.textContent}`);
            } else if (i == 9) {
                alert("Ничья");
            }
        })
    }
}

start(cells);

function isWinner(cells) {
    let combs = [
        [0, 1, 2], //0
        [3, 4, 5], //1
        [6, 7, 8], //2
        [0, 3, 6], //3
        [1, 4, 7], //4 
        [2, 5, 8], //5 
        [0, 4, 8], //6 
        [2, 4, 6]  //7
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent
            == cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}