// 1) Створити карту користувача(User Card): Створити функцію «userCard» яка приймає число(будь-яке число)
// і повертає об’єкт з методами: const card3 = userCard(3);
// returns an object with methods User Card методи: getCardOptions.

// Дана функція повертає об’єкт котрий містить інформацію про карту: card3.getCardOptions();
// returns options object with card info Об’єкт має містити такі властивості:
// • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з карти);
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції данної карти);
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard функції. Кожна  карта повинна мати
//  унікальний key)

// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс карти: card3.putCredits(150);
//
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти
//     (протилежний за дією від метода putCredits): card3.takeCredits(100);
//      Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів перевищують кількість коштів,
//      які ви бажаєте взяти. Якщо ні, то слід записати ідповідне повідомлення у консолі (скористайтеся console.error)
//
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
//      card3.setTransactionLimit(5000);

// transferCredits. Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
//      та карту одержувача (інший об’єкт,створений функцією `userCard` - card1): card3.transferCredits(50, card1);
//      Кошти, які ви хочете передати, повинні обкладатися податками 0,5%. Не забудьте перед перерахуванням
//      перевірити залишок балансу та ліміт транзакцій відправника кредитів (card3).
//
// Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit change операції і зберігайте
//     history log. History log
//     (Дивитись зображення 1)
//     інформація має зберігатись в об’єктах з такими властивостями:
//     • operationType (стрічка яка описує здійснену операцію)
//     • credits (кількість коштів)
//     • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
// Зображення 1 — Приклад виклику функції getCardOptions
//

// 2) Створити UserAccount: Створити класс `UserAccount` (для цього завдання можна використати ES6 класс або
// звичайну функцію):  
//   const user = new UserAccount('Bob');
//   Класс має містити: Властивості акаунту користувача:
//       - name (передати в конструкторі)
//       - cards (Масив карток користувача.Масив не має бути довшим ніж 3)
//
//   Методи акаунту користувача:
//      - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до
//        cards: user.addCard();
//        Користувач повинен мати <= 3 карти.
//      - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти  
//  /*  
//  *  Повертає об’єкт {   
//  *  key: 1,   
//  *  balance: 150,   
//  *  ...other card properties   
//  * }   
//  */

// this.getCardByKey = function () {
//     this.cards.length < 3
//         ? this.cards.push(userCard(this.cards.length + 1))
//         : console.error('перевищений ліміт карток')
// }
// user.getCardByKey();
// user.getCardByKey();
// user.getCardByKey();
// user.getCardByKey();
// console.log(user);

// user.getCardByKey(1);
// Код
// Приклад переказу коштів:
//  let user = new UserAccount('Bob'); user.addCard() user.addCard()  
//  let card1 = user.getCardByKey(1); let card2 = user.getCardByKey(2);   card1.putCredits(500);
//  card1.setTransactionLimit(800); card1.transferCredits(300, card2);   card2.takeCredits(50);  
//  console.log(card1.getCardOptions()); // див зображення 2
//  Зображення 2 - Об’єкт властивостей card1
//  console.log(card2.getCardOptions());
//  див зображення 3
//  Зображення 3 - Об’єкт властивостей card2
// Посилання - https://css-tricks.com/javascript-scope-closures/ - https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Classes

function userCard(number) {

    if (number <= 0 || number > 3 || number === undefined || number === null) return;
    const card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number,
        addHistory: function (operationType, credits, operationTime) {
            card.historyLogs.push({operationType, credits, operationTime})
        }
    }

    return {
        getCardByKey: function (value) {
            return card.key;
        },
        putCredits: function (putCredits) {
            card.balance += putCredits;
            const date = new Date;
            const timeTransaction = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
            card.addHistory('put Credits', putCredits, timeTransaction);
        },
        setTransactionLimit: function (setLimit) {
            card.transactionLimit = setLimit;
            const date = new Date();
            const setLimitTime = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
            card.addHistory('Transaction limit', setLimit, setLimitTime);
        },
        getKey: function () {
            return card.key
        },
        getCardOptions: function () {
            // return card;
            console.log(`cardKey: ${card.key}:
             balance: ${card.balance};
             transActionLimit: ${card.transactionLimit};
             historyLogs: ${JSON.stringify(card.historyLogs)};`
            )
        },
        takeCredits: function (takeCredits) {
            if (takeCredits <= card.balance && takeCredits <= card.transactionLimit) {
                card.balance = card.balance - takeCredits;
                const date = new Date();
                const timeTransaction = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
                console.log(`Отримайте Ваші шрошові кошти ${takeCredits}`);
                card.addHistory('takeCredits', takeCredits, timeTransaction);
                // const resultTransaction = `Знято з рахунку: ${takeCredits}, дата транзакції ${timeTransaction}`
                // card.historyLogs.push(resultTransaction);
            } else {
                if (card.balance < takeCredits) console.error(`на Вашому балансі недостатньо грошових коштів`);
                if (takeCredits > card.transactionLimit) console.error(`неможливо здійснити операцію`);
            }
        },
        transferCredits: function (transfer, cardRecipient) {
            const value = transfer * 1.005;
            const commission = transfer * 0.005;
            if (value <= card.balance && transfer <= card.transactionLimit) {
                card.balance -= value;
                cardRecipient.putCredits(transfer);
                const date = new Date();
                const timeTransaction = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
                // const resultTransaction = `Переказ грошових коштів на суму: ${transfer}, комісія від якої становить: ${commission} грн., здійснено ${timeTransaction}`;
                // card.historyLogs.push(resultTransaction);
                card.addHistory('transfer Credits', transfer, timeTransaction);
            } else {
                if (transfer > card.transactionLimit) console.error(`неможливо здійснити переказ грошових коштів`);
                if (value > card.balance) console.error(`недостатньо грошових коштів`);
            }
        }
    }
}

// const card1 = userCard();
// const card2 = userCard();
// console.log(card1);
// console.log(card2);
// card1.getCardOptions()
// card1.setKey(1);
// card2.setKey(3);
// console.log(card1.getCardOptions(1));
// card1.transferCredits(95, card2);
// card1.putCredits(200);
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
// card1.takeCredits(100);
// console.log(card1.getCardOptions());

// // -------- виконання через функцію конструктор --------
// function UserAccount(name) {
//     this.name = name;
//     this.cards = [];
//     this.addCard = function () {
//         console.log(this.cards.length)
//         this.cards.length < 3
//             ? this.cards.push(userCard(this.cards.length + 1))
//             : console.error('у Вас максимальний ліміт карток');
//     }
//
//     this.getCard = function (number) {
//         const cardByKey = this.cards.find(value => value.getCardByKey() === number)
//         return cardByKey
//             ? cardByKey
//             : console.log("Такої картки не існує");
//     }
//
// }
//
// // UserAccount.prototype.addCard
// const user = new UserAccount('bob');
// user.addCard();
// user.addCard();
// user.addCard();
// user.addCard();
// console.log(user);
//
// let cardBooby1 = user.getCard(1);
// let cardBooby2 = user.getCard(2);
// cardBooby1.putCredits(40000000000);
// cardBooby1.setTransactionLimit(50000);
// cardBooby1.transferCredits(5000, cardBooby2);
//
// cardBooby1.getCardOptions();
// cardBooby2.getCardOptions();

// // ----------------- закінчено з функцією конструктором ---------------------

// // --------------------- за допомогою класу ---------------------
class userAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
}

userAccount.prototype.addCard = function () {
    console.log(this.cards.length);
    this.cards.length < 3
        ? this.cards.push(userCard(this.cards.length + 1))
        : console.error('Перевищено ліміт рахунків')
}

userAccount.prototype.getCardBeKey = function (cardKey) {
    const card = this.cards.find(card => card.getKey() === cardKey);
    return card
        ? card
        : console.error('З введеним ідентифікатором картки співпадінь не знайдено')

}


const bob = new userAccount('bob');

bob.addCard()
bob.addCard()
bob.addCard()
bob.addCard()
bob.addCard()
console.log(bob)

bob.getCardBeKey(44);
const bobCard_1 = bob.getCardBeKey(3);
bobCard_1.putCredits(100);
bobCard_1.getCardOptions();
bobCard_1.setTransactionLimit(2000);
bobCard_1.takeCredits(2000);
bobCard_1.takeCredits(2000);


bobCard_1.getCardOptions();

// // --------------------- закінчено допомогою класу ---------------------

