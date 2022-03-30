'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Добавить ли адаптив на сайте?');
let rollback = 10;
let service1 = prompt('Какой дополнительной тип услуги нужен?');
let servicePrice1 = prompt('Цена данной услуги?');
let service2 = prompt('Какой дополнительной тип услуги нужен?');
let servicePrice2 = prompt('Цена данной услуги?');

let allServicePrices, fullPrice, servicePercentPrice;


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

const getAllServicePrice = function (servicePrice1, servicePrice2) {
    return +servicePrice1 + +servicePrice2;
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


allServicePrices = getAllServicePrice(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrice(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);