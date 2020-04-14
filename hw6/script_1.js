// // - создать массив с 20 числами.

let arrRandomInt = [Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000),
    Math.ceil(Math.random() * 1000)
]
// // -- при помощи метода sort отсортировать массив.
console.log(arrRandomInt);
arrRandomInt.sort();
console.log(arrRandomInt);

// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let arr2 = arrRandomInt.sort((a, b) => b - a)
console.log(arr2);

// // -- при помощи filter получить числа кратные 3
let arr3 = arrRandomInt.filter((u) => u % 3 === 0);
console.log(arr3);

// // -- при помощи filter получить числа кратные 10
let arr4 = arrRandomInt.filter((u) => u % 10 === 0);
console.log(arr4);

// // -- перебрать (проитерировать) массив при помощи foreach()
arrRandomInt.forEach((value) => console.log(value));

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let arr5 = arrRandomInt.map((value) => value * 10);
console.log(arr5);

// // - создать массив со словами на 15-20 элементов.
arrSomeStr = ["Степлер", "суб", "Чашка", "нед", "вівт", "Зошит", "топ", "USB-hub", "Біндер", "test"];
console.log(arrSomeStr);
// // -- отсортировать его по алфавиту в восходящем порядке.
let arr6 = arrSomeStr.sort((a, b) => {
    if (a < b) {
        return -1;
    } else {
        return 1;
    }
});
console.log(arr6);
// // -- отсортировать его по алфавиту  в нисходящем порядке.
let arr7 = arrSomeStr.sort((a, b) => {
    console.log(a, b);
    if (a > b) {
        return 1
    } else {
        return -1
    }
});
console.log(arr7);
// // -- отфильтровать слова длиной менее 4х символов
let arr8 = arrSomeStr.filter((value) => value.length < 4)
console.log(arr8)
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком
// // "!" в конце
let arr9 = arrSomeStr.map(value => value += '!');
console.log(arr9);

// // Все робити через функції масивів (foreach, map ...тд)
// // Дан масив :
let users = [

    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// console.log(users);
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let arr10 = JSON.parse(JSON.stringify(users));
arr10.sort((a, b) => b.age - a.age);
console.log(arr10);

let arr11 = JSON.parse(JSON.stringify(users));
arr11.sort((a, b) => a.age - b.age);
console.log(arr11);

// // - відсортувати його за кількістю знаків в імені (зростання, а потім окремо спадання)
let arr12 = JSON.parse(JSON.stringify(users));
arr12.sort((a, b) => {
    if (a.name.length > b.name.length) {
        return 1;
    } else {
        return -1;
    }
});
console.log(arr12);
// --------------------------------------------------------------------------------------------------------------------
let arr13 = [];

function copyUsers(arrOrig, copyArr) {
    function obj(user, innerCopy, copyArr) {
        for (const key in user) {
            innerCopy[key] = user[key]
        }
        console.log(innerCopy)
        copyArr.push(innerCopy);
    }

    function arr(arrOrig, copyArr) {
        for (const element of arrOrig) {
            if (typeof element === 'object' && !Array.isArray(element)) {
                let innerObj = {};
                obj(element, innerObj, copyArr);
            }
        }
    }

    arr(arrOrig, copyArr);
}

copyUsers(users, arr13);
arr13.sort((a, b) => {
    if (a.name.length < b.name.length) {
        return 1;
    } else {
        return -1;
    }
});
console.log(arr13);

// // // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // // (по якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// // // (первинний масив залишиться без змін);
let arr14 = JSON.parse(JSON.stringify(users));
arr14.map((value, i) => {
    value.id = Math.ceil(Math.random() * 10)
});

console.log(users);
console.log(arr14);

// // // - відсортувати його за індентифікатором
arr14.sort((a, b,) => {
    return b.id - a.id;
});
console.log(arr14);

// // // -- наисать функцию калькулятора с 2мя числами и колбеком
function calc(someA, someB, mathOperation) {
    return mathOperation(someA, someB);
}

const result = calc(5, 3, function (x, y) {
        let res = x + y;
        return res;
    }
);
console.log(result);


// // // -- наисать функцию калькулятора с 3мя числами и колбеком
function calcFor3Number(a1, a2, a3, someAction) {
    return someAction(a1, a2, a3);
}

const m = calcFor3Number(30, 30, 3, function (x, y, z) {
    return (z + y) / z;
});
console.log(m);

// // // =============================================
// // // =============================================
// // // =============КЛАССНАЯ РАБОТА=================
// // // =============================================
// // // =============================================


let cars = [{
    producer: "subaru",
    model: "wrx",
    year: 2010,
    color: "blue",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 400
}, {
    producer: "subaru",
    model: "legacy",
    year: 2007,
    color: "silver",
    type: "sedan",
    engine: "ez30",
    volume: 3,
    power: 250
}, {
    producer: "subaru",
    model: "tribeca",
    year: 2011,
    color: "white",
    type: "jeep",
    engine: "ej20",
    volume: 2,
    power: 300
}, {
    producer: "subaru",
    model: "leone",
    year: 1998,
    color: "yellow",
    type: "sedan",
    engine: "ez20x",
    volume: 2,
    power: 140
}, {
    producer: "subaru",
    model: "impreza",
    year: 2014,
    color: "red",
    type: "sedan",
    engine: "ej204x",
    volume: 2,
    power: 200
}, {
    producer: "subaru",
    model: "outback",
    year: 2014,
    color: "red",
    type: "hachback",
    engine: "ej204",
    volume: 2,
    power: 165
}, {
    producer: "bmw",
    model: "115",
    year: 2013,
    color: "red",
    type: "hachback",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "315",
    year: 2010,
    color: "white",
    type: "sedan",
    engine: "f15",
    volume: 1.5,
    power: 120
}, {
    producer: "bmw",
    model: "650",
    year: 2009,
    color: "black",
    type: "coupe",
    engine: "f60",
    volume: 6,
    power: 350
}, {
    producer: "bmw",
    model: "320",
    year: 2012,
    color: "red",
    type: "sedan",
    engine: "f20",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e200",
    year: 1990,
    color: "silver",
    type: "sedan",
    engine: "eng200",
    volume: 2,
    power: 180
}, {
    producer: "mercedes",
    model: "e63",
    year: 2017,
    color: "yellow",
    type: "sedan",
    engine: "amg63",
    volume: 3,
    power: 400
}, {
    producer: "mercedes",
    model: "c250",
    year: 2017,
    color: "red",
    type: "sedan",
    engine: "eng25",
    volume: 2.5,
    power: 230
}];
console.log(cars);

// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів

let someCars_1 = cars.filter(value => value.volume > 3);
console.log('двигун більше 3х літрів', someCars_1);

// // - двигун = 2л
let someCars_2 = cars.filter(value => value.volume === 2);
console.log('двигун = 2л', someCars_2);

// // - виробник мерс
let someCars_3 = cars.filter(value => value.producer === 'mercedes');
console.log('виробник мерс', someCars_3);

// // - двигун більше 3х літрів + виробник мерседес
let someCars_4 = cars.filter(value => value.volume > 3 && value.producer === 'mercedes');
console.log('двигун більше 3х літрів + виробник мерседес', someCars_4);

// // - двигун більше 3х літрів + виробник субару
let someCars_5 = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
console.log('двигун більше 3х літрів + виробник субару', someCars_5);

// // - сили більше ніж 300
let someCars_6 = cars.filter(value => value.power > 300);
console.log('сили більше ніж 300', someCars_6);

// // - сили більше ніж 300 + виробник субару
let someCars_7 = cars.filter(value => value.power > 300 && value.producer === 'subaru');
console.log('сили більше ніж 300 + виробник субару', someCars_7);

// // - мотор серіі ej
let someCars_8 = cars.filter(value => value.engine.includes('ej'));
console.log('мотор серіі ej', someCars_8);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
let someCars_9 = cars.filter(value => value.power > 300 && value.engine.includes('ej'));
console.log('сили більше ніж 300 + виробник субару + мотор серіі ej', someCars_9);

// // - двигун меньше 3х літрів + виробник мерседес
let someCars_10 = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
console.log('двигун меньше 3х літрів + виробник мерседес', someCars_10);

// // - двигун більше 2л + сили більше 250
let someCars_11 = cars.filter(value => value.volume > 2 && value.power > 250);
console.log('двигун більше 2л + сили більше 250', someCars_11);

// // - сили більше 250  + виробник бмв
let someCars_12 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
console.log('сили більше 250  + виробник бмв', someCars_12);


// // - взять слдующий массив
let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 16}
    },
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 121}
    },
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 115}
    },
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Lviv', street: 'Shevchenko', number: 22}
    }, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {

        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenko', number: 12}
    },
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Lviv', street: 'Shevchenkoz', number: 121}
    }
];

// // -- отсортировать его по id пользователей
let byId = JSON.parse(JSON.stringify(usersWithAddress));
byId.sort((a, b) => a.id - b.id);
console.log('отсортировать его по id пользователей', byId);

// // -- отсортировать его по id пользователей в обратном опрядке
let byIdFromEnd = JSON.parse(JSON.stringify(usersWithAddress));
byIdFromEnd.sort((a, b) => b.id - a.id);
console.log('отсортировать его по id пользователей в обратном опрядке', byIdFromEnd);

// // -- отсортировать его по возрасту пользователей
let byAgeUsers = JSON.parse(JSON.stringify(usersWithAddress));
byAgeUsers.sort((a, b) => a.age - b.age);
console.log('отсортировать его по возрасту пользователей', byAgeUsers);

// // -- отсортировать его по возрасту пользователей в обратном порядке
let byAgeUsersFromEnd = JSON.parse(JSON.stringify(usersWithAddress));
byAgeUsersFromEnd.sort((a, b) => b.age - a.age);
console.log('отсортировать его по возрасту пользователей в обратном порядке', byAgeUsersFromEnd);

// // -- отсортировать его по имени пользователей
let byNameUsers = JSON.parse(JSON.stringify(usersWithAddress));
byNameUsers.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else {
        return -1;
    }
});
console.log('отсортировать его по имени пользователей', byNameUsers)

// // -- отсортировать его по имени пользователей в обратном порядке
let byNameFromEnd = JSON.parse(JSON.stringify(usersWithAddress));
byNameFromEnd.sort((a, b) => {
    if (a.name < b.name) {
        return 1
    } else {
        return -1;
    }
});
console.log('отсортировать его по имени пользователей в обратном порядке', byNameFromEnd);

// // -- отсортировать его по названию улицы  в алфавитном порядке
let byStreetName = JSON.parse(JSON.stringify(usersWithAddress));
byStreetName.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return -1;
    } else {
        return 1
    }
});
console.log('отсортировать его по названию улицы  в алфавитном порядке', byStreetName);

// // -- отсортировать его по номеру дома по возрастанию;
let byNumberHouse = JSON.parse(JSON.stringify(usersWithAddress));
byNumberHouse.sort((a, b) => a.address.number - b.address.number);
console.log('отсортировать его по номеру дома по возрастанию', byNumberHouse);


// -- отфильтровать (оставить) тех кто младше 30
let users1 = usersWithAddress.filter(value => value.age < 30);
console.log('отфильтровать (оставить) тех кто младше 30', users1);

// // -- отфильтровать (оставить) тех у кого отрицательный статус
let users2 = usersWithAddress.filter(value => value.status === false)
console.log('отфильтровать (оставить) тех у кого отрицательный статус', users2);

// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let user3 = usersWithAddress.filter(user => user.status === false && user.age < 30);
console.log('отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет', user3);

// // -- отфильтровать (оставить) тех у кого номер дома четный
let users4 = usersWithAddress.filter(user => user.address.number % 2 === 0);
console.log('отфильтровать (оставить) тех у кого номер дома четный', users4);

// // ===========================
// // ======ДОПОЛНИТЕЛЬНО========
// // ===========================


// // Створити обєкт автомобіля з полями:
// //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// //     Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.

let carFord = {
    model: 'Fiesta ST',
    power: 200,
    price: 25000,
    yearOfProduction: 2019,
    price: 15000,
    owner: {
        name: 'Some Name 1',
        age: 23,
        driveExperience: 2
    }
}

let carSubaru = {
    model: "Impreza WRX",
    power: 260,
    price: 15000,
    yearOfProduction: 2013,
    price: 10000,
    owner: {
        name: 'Some Name 2',
        age: 38,
        driveExperience: 7,
    }
}

let carZAZ = {
    model: 'Forza',
    power: 150,
    yearOfProduction: 2015,
    price: 5000,
    owner: {
        name: 'Some Name3 ',
        age: 28,
        driveExperience: 10
    }
}

let carCherry = {
    model: 'a13',
    power: 120,
    yearOfProduction: 2016,
    price: 7000,
    owner: {
        name: 'Some Name 4',
        age: 26,
        driveExperience: 1
    },
}

let carPeugeot = {
    model: 308,
    power: 110,
    yearOfProduction: 2015,
    price: 8000,
    owner: {
        name: 'Some Name 5',
        age: 35,
        driveExperience: 2
    }
}

let carRenault = {
    model: 'Logan',
    power: 90,
    yearOfProduction: 2017,
    price: 8000,
    owner: {
        name: 'Some Name 6',
        age: 34,
        driveExperience: 3
    }
}

let carVolkswagen = {
    model: 'Jetta',
    power: 150,
    yearOfProduction: 2010,
    price: 11000,
    owner: {
        name: 'Some Name 7',
        age: 19,
        driveExperience: 0.6
    }
}


// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
// // (переприсвоєння змінної потужності).
// carSubaru.power += carSubaru.power * 0.1;
// carVolkswagen.power += carSubaru.power * 0.1;
// carZAZ.power += carZAZ.power * 0.1;
// carPeugeot += carPeugeot.power * 0.1;
// carRenault += carRenault.power * 0.1;
// carCherry += carCherry.power * 0.1;
// carFord += carFord.power * 0.1;
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// carFord.owner.name = 'man 1';
// carCherry.owner.name = 'women 1';
// carRenault.owner.name = 'man 2';
// carZAZ.owner.name = 'man 3';
// carSubaru.owner.name = 'women 2';
// carVolkswagen.owner.name = 'women 3';
// carPeugeot.owner.name = 'woman 4';


// // Для початку вкладіть всі наші створені автомобілі в масив cars.
let arrCars = [];
arrCars.push(carCherry, carFord, carPeugeot, carRenault, carZAZ, carVolkswagen, carSubaru);
console.log('Original array',arrCars);

// //  Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
// // та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// arrCars.map((car, i) => {
//     if (i > 0 && i % 2 !== 0) {
//         car.power += car.power * 0.1;
//         car.pr+=ca
//     }
// });

console.log(arrCars.length)
for (let i = 1; i < 7; i += 2) {
    arrCars[i].power += arrCars[i].power * 0.1;
    arrCars[i].price += arrCars[i].price * 0.05;
}
console.log(arrCars);

// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// // але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// // що збільшить йому досвід на 1 рік.
for (let i = 0; i < arrCars.length; i++) {
    if (arrCars[i].owner.driveExperience < 5 && arrCars[i].owner.age > 25) {
        arrCars[i].owner.driveExperience += 1;
        console.log(arrCars[i].owner)
    }
}


// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let priceCars = 0;
for (let i = 0; i < arrCars.length; i++) {
    priceCars += arrCars[i].price;
    console.log(priceCars);
}

// // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший
// // и наибольший индекс заданного элемента.
// //     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
// // Размер массива не более 10 элементов.
// // Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве,
// // выведите -1.
// // Пример:
// // Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
console.log(arr);

// function someNumbers(arr) {
//     let someValue = prompt('Введіть число');
//     let minIndex;
//     let maxIndex;
//     let currentIndex;
//     let someTimeArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (parseInt(someValue) === arr[i]) {
//             someTimeArr.push(i);
//         } else if (i === arr.length - 1 && someTimeArr.length >= 1) {
//             minIndex = someTimeArr[0];
//             maxIndex = someTimeArr[someTimeArr.length - 1];
//             console.log(`MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`);
//         } else if ( someTimeArr.length === 1) {
//             currentIndex = someTimeArr[0];
//             console.log(`CurrentIndex = ${currentIndex}`)
//             return currentIndex;
//         }
//     }
//     if (someTimeArr.length===0){
//         console.log(-1)
//     }
//
// }
//
// someNumbers(arr);

let inputValue = prompt('Введіть число ... ')

function showIndexValue(arr, value) {
    let indexMin = null;
    let indexMax = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === parseInt(value)) {
            if (!indexMin) indexMin = i;
            indexMax = i;
        }
    }

    // indexMin === 0 || indexMin > 0
    indexMin !== null
        ? console.log(`indexMin = ${indexMin}, indexMax = ${indexMax}`)
        : console.log(-1);
}

showIndexValue(arr, inputValue);


