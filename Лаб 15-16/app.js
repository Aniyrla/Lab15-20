class Game {
    constructor() {
        this.level = 1;
        this.timeLeft = 60;  // Начальный таймер — 60 секунд
        this.timerInterval = null;
        this.problemElement = document.getElementById("problem");
        this.answersElement = document.getElementById("answers");
        this.timeElement = document.getElementById("time");
        this.resultElement = document.getElementById("result");
        this.levelElement = document.getElementById("level");
        this.currentProblem = null;
        this.gameOver = false; // Флаг для отслеживания окончания игры

        // Экран с результатом
        this.restartButton = document.getElementById("restart-button");
        this.introScreen = document.getElementById("intro-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.startButton = document.getElementById("start-button");

        // Обработчик нажатия на кнопку "Начать игру"
        this.startButton.addEventListener('click', () => this.startGame());
        
        // Обработчик нажатия на кнопку "Начать заново"
        this.restartButton.addEventListener('click', () => this.restartGame());
    }

    startGame() {
        this.introScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameOver = false; // сброс флага окончания игры
        this.startNewLevel();
    }

    startNewLevel() {
        if (this.gameOver) return; // Если игра завершена, не начинаем новый уровень

        this.levelElement.textContent = `Уровень: ${this.level}`;
        this.resultElement.textContent = ''; // очистить результат
        this.generateProblem();
        this.startTimer();
        this.handleAnswerDragAndDrop();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.timeElement.textContent = this.timeLeft;
            } else {
                clearInterval(this.timerInterval);
                if (!this.gameOver) {
                    this.showResult(false);
                }
            }
        }, 1000);
    }

    generateProblem() {
        const levelFactor = this.level * 5;
        const num1 = Math.floor(Math.random() * (levelFactor)) + 1;
        const num2 = Math.floor(Math.random() * (levelFactor)) + 1;
        const answer = num1 + num2;

        this.currentProblem = { num1, num2, answer };

        this.problemElement.textContent = `${num1} + ${num2} = ?`;

        const answers = this.generateAnswers(answer);

        this.answersElement.innerHTML = '';
        answers.forEach((ans) => {
            const answerDiv = document.createElement('div');
            answerDiv.textContent = ans;
            answerDiv.classList.add('answer');
            answerDiv.setAttribute('draggable', true);
            this.answersElement.appendChild(answerDiv);
        });
    }

    generateAnswers(correctAnswer) {
        const answers = [correctAnswer];
        while (answers.length < 3) {
            const wrongAnswer = Math.floor(Math.random() * (this.level * 10)) + 1;
            if (!answers.includes(wrongAnswer)) {
                answers.push(wrongAnswer);
            }
        }
        return this.shuffleArray(answers);
    }

    shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    handleAnswerDragAndDrop() {
        const answers = document.querySelectorAll('.answer');
        answers.forEach(answer => {
            answer.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', answer.textContent);
                answer.classList.add('dragging');
            });

            answer.addEventListener('dragend', () => {
                answer.classList.remove('dragging');
            });
        });

        this.problemElement.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        this.problemElement.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedAnswer = e.dataTransfer.getData('text');
            this.checkAnswer(Number(draggedAnswer));
        });
    }

    checkAnswer(selectedAnswer) {
        if (selectedAnswer === this.currentProblem.answer) {
            this.showResult(true);
        } else {
            this.showResult(false);
        }
    }

    showResult(isCorrect) {
        if (isCorrect) {
            this.resultElement.textContent = "Правильный ответ!";
            this.level++;
            if (this.level > 11) {
                this.endGame(true); // Победа после 11-го уровня
            } else {
                setTimeout(() => this.startNewLevel(), 1000);
            }
        } else {
            this.resultElement.textContent = "Неправильный ответ. Попробуйте снова!";
            setTimeout(() => this.startNewLevel(), 1000);
        }
    }

    endGame(victory) {
        this.gameOver = true;
        clearInterval(this.timerInterval); // Останавливаем таймер
        this.timeElement.textContent = this.timeLeft; // Показываем оставшееся время
        if (victory) {
            this.resultElement.textContent = `Вы победили! Осталось времени: ${this.timeLeft} секунд.`;
        } else {
            this.resultElement.textContent = `Время вышло или неправильный ответ! Вы проиграли.`;
        }
        this.restartButton.style.display = "block"; // Показываем кнопку для перезапуска игры
    }

    restartGame() {
        this.level = 1;
        this.timeLeft = 60;  // Сбросим таймер на 60 секунд
        this.restartButton.style.display = "none"; // Скрываем кнопку перезапуска
        this.startGame(); // Начинаем игру заново
    }
}

// Инициализация игры
window.onload = () => {
    new Game();
};
