// Div внутри корзины, в котором добавляем товар
const cartWrapper = document.querySelector('.cart-wrapper');



// Отслеживаем клик на странице
window.addEventListener('click', function(event){

    // Проверяем что клик был совершон по кнопке "Добавить в карзину"
    if(event.target.hasAttribute('data-cart')){// Метод hasAttribute() проверяет есть ли такой аттрибут в данном обекте
        
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

    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)// с помощю insertAdjacentElement добавляем товар в корзину
    }
})