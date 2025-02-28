const clickButton = document.getElementById('clickButton');
const scoreElement = document.getElementById('score');

let score = 0;

clickButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;
});