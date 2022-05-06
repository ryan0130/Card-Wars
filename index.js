
class Card {
    constructor(values, suits, points) {
        this.values = values;
        this.suits = suits;
        this.points = points;
    }

    describe() {
        return `${this.values} of ${this.suits} Points: ${this.points}`;
    }
}

class Player {
    constructor(player, score) {
        this.player = player;
        this.score = score;
    }

    describe() {
        return `Player ${this.player} has a score of ${this.score}`;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.player1Deck = [];
        this.player2Deck = [];
    }

    createDeck() {
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(new Card(values[j], suits[i], points[j]));
            }
        }
    }

    shuffle() {
        for (let k = 0; k < 1000; k++) {
            let location1 = Math.floor(Math.random() * this.deck.length);
            let location2 = Math.floor(Math.random() * this.deck.length);
            let tmp = this.deck[location1];

            this.deck[location1] = this.deck[location2];
            this.deck[location2] = tmp;
        }
    }

    splitDeck() {
        for (let l = 0; l < 52; l++) {
            if(l % 2 === 0) {
                this.player1Deck.push(this.deck[l]);
            } else {
                this.player2Deck.push(this.deck[l]);
            }
        }
    }

    startWar() {
        let logScore = [];
        let player1score = 0;
        let player2score = 0;
        for (let i = 0; i < 26; i++) {
            if (this.player1Deck[i].points > this.player2Deck[i].points) {
                logScore.push(`Game ${i+1}: ${this.player1Deck[i].points} beats ${this.player2Deck[i].points}: Player 1 wins`);
                player1score++;
            } else if (this.player2Deck[i].points > this.player1Deck[i].points) {
                logScore.push(`Game ${i+1}: ${this.player2Deck[i].points} beats ${this.player1Deck[i].points}: Player 2 wins`);
                player2score++;
            } else {
                logScore.push(`Game ${i+1}: ${this.player1Deck[i].points} is tied to ${this.player2Deck[i].points}: Tied`);
            }
        }
        console.log(logScore);

        let player1 = new Player(1, player1score);
        let player2 = new Player(2, player2score);

        if (player1.score > player2.score) {
            alert(`${player1.describe()}\n${player2.describe()}\n\nPlayer 1 Wins!!`)
        } else if (player2.score > player1.score) {
            alert(`${player1.describe()}\n${player2.describe()}\n\nPlayer 2 Wins!!`)
        } else {
            alert(`${player1.describe()}\n${player2.describe()}\n\nGame is Tied`)
        }
    }
}

let deck1 = new Deck;
deck1.createDeck();
deck1.shuffle();
deck1.splitDeck();
deck1.startWar();
