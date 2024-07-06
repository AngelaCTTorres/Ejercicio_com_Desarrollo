
class AudioController {
    constructor() {
        this.bgMusic = new Audio();
        this.flipSound = new Audio('./musica/flip.wav');
        this.matchSound = new Audio('./musica/match.wav');
        this.victorySound = new Audio('./musica/victory.wav');
        this.gameOverSound = new Audio('./musica/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
        
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards, cards2) {
        this.cardsArray = cards;
        this.cardsArray2 = cards2;
        this.currentLevelCardsArray = cards; // Inicializa con las cartas del primer nivel
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        this.currentLevel = 1; // Nivel inicial
        
        
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;


        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.currentLevelCardsArray); // Mezcla las cartas del nivel actual
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }

    gameOver() {
        clearInterval(this.countdown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
        setTimeout(() => this.resetGame(), 3000);
         }

    victory() {
        clearInterval(this.countdown);
        this.audioController.victory();
        if (this.currentLevel === 1) {

            document.getElementById('victory-text2').classList.add('visible');
            document.getElementById('next-level').addEventListener('click', () => this.nextLevel());

        } else {
            document.getElementById('victory-text').classList.add('visible');
            setTimeout(() => this.resetGame(), 3000);
        }




    }

    hideCards() {
        this.currentLevelCardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if (this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMismatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if (this.matchedCards.length === this.currentLevelCardsArray.length)
            this.victory();
    }

    cardMismatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }

    shuffleCards(cardsArray) {
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardsArray[randIndex].style.order = i;
            cardsArray[i].style.order = randIndex;
        }
    }

    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }

    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }


    nextLevel() {
        if (this.currentLevel === 1) {
            document.getElementById('level-1').style.display = 'none';
            document.getElementById('level-2').style.display = 'grid';
            this.currentLevel = 2;
            this.currentLevelCardsArray = this.cardsArray2; // Cambia a las cartas del segundo nivel
            this.timeRemaining = totalTime;

            

            this.startGame();
        }
    }

    /* */
    resetGame() {

            
            this.countdown = null;
            this.currentLevel = 1;
            this.currentLevelCardsArray = this.cardsArray;
            document.getElementById('level-1').style.display = 'grid'; //le quita el none y le pone el grid
            document.getElementById('level-2').style.display = 'none'; //le quita el grid y le pone el none 
            document.getElementById('game-over-text').classList.remove('visible');
            document.getElementById('victory-text').classList.remove('visible');
            document.getElementById('titulo').classList.add('visible');
           this.timeRemaining = totalTime;
      

            this.startGame();
            
        }

    
    
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.querySelectorAll('#level-1 .card'));
    let cards2 = Array.from(document.querySelectorAll('#level-2 .card'));
    let game = new MixOrMatch(30, cards, cards2);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.concat(cards2).forEach(card => {   /*voltea las cartas cards novel 1 y cards2 nivel 2 */
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });

    
}
