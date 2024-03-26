let games = document.querySelector('.games');
let container = document.querySelector('.container');
let closeContainer = document.querySelector('.close-container');
games.onclick = function() {
    container.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
}

closeContainer.onclick = function() {
    container.style.clipPath = 'polygon(0 0, 0 0, 0 0, 0 0)'
}