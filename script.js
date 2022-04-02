'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice; 
let service1;
let service2;


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', 15000);
    } while (!isNumber(screenPrice) || screenPrice[0] === ' ' || screenPrice.slice(-1) === ' ')

    adaptive = confirm('Добавить ли адаптив на сайте?');
}

const getAllServicePrice = function () {
    let sum = 0;
    let price;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительной тип услуги нужен?', 'Флекс');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительной тип услуги нужен?', 'Грид');
        }

        do {
            price = prompt('Цена данной услуги?');
        } while (!isNumber(price) || price[0] === ' ' || price.slice(-1) === ' ')
        sum += +price;
    }
    return sum;
}

const showTypeOf = function (variable) {
    console.log(variable, typeof(variable));
}

const getRollbackMessage = function (fullPrice) {
    if (fullPrice > 29999) {
        return 'Даем скидку в 10%';
    } else if (fullPrice > 14999 && fullPrice < 30000) {
        return 'Даем скидку в 5%';
    } else if (fullPrice < 15000 && fullPrice > 0) {
        return 'Скидка не предусмотрена';
    } else if (fullPrice == 0) {
        return 'Стоимость должна быть больше 0';
    } else if (fullPrice < 0) {
        return 'Что-то пошло не так';
    }
}


function getFullPrice (screenPrice, allServicePrices) {
    return +screenPrice + allServicePrices;
}

const getTitle = function (title) {
    if (title.length == 0) return 'Вы не ввели название проекта';
    title = title.trim();
    title = title[0].toUpperCase() + title.slice(1).toLowerCase();

    return title
}
const getServicePercentPrice = function (fullPrice, rollback) {
    return fullPrice - (fullPrice*(rollback/100));
}

asking();
allServicePrices = getAllServicePrice();
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrice(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
console.log(allServicePrices);