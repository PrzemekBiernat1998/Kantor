
let valueElement = document.querySelector(".js-value");
let formElement = document.querySelector(".js-form");
let exchangeResultElement = document.querySelector(".js-exchangeResult");
let exchangeElement = document.querySelector(".js-exchange");

document.addEventListener("submit", (event) => {
    event.preventDefault();


    let value = valueElement.value;
    let exchange = exchangeElement.value;

    let exchangeResult = value / exchange;

    exchangeResultElement.innerText = exchangeResult.toFixed(2);
});