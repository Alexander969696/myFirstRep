'use strict'


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, сложные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', 15000);
        } while (!appData.isNumber(appData.screenPrice) || appData.screenPrice[0] === ' ' || appData.screenPrice.slice(-1) === ' ')

        appData.adaptive = confirm('Добавить ли адаптив на сайте?');
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getTitle: function (title) {
        if (title.length == 0) return 'Вы не ввели название проекта';
        title = title.trim();
        title = title[0].toUpperCase() + title.slice(1).toLowerCase();

        return title
    },

    getAllServicePrice: function () {
        let sum = 0;
        let price;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительной тип услуги нужен?', 'Флекс');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительной тип услуги нужен?', 'Грид');
            }

            do {
                price = prompt('Цена данной услуги?');
            } while (!appData.isNumber(price) || price[0] === ' ' || price.slice(-1) === ' ')
            sum += +price;
        }
        return sum;
    },

    getFullPrice: function (screenPrice, allServicePrices) {
        return +screenPrice + allServicePrices;
    },

    getServicePercentPrice: function (fullPrice, rollback) {
        return fullPrice - (fullPrice * (rollback / 100));
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
        console.log(appData.title);
        console.log(appData.screenPrice);
        console.log(appData.allServicePrices);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.getRollbackMessage(appData.fullPrice));

        for (let key in appData) {
            console.log(key + ': ' + appData[key]);
        }
    },

    start: function () {
        appData.asking();
        appData.title = appData.getTitle(appData.title);
        appData.allServicePrices = appData.getAllServicePrice();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrice(appData.fullPrice, appData.rollback);

        appData.logger();
    }
}

appData.start();