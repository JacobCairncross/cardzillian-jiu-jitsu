const addCard = (element, power) => {
    const cardHolder = document.getElementById("card-holder");

    $('#card-holder').append('<div class="card" onclick="removeCard(this)">Element: '+element+ 'Power: '+power+' </div>');
}

const removeCard = (card) =>{
    card.remove();
}