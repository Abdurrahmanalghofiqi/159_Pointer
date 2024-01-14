// Inisialisasi angka acak antara 1 dan 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Fungsi untuk memeriksa tebakan
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100';
    } else {
        if (userGuess === secretNumber) {
            message.textContent = 'Congratulations! You guessed the number.';
            resetGame();
        } else if (userGuess < secretNumber) {
            message.textContent = 'Too low. Try again.';
        } else {
            message.textContent = 'Too high. Try again.';
        }
    }
}

// Fungsi untuk mereset permainan
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessInput').value = '';
}
