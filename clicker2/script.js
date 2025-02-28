// let clickCount = 0;
// let autoClickerLevel = 0;
// let autoClickerCost = 100;

// const clickArea = document.getElementById('clickArea');
// const clickCountDisplay = document.getElementById('clickCount');
// const autoClickerLevelDisplay = document.getElementById('autoClickerLevel');
// const buyAutoClickerButton = document.getElementById('buyAutoClicker');

// clickArea.addEventListener('click', () => {
//     clickCount++;
//     clickCountDisplay.textContent = clickCount;
// });

// buyAutoClickerButton.addEventListener('click', () => {
//     if (clickCount >= autoClickerCost) {
//         clickCount -= autoClickerCost;
//         autoClickerLevel++;
//         autoClickerLevelDisplay.textContent = autoClickerLevel;
//         clickCountDisplay.textContent = clickCount;
//         autoClickerCost = Math.floor(autoClickerCost * 1.5); // Increase cost for next auto clicker
//         buyAutoClickerButton.textContent = `Buy Auto Clicker (${autoClickerCost} Clicks)`;
//     } else {
//         alert("Not enough clicks!");
//     }
// });

// // Auto clicker functionality
// setInterval(() => {
//     clickCount += autoClickerLevel;
//     clickCountDisplay.textContent = clickCount;
// }, 1000);

let clickCount = 0;
let autoClickerCount = 0;
let autoClickerActive = false;

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const buyAutoClickerButton = document.getElementById('buyAutoClicker');
const autoClickerCountDisplay = document.getElementById('autoClickerCount');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

buyAutoClickerButton.addEventListener('click', () => {
    if (clickCount >= 10) {
        clickCount -= 10;
        autoClickerCount++;
        clickCountDisplay.textContent = clickCount;
        autoClickerCountDisplay.textContent = autoClickerCount;
        if (!autoClickerActive) {
            autoClickerActive = true;
            startAutoClicker();
        }
    } else {
        alert("Not enough clicks!");
    }
});

function startAutoClicker() {
    setInterval(() => {
        if (autoClickerActive) {
            clickCount++;
            clickCountDisplay.textContent = clickCount;
        }
    }, 1000);
}
