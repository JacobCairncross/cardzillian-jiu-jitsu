function addCard(element, power) {
    const cardHolder = document.getElementById("card-holder");

    cardHolder.innerHTML += '<div class="card" onclick="removeCard(this)">Element: '+element+ 'Power: '+power+' </div>';
}

function removeCard(card) {
    card.remove();
}

window.addCard = addCard;
window.removeCard = removeCard;