'use strict'


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    asking: function () {
        appData.title = checkStr('Как называется ваш проект?');

        for (let i = 0; i < 2; i++) {
            let name = checkStr('Какие типы экранов нужно разработать?');
            let price = 0;

            do {
                price = checkNum('Сколько будет стоить данная работа?');
            } while (!isNumber(price) || price[0] === ' ' || price.slice(-1) === ' ');

            appData.screens.push({ id: i, name: name, price: price })
        }



        for (let i = 0; i < 2; i++) {
            let name = checkStr('Какой дополнительной тип услуги нужен?');
            let price = 0;

            do {
                price = checkNum('Цена данной услуги?');
            } while (!isNumber(price) || price[0] === ' ' || price.slice(-1) === ' ')

            appData.services[name] = +price;
        }

        appData.adaptive = confirm('Добавить ли адаптив на сайте?');
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getTitle: function (title) {
        if (title.length == 0) return 'Вы не ввели название проекта';
        title = title.trim();
        title = title[0].toUpperCase() + title.slice(1).toLowerCase();

        appData.title = title
    },

    getFullPrice: function (screenPrice, allServicePrices) {
        appData.fullPrice = +screenPrice + allServicePrices;
    },

    getServicePercentPrice: function (fullPrice, rollback) {
        appData.servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
    },

    getRollbackMessage: function (fullPrice) {
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
    },

    logger: function () {
        console.log("Заголовок: " + appData.title);
        console.log("Цена Верстки: " + appData.screenPrice);
        console.log("Цена доп.услуг: " + appData.allServicePrices);
        console.log("Общая цена: " + appData.fullPrice);
        console.log("Цена с вычетом %: " + appData.servicePercentPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));

        // for (let key in appData) {
        //     console.log(key + ': ' + appData[key]);
        // }
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getTitle(appData.title);
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrice(appData.fullPrice, appData.rollback);

        appData.logger();
    }
}



const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const checkStr = function (question) {
    let answer = '';

    do {
        answer = prompt(question);
    } while (isNumber(answer));

    return answer;
}

const checkNum = function (question) {
    let answer = '';

    do {
        answer = prompt(question);
    } while (!isNumber(answer));

    return answer;
}

appData.start();