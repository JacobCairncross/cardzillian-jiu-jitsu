class Card {
    constructor(obj, onPlay) {
        if (!obj && !onPlay) {
            this.type = null;
            this.value = null;
            this.other = true;
            this.onPlay = function() {};
        } else {
            this.type = obj.type;
            this.value = obj.value;       
            this.onPlay = onPlay;
        }
    }

    render(container) {
        const card = document.createElement('div');

        if (!this.other) {
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

        const placeholder = this.other ? document.getElementById('placeholder-other') : document.getElementById('placeholder-self');

        const startRect = this.elem.getBoundingClientRect();
        const endRect = placeholder.getBoundingClientRect();

        this.elem.style.transform = 'translateX('
            + (endRect.left - startRect.left)
            + 'px) translateY('
            + (endRect.top - startRect.top)
            + 'px) scale(1.2)';
    }
}

export default Card;