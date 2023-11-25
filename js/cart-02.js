// Div внутри корзины, в котором добавляем товар
const cartWrapper = document.querySelector('.cart-wrapper');



// Отслеживаем клик на странице
window.addEventListener('click', function (event) {

    // Проверяем что клик был совершон по кнопке "Добавить в карзину"
    if (event.target.hasAttribute('data-cart')) { // Метод hasAttribute() проверяет есть ли такой аттрибут в данном обекте

        // Находим карточку с товаром, внутри которой был совершон клик
        const card = event.target.closest('.card');

        // Собираем данные с этого товара и записываем их в единый обьект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'), // getAttribute() вернет значение указанного аттрибута
            title: card.querySelector('.item-title').innerText,
            intemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        // Проверяем есть ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        


        // Если товар есть в карзине 
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]')
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
        } else {
            // Если товара нет в корзине 

            // Собранные данные подставим в шаблон для товара в корзине
            const cartItemHTML = `
                                    <div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.intemsInBox} / ${productInfo.weight}</div>

                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>

                                            </div>
                                            <!-- // cart-item__details -->

                                        </div>
                                    </div>
                                </div>
                                `
            // Отабразим товар в корзине 
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML) // с помощю insertAdjacentElement добавляем товар в корзину
        }

        // Сбрасываем счетчик на еденицу
        card.querySelector('[data-counter]').innerText = '1';

        // Отабражение статуса корзины пустая/не пустая
        toggleFucncStatus()

        // Пересчет общей стоимости товаров в корзине
        calcCartPrice()
    }
})