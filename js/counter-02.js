// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // Обявляем переменную для счетчика
    let counter
    calcCartPrice()
    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper')

        // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }





    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
    if (event.target.dataset.action === 'plus') { // dataset.action возвращает значение дата отрибута
        counter.innerText = ++counter.innerText
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
    if (event.target.dataset.action === 'minus') {



        // Проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {

            counter.innerText = --counter.innerText
        }
        // Проверка на товар который находится на корзине 
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove()


            // Отабражение статуса корзины пустая/не пустая
            toggleFucncStatus()

            // Пересчет общей стоимости товаров в корзине
            calcCartPrice()
        }
    }


    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчет общей стоимости товаров в корзине
        calcCartPrice()
    }
})