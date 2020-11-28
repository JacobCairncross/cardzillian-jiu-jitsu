class Card {
    constructor(obj, onPlay) {
        if (!obj && !onPlay) {
            this.type = null;
            this.value = null;
            this.onPlay = function() {};
        } else {
            this.type = obj.type;
            this.value = obj.value;       
            this.onPlay = onPlay;
        }
    }

    render(container) {
        const card = document.createElement('div');

        if (this.type != null && this.value != null) {
            card.setAttribute('class', 'card');
            card.innerText = 'Type: ' + this.type + '; Value: ' + this.value;
            card.addEventListener('click', this.onPlay);
        } else {
            card.setAttribute('class', 'card other');
        }

        this.elem = card;
        container.appendChild(card);
    }

    setStaged() {
        this.elem.classList.add('staged');
    }
}

export default Card;