let total = document.querySelector('#total');
let quantity = document.querySelector('#quantity');
let h2 = document.querySelector('h2');

function getPrice(event) {
    total.value = 'P' + (event.target.value * 375);
}

quantity.addEventListener('click',getPrice);