let dishName;
let drinkName;
let dessertName;
let dishPrice=0;
let drinkPrice=0;
let dessertPrice=0;

function selectDish(classePrato) {
    const selected = document.querySelector(".dish .selected-option");
    if(selected !== null) {
        selected.classList.remove("selected-option");
    }

    const option = document.querySelector("." + classePrato);
    option.classList.add("selected-option");

    dishName = option.querySelector(".option__itemName").innerHTML;
    dishPrice = option.querySelector(".option__itemPrice").innerHTML;
    dishPrice = parseFloat(dishPrice.substr(2));
}

function selectDrink(classeBebida) {
    const selected = document.querySelector(".drink .selected-option");
    if(selected !== null) {
        selected.classList.remove("selected-option");
    }

    const option = document.querySelector("." + classeBebida);
    option.classList.add("selected-option");

    drinkName = option.querySelector(".option__itemName").innerHTML;
    drinkPrice = option.querySelector(".option__itemPrice").innerHTML;
    drinkPrice = parseFloat(drinkPrice.substr(2));
}

function selectDessert(classeSobremesa) {
    const selected = document.querySelector(".dessert .selected-option");
    if(selected !== null) {
        selected.classList.remove("selected-option");
    }

    const option = document.querySelector("." + classeSobremesa);
    option.classList.add("selected-option");

    dessertName = option.querySelector(".option__itemName").innerHTML;
    dessertPrice = option.querySelector(".option__itemPrice").innerHTML;
    dessertPrice = parseFloat(dessertPrice.substr(2));
}


// if(dishName!==null && drinkName!==null && dessertName!==null){
//     let botao = document.querySelector(".fecharPedido");
//     botao.innerHTML("Fechar pedido");
// }