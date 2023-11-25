function calcCartPrice() {
    // const cartWrapper = document.querySelector('.cart-wrapper');

    const cartItems = document.querySelectorAll('.cart-item');

    const totalPriceEl = document.querySelector('.total-price');

    let totalPrice = 0

    cartItems.forEach(function(item){

        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')
        const curreentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
        totalPrice += curreentPrice
      
    })

    // Отображаем цену на странице
    totalPriceEl.innerHTML = totalPrice
    console.log(totalPrice);
    console.log(totalPriceEl);
}