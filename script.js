let dishName;
let dishPrice=0;
let drinkName;
let drinkPrice=0;
let dessertName;
let dessertPrice=0;

function selectDish(classePrato) {
    const selected = document.querySelector(".dish .selected-option");
    if(selected !== null) {
        selected.classList.remove("selected-option");
    }

    const option = document.querySelector("." + classePrato);
    option.classList.add("selected-option");
    // dishName = option.option__itemName.innerHTML;
    // dishPrice = option.option__itemPrice.innerHTML;
}

function selectDrink(classeBebida) {
    const selected = document.querySelector(".drink .selected-option");
    if(selected !== null) {
        selected.classList.remove("selected-option");
    }

    const option = document.querySelector("." + classeBebida);
    option.classList.add("selected-option");
    // drinkName = option.option__itemName.innerHTML;
    // drinkPrice = option.option__itemPrice.innerHTML;
}

function selectDessert(classeSobremesa) {
    const selected = document.querySelector(".dessert .selected-option");
    if(selected !== null) {
        selected.classList.remove("selected-option");
    }

    const option = document.querySelector("." + classeSobremesa);
    option.classList.add("selected-option");
    // dessertName = option.option__itemName.innerHTML;
    // dessertPrice = option.option__itemPrice.innerHTML;
}


function allChosen(){
    if(true){
    // if(dishName!==null && drinkName!==null && dessertName!==null){
        document.querySelector("button>p").innerHTML("Fechar pedido");
    }
}
allChosen()