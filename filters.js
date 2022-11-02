let filters = document.querySelectorAll('.filter');
states = [filters.length];
for (let i = 0; i < states.length; i++) {
    states[i] = false;
}

for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', event => {
        states[i] = !states[i];
        if (states[i]) {
            filters[i].style.backgroundColor = "white";
            filters[i].style.color = "black";
        } else {
            filters[i].style.backgroundColor = "dimgray";
            filters[i].style.color = "#e0e0e0";
        }
        filter();
    });
}


function filter() {
    let container = document.getElementsByClassName("container")[0];
    if (checkFalse()) {
        for (let i = 0; i < container.children.length; i++)
            container.children[i].style.display = "block";
    } else {
        let filterNames = [];
        for (let i = 0; i < states.length; i++) {
            if (states[i])
                filterNames.push(filters[i].innerHTML.toLowerCase());
        }
        for (let i = 0; i < container.children.length; i++) {
            if (filterNames.every(item => container.children[i].classList.contains(item)))
                container.children[i].style.display = "block";
            else
                container.children[i].style.display = "none";
        }
    }
}

document.addEventListener("seePhotos", function (e) {
    alert(filters.length);
    for (let j = 0; j < filters.length; j++) {
        if (filters[i].innerHTML === e.filterName)
            filters[i].click();
    }
});

function checkFalse() {
    for (let i = 0; i < states.length; i++)
        if (states[i])
            return false;
    return true;
}