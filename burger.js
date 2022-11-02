let check = 0;

function openBurger() {
    let burger = document.getElementsByClassName('burger-buttons-container')[0];
    if (check % 2 === 0) {
        burger.style.display = "flex";
        burger.style.transitionDuration = "0.33s";
    } else {
        burger.style.display = "none";
        burger.style.transitionDuration = "0.33s";
    }
    check++;
}

