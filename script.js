let title = 'Studio Omsk';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 3000;
let rollback = 55;
let fullPrice = 10000;
let adaptive = true;


console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));

console.log(screens.length);
console.log('Стоимость версти экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');

let screensArray = screens.toLowerCase();
screensArray = screensArray.split(', ');
console.log(screensArray);

let perRollback = fullPrice * (rollback / 100);
console.log(perRollback); 



