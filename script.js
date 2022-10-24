
{

    const valueElement = document.querySelector(".js-value");
    const formElement = document.querySelector(".js-form");
    const exchangeResultElement = document.querySelector(".js-exchangeResult");
    const exchangeElement = document.querySelector(".js-exchange");
    
    document.addEventListener("submit", (event) => {
        event.preventDefault();
    
    
        const value = valueElement.value;
        const exchange = exchangeElement.value;
    
        let exchangeResult = value / exchange;
    
        exchangeResultElement.innerText = exchangeResult.toFixed(2);
    });
}