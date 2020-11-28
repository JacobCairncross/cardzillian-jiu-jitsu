import Card from './Card.js';

const NUM_CARDS = 7;

class Match {
    constructor(stage, room) {
        this.stage = stage;
        this.room = room;
        this.room.onStateChange(this.onStateChange);
        this.cards = [];
        this.otherCards = [];
        this.stagedCardIndex = null;
    }

    onStateChange(state) {
        
    }

    begin(cards) {
        const frag = document.createDocumentFragment();
        this.cards = cards.map((card, i) => new Card(card, this.playCard.bind(this, i)));
        this.cards.forEach((card) => {
            card.render(frag);
        });
        this.stage.querySelector('#card-holder').appendChild(frag);

        const otherFrag = document.createDocumentFragment();
        for (let i = 0; i < NUM_CARDS; i++) {
            const card = new Card();
            card.render(otherFrag);
            this.otherCards.push(card);
        }
        this.stage.querySelector('#other-card-holder').appendChild(otherFrag);
    }

    playCard(index) {
        if (this.stagedCardIndex !== null) {
            return;
        }

        this.stagedCardIndex = index;
        this.cards[index].setStaged();
    }

    playCardOther(index) {
        this.otherCards[index].setStaged();
    }
}

export default Match;