let dishName;
let drinkName;
let dessertName;
let dishPrice=0;
let drinkPrice=0;
let dessertPrice=0;
let total=0;

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
    total = dishPrice + drinkPrice + dessertPrice;
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
    total = dishPrice + drinkPrice + dessertPrice;
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
    total = dishPrice + drinkPrice + dessertPrice;
}

function closeOrder() {
    if(dishPrice>0 && drinkPrice>0 && dessertPrice>0){
        let botao = document.querySelector(".closeOrder");
        botao.style.backgroundColor = '#32B72F';
        let textoBotao = document.querySelectorAll(".closeOrder p");
        textoBotao[0].classList.add("hidden");
        textoBotao[1].classList.remove("hidden");
    }
}

function goToConfirmationScreen() {
    if(dishPrice==0 | drinkPrice==0 | dessertPrice==0){
    } else {
        let telaConfirmacao = document.querySelector(".confirmationScreen");
        telaConfirmacao.classList.remove("hidden");
        document.querySelector(".confirmationScreen .chosenOptionNames .dish").innerHTML = dishName;
        document.querySelector(".confirmationScreen .chosenOptionPrices .dish").innerHTML = String(dishPrice.toFixed(2)).replace('.',',');
        document.querySelector(".confirmationScreen .chosenOptionNames .drink").innerHTML = drinkName;
        document.querySelector(".confirmationScreen .chosenOptionPrices .drink ").innerHTML = String(drinkPrice.toFixed(2)).replace('.',',');
        document.querySelector(".confirmationScreen .chosenOptionNames .dessert").innerHTML = dessertName;
        document.querySelector(".confirmationScreen .chosenOptionPrices .dessert").innerHTML = String(dessertPrice.toFixed(2)).replace('.',',');
        document.querySelector(".confirmationScreen .priceTotal").innerHTML = "R$ " + String(total.toFixed(2)).replace('.',',');
    }
}

function cancelOrder() {
    let telaConfirmacao = document.querySelector(".confirmationScreen");
    telaConfirmacao.classList.add("hidden");
}

function goToWhatsApp() {
    let userName = prompt("Qual é o seu nome?")
    let userNumber = prompt("Qual é o número do seu telefone? (XX) 9XXXX-XXXX").replace('(','').replace(')','').replace('-','').replace(' ','')
    let userAddress = prompt("Qual é o seu endereço?")
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${dishName}\n- Bebida: ${drinkName}\n- Sobremesa: ${dessertName}\nTotal: R$ ${String(total.toFixed(2)).replace('.',',')}\n\nNome: ${userName}\nEndereço: ${userAddress}`;
    // window.open(`https://wa.me/5512981238440?text=${encodeURIComponent(mensagem)}`);
    window.open(`https://wa.me/55${userNumber}?text=${encodeURIComponent(mensagem)}`);
}