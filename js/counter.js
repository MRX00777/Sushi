// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// событие на кнопку минус
btnMinus.addEventListener('click', function(){
    console.log('Minus')
    if(parseInt(counter.innerText) > 1) {  // parseInt() это метод пееводит число в кавычках на настоящую числу 
        counter.innerText = --counter.innerText
    }

})
// событие на кнопку плюс
btnPlus.addEventListener('click', function(){
    console.log('Plus')
    counter.innerText = ++counter.innerText
})