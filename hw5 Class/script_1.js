// // // - Створити функцію конструктор для об'єкту який описує теги
// // // Властивості
// // // -назва тегу
// // // - опис його дій
// // // - масив з атрибутами (2-3 атрибути максимум)
// // // Кожен атрибут описати як окремий який буде містити
// // // -назву атрибуту
// // // -опис дії атрибуту
// // // інформацію брати з htmlbook.ru
// // // Таким чином описати теги
// // // -a
// // // -div
// // // -h1
// // // -span
// // // -input
// // // -form
// // // -option
// // // -select
// // // Приклад результату
// // // {
// // //     titleOfTag: 'area',
// // //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// // //     attrs: [
// // //             {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// // //             {/*some props and values*/},
// // //             {/*...*/},
// // //             {/*...*/},
// // // ]
// // //
// // // }
// // // ==============================================


function HtmlTags(titleOfTag, actionOfTag, attributesOfTag) {
    this.nameTag = titleOfTag || ' null ';
    this.description = actionOfTag || ' null ';
    this.attributes = attributesOfTag || [];

}

const aTitle = '<a>';
const aAction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
const aAttributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
];
let a = new HtmlTags(aTitle, aAction, aAttributes);
console.log(a);


let divTitle = '<div>';
let divAction = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
let divAttributes = [
    {titleOfAttr: "align", actionOfAttr: "Задает выравнивание содержимого тега <div>"},
    {titleOfAttr: "title", actionOfAttr: "Добавляет всплывающую подсказку к содержимому."},
];
const div = new HtmlTags(divTitle, divAction, divAttributes);
console.log(div);


const h1Title = '<h1>';
const h1Action = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
const h1Attributes = [
    {titleOfAttr: "align", actionOfAttr: "Определяет выравнивание заголовка"},
    {titleOfAttr: "contenteditable", actionOfAttr: "Сообщает, что элемент доступен для редактирования пользователем."},
];
const h1 = new HtmlTags(h1Title, h1Action, h1Attributes);
console.log(h1);


const spanTitle = '<span>';
const spanAction = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
const spanAttributes = [
    {
        titleOfAttr: "contenteditable",
        actionOfAttr: "Сообщает, что элемент доступен для редактирования пользователем — можно удалять текст и вводить новый. Также работают стандартные команды вроде отмены, вставки текста из буфера и др."
    },
    {titleOfAttr: "contextmenu", actionOfAttr: "Устанавливает контекстное меню для элемента."}
];
const span = new HtmlTags(spanTitle, spanAction, spanAttributes);
console.log(span);


const inputTitle = '<input>';
const inputAction = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
const inputAttributes = [
    {
        titleOfAttr: "accept",
        actionOfAttr: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."
    },
    {
        titleOfAttr: "autocomplete", actionOfAttr: "Включает или отключает автозаполнение/"
    }
];
const input = new HtmlTags(inputTitle, inputAction, inputAttributes);
console.log(input);


const formTitle = '<form>';
const formAction = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
const formAttributes = [
    {
        titleOfAttr: "action", actionOfAttr: "Адрес программы или документа, который обрабатывает данные формы."

    },
    {
        titleOfAttr: "enctype", actionOfAttr: "Способ кодирования данных формы."
    }

];
const form = new HtmlTags(formTitle, formAction, formAttributes);
console.log(form);


const optionTile = '<option>';
const optionAction = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
const optionAttributes = [
    {titleOfAttr: "id", actionOfAttr: "Указывает имя стилевого идентификатора."},
    {titleOfAttr: "dir", actionOfAttr: "Задает направление и отображение текста — слева направо или справа налево."}
];

const option = new HtmlTags(optionTile, optionAction, optionAttributes);
console.log(option);


const selectTitle = '<select>';
const selectAction = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
const selectAttributes = [
    {titleOfAttr: "autofocus", actionOfAttr: "Устанавливает, что список получает фокус после загрузки страницы."},
    {titleOfAttr: "disabled", actionOfAttr: "Блокирует доступ и изменение элемента."}
];
const select = new HtmlTags(selectTitle, selectAction, selectAttributes);
console.log(select);


// // // ==============================================
// // // -  Створити класс  для об'єкту який описує теги
// // // Властивості
// // // -назва тегу
// // // - опис його дій
// // // - масив з атрибутами (2-3 атрибути максимум)
// // // Кожен атрибут описати як окремий який буде містити
// // // -назву атрибуту
// // // -опис дії атрибуту
// // // інформацію брати з htmlbook.ru
// // // Таким чином описати теги
// // // -a
// // // -div
// // // -h1
// // // -span
// // // -input
// // // -form
// // // -option
// // // -select
// // // Приклад результату
// // // {
// // //     titleOfTag: 'area',
// // //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// // //     attrs: [
// // //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// // //     {/*some props and values*/},
// // //     {/*...*/},
// // //     {/*...*/},
// // // ]
// // //
// // // }
// // // ==============================================


class Tag {
    constructor(nameT, actionT, attributesT) {
        this.titleOfTag = nameT;
        this.actionOfTag = actionT;
        this.attrinutesOfTag = attributesT;
    }
}

//------------------------------------------------
const a1 = new Tag(aTitle, aAction, aAttributes);
console.log(a1);
//------------------------------------------------

const div1 = new Tag(divTitle, divAction, divAttributes);
console.log(div1);
//------------------------------------------------

const h1N = new Tag(h1Title, h1Action, h1Attributes);
console.log(h1N);
//------------------------------------------------

const span1 = new Tag(spanTitle, spanAction, spanAttributes);
console.log(span1);
//------------------------------------------------
const input1 = new Tag(inputTitle, inputAction, inputAttributes);
console.log(input1);
//------------------------------------------------

const form1 = new Tag(formTitle, formAction, formAttributes);
console.log(form1);
//------------------------------------------------

const option1 = new Tag(optionTile, optionAction, optionAttributes);
console.log(option1);
//------------------------------------------------

const select1 = new Tag(selectTitle, selectAction, selectAttributes);
console.log(select1);


// // // ==============================================
// // // - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // // об'єм двигуна. додати в об'єкт функції:
// // // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // // -- info () - яка виводить всю інформацію про автомобіль
// // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// // // на значення newSpeed
// // // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// // //    і доавляет його
// // //    в поточний об'єкт car
// // // ==============================================

let car = {
    model: 'Mustang Shelby',
    manufacturer: 'Ford',
    yearOfProduction: 2019,
    maxSpeed: 289.6,
    volumeEngine: 5.2,
    drive: function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} km/h`);
    },
    info: function () {
        if (this.driver) {
            console.log(`------------------------------
        model: ${this.model},
        manufacturer: ${this.manufacturer},
        year of production: ${this.yearOfProduction},
        max speed: ${this.maxSpeed} km/h,
        volume engine: ${this.volumeEngine},
        driver: ${this.driver.name} ${this.driver.surname};
        ------------------------------------`);
        } else {
            console.log(`------------------------------
        model: ${this.model},
        manufacturer: ${this.manufacturer},
        year of production: ${this.yearOfProduction},
        max speed: ${this.maxSpeed},
        volume engine: ${this.volumeEngine},
        ------------------------------------`);
        }
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed += newSpeed;
    },
    changeYear: function (newValue) {
        this.yearOfProduction = newValue;
    },
    addDriver: function (driver) {
        this.driver = driver;
    }


};

car.drive();
car.info();
// const driver = {name: 'Some Name', surname: 'Some Surname'};
car.addDriver({name: 'Some-1', surname: 'Some-1'});
car.info();
console.log(car.driver.surname);
car.changeYear(2021);
car.info();
car.increaseMaxSpeed(30);
car.info();

// // // ==============================================
// // //    - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// // //    виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // // -- info () - яка виводить всю інформацію про автомобіль
// // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// // // поточний об'єкт car
// // // ==============================================

function NewCar(
    model,
    manufacturer,
    yearOfProduction,
    maxSpeed,
    volumeEngine) {
    this.model = model || 'null';
    this.manufacturer = manufacturer || 'null';
    this.yearOfProduction = yearOfProduction || 'null';
    this.maxSpeed = maxSpeed || 'null';
    this.volumeEngine = volumeEngine || 'null';
    this.addDriver = function (driver) {
        this.driver = driver;
    };
    this.changeYear = function (newValue) {
        this.yearOfProduction = newValue;
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    };
    this.info = function () {
        if (this.driver) {
            console.log(`----------------------------
                    model: ${this.model};
                    manufacturer: ${this.manufacturer};
                    year of Production: ${this.yearOfProduction};
                    max speed: ${this.maxSpeed} km/h;
                    volume engine: ${volumeEngine};
                    driver: ${this.driver.name} ${this.driver.surname};
                    ---------------------------------------`)
        } else {
            console.log(`-------------------------------
            model: ${this.model};
            manufacturer: ${this.manufacturer};
            year of Production: ${this.yearOfProduction};
            max speed: ${this.maxSpeed};
            volume engine: ${this.volumeEngine}
            -------------------------------------------`)
        }
    };
}

const newCar = new NewCar('VIDA', 'ZAZ', '2016', 160,
    1.5,);
newCar.info();
newCar.changeYear(2020);
newCar.info();
newCar.addDriver({name: 'Some-2', surname: 'Some-2'});
newCar.info();
newCar.increaseMaxSpeed(130);
newCar.info();


// // // ==============================================
// // //     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// // // рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // // -- info () - яка виводить всю інформацію про автомобіль
// // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет
// // //     його в поточний об'єкт car
// // // ==============================================


class Car2 {
    constructor(
        model,
        manufacturer,
        yearOfProduction,
        maxSpeed,
        volumeEngine
    ) {

        this.model = model || 'no info';
        this.manufacturer = manufacturer || 'no info';
        this.yearOfProduction = yearOfProduction || 'no info';
        this.maxSpeed = maxSpeed || ' no info';
        this.volumeEngine = volumeEngine || 'no info'
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);

    }

    addDriver(driver) {
        this.driver = driver
    }

    increaseMaxSpeed(bonusSpeed) {
        this.maxSpeed += bonusSpeed;
    }

    info() {
        if (this.driver) {
            console.log(`---------------------------------------
                         model: ${this.model};
                         manufacturer: ${this.manufacturer};
                         year of production: ${this.yearOfProduction};
                         max speed: ${this.maxSpeed},
                         volume engine: ${this.volumeEngine};
                         driver: ${this.driver.name} ${this.driver.surname}
                         -------------------------------------------------`);
        } else {
            console.log(`---------------------------------
                         model: ${this.model};
                         manufacturer: ${this.manufacturer};
                         year of production: ${this.yearOfProduction};
                         max speed: ${this.maxSpeed};
                         volume engine: ${this.volumeEngine};
                         ---------------------------------------------------`);
        }
    }
}


const someCar = new Car2(2101, 'VAZ', 1970, 140, 1.2);
someCar.info();
someCar.increaseMaxSpeed(30);
someCar.info();
someCar.addDriver({name: 'Some V', surname: 'Some K'});
someCar.info();


// // // ==============================================
// // // - створити класс попелюшка з полями ім'я, вік, розмір ноги
// // // --Створити 10 попелюшок , покласти їх в масив
// // // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// // // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// // // ==============================================

class Cinderella {
    constructor(
        name,
        age,
        footSize,
    ) {
        this.name = name || ' null ';
        this.age = age || 'null ';
        this.footSize = footSize || ' null ';
    }
}

const Cinderella1 = new Cinderella('Diana', 18, 46.6);
const Cinderella2 = new Cinderella('Mira', 19, 45.7);
const Cinderella3 = new Cinderella('Jane', 20, 39.5);
const Cinderella4 = new Cinderella('Lora', 25, 36.4);
const Cinderella5 = new Cinderella('Dolly', 50, 39.3);
const Cinderella6 = new Cinderella('Bally', 90, 39.1);
const Cinderella7 = new Cinderella('Sissy', 48, 41.2);
const Cinderella8 = new Cinderella('Vera', 120, 49);
const Cinderella9 = new Cinderella('Lolly', 20, 36.4);
const Cinderella10 = new Cinderella('Bibi', 24, 38.3);
let arrayCinder_s = [Cinderella1, Cinderella2, Cinderella3, Cinderella4,
    Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9,
    Cinderella10];

console.log(arrayCinder_s);


class Prince {
    cinderellaPrince;

    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }

    findCinderella(array) {
        let findCinderella = null;
        for (const cinderella of array) {
            if (cinderella.footSize === this.shoesSize) {
                findCinderella = cinderella;
            }
        }
        if (findCinderella) {
            console.log(`Принц ${prince.name}, знайшов  ${findCinderella.name},
            у якої розмір ${findCinderella.footSize}`)
        } else {
            console.log(`Принц ${prince.name}, якому ${this.age} років,
             крім туфлі з розміром ${this.shoesSize} нікого не знайшов ... `)
        }
    }
}

const prince = new Prince('Bobby', 50, 36.3);

prince.findCinderella(arrayCinder_s);


// // // ==============================================
// // // -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// // // --Створити 10 попелюшок , покласти їх в масив
// // // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку
// // // він знайшов, та функцію "пошук попелюшки"
// // // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// // //   ==============================================

let newCinderella1 = new CinderellaConstructor('P-1', 23, 39);
let newCinderella2 = new CinderellaConstructor('P-2', 21, 31);
let newCinderella3 = new CinderellaConstructor('P-3', 42, 32);
let newCinderella4 = new CinderellaConstructor('P-4', 34, 33);
let newCinderella5 = new CinderellaConstructor('P-5', 18, 34);
let newCinderella6 = new CinderellaConstructor('P-6', 19, 34);
let newCinderella7 = new CinderellaConstructor('P-7', 20, 36);
let newCinderella8 = new CinderellaConstructor('P-8', 21, 37);
let newCinderella9 = new CinderellaConstructor('P-9', 23, 39);
let newCinderella10 = new CinderellaConstructor('P-10', 24, 43);

let arrC2 = [newCinderella1, newCinderella2, newCinderella3, newCinderella4, newCinderella5,
    newCinderella6, newCinderella7, newCinderella8, newCinderella9, newCinderella10];


function CinderellaConstructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

function Prince_2(name, age, shoesSize) {
    this.name = name;
    this.age = age;
    this.shoesSize = shoesSize || 'null';
    this.findGirl = function (arrC2) {
        let find = undefined;
        console.log(find);
        find = arrC2.find(item => item.footSize === this.shoesSize);
        console.log(find);
        find
            ? console.log(`Принц знайшов ${find.name}`)
            : console.log(`Принц крім туфлі нікого не знайшов `);
    }
}


let princeConstructor = new Prince_2('Jorge', 30, 37);
princeConstructor.findGirl(arrC2);