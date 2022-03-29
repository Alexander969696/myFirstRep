'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Добавить ли адаптив на сайте?');
let rollback = 32;

let service1 = prompt('Какой дополнительной тип услуги нужен?');
let servicePrice1 = prompt('Цена данной услуги?');
let service2 = prompt('Какой дополнительной тип услуги нужен?');
let servicePrice2 = prompt('Цена данной услуги?');
let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice*(rollback/100));

console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 29999) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 14999 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice == 0) {
    console.log('Стоимость должна быть больше 0');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
}











