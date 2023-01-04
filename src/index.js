let firstDice = document.querySelectorAll('.dice1 img');
let secondDice = document.querySelectorAll('.dice2 img')
let spinButton = document.querySelector('.spin');
spinButton.addEventListener("click", spin)
function spin() {
    firstDice.forEach(dice => dice.removeAttribute('class'));
    secondDice.forEach(dice => dice.removeAttribute('class'));
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    firstDice[randomNumber1].setAttribute('class', "show");
    secondDice[randomNumber2].setAttribute('class', 'show');
    let h3 = document.querySelector('h3');
    randomNumber1 === randomNumber2 ? h3.innerText = 'DRAW!' : randomNumber1 < randomNumber2 ? h3.innerText = "Player 2 Wins! 🚩" : h3.innerText = "Player 1 Wins!🚩"
}
document.querySelector('.restart').addEventListener('click', () => window.location.reload())

