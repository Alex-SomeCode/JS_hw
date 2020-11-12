// // // Так. Письмова таска.
// // //     Зробити свій розпоряжок дня.
// // //
// // //     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в
// // //     день.
// // //     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// // //     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не
// // //     успішне виконання.
// // //     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.


// let result = true;
//
// function getUp(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Прокинувся. Збираюсь на стадіон.');
//             cb(null, result);
//         } else {
//             // console.log('Сплю.');
//             cb('Сплю. Дзвін будильника. Будильник... Хай через 5 хвилин перетризвонить, а я ще посплю. ' +
//                 'Після цих 5 хвилин побіжу на стадіон.', result);
//         }
//     }, 1000)
// }
//
// function run(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Побігав на стадіоні. Повернувся додому, прийняв душ. Зуби почистив. Випив каву.');
//             cb(null, result);
//         } else {
//             // console.log('Можливо треба дійсно поспати більше, хоча б не зламатися знову через ту лінь.');
//             cb('... Передумав, краще посплю... Недавно ж скінчив працювати...', result);
//         }
//     }, 6000);
// }
//
// function goWork(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log("Поїхав на роботу.");
//             cb(null, result);
//         } else {
//             cb("Погано виспався." +
//                 " Кодінг он зе хаус...", result);
//         }
//     }, 4000);
// }
//
// function workWayP(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Попав у пробку. Краще б дома працювати лишився, чим тут бібкати ' +
//                 'стоп-сигналом.');
//             cb(null, result);
//         } else {
//             cb('Приїхав на роботу вчасно.', result);
//         }
//     }, 5000);
// }
//
// function atWork(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Приїхав на роботу вчасно.');
//             cb(null, result);
//         } else {
//             cb('Ще їду на роботу. Взбодрьонний в хлам.', result);
//         }
//     }, 3000)
// }
//
// function working(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Працюю. Код сам себе пише.');
//             cb(null, result);
//         } else {
//             cb('Запізнився на роботу. Почав працювати. Код нєчітаємий.', result);
//         }
//     }, 3000)
// }
//
// function dinner(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Обід. Прийшов до закладу харчування. Пообідав.');
//             cb(null, result);
//         } else {
//             cb('Обід. Прийшов до закладу харчування. Поцілував двері, а після пішов' +
//                 ' дихати обіднім повітрям,' +
//                 ' так як гроші забув.', result);
//         }
//     }, 2000);
// }
//
// function workAfterDinner(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Повернувся після обіду на роботу - працюю. Код сам себе пише.');
//             cb(null, result);
//         } else {
//             cb('Повернувся пілся обіду на роботу - працюю. ' +
//                 'Прогулянка пішла на користь.', result)
//         }
//     }, 3000);
// }
//
// function coffee(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Код сам себе пише. Випив каву.');
//             cb(null, result);
//         } else {
//             cb('Пити каву не буду. Інтревальне голодування - це корисно. Працюю далі.', result)
//         }
//     }, 1000)
// }
//
// function workAfterCoffee(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Працюю. Код сам себе пише.');
//             cb(null, result);
//         } else {
//             cb('Працюю. Зайві калорії горять.', result)
//         }
//     }, 3000);
// }
//
// function goHome(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Закінчив працювати. Зібрався та поїхав додому. Приїхав додому.')
//             cb(null, result);
//         } else {
//             cb('Дещо затримався попрацювти, якось цікаво закінчити швидше.', result);
//         }
//     }, 3000);
// }
//
// function study(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Вчусь кодити далі.');
//             cb(null, result);
//         } else {
//             cb('Приїхав пізненько додому, почистив зубки та ліг спатунькать.', result);
//         }
//     }, 4000);
// }
//
// function sleep(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Покодив, повчився та пішов спати.')
//         } else {
//             console.log('Вже сплю.')
//         }
//     }, 3000);
// }
//
// function coding_In_Home(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Проснувся в 11.05. Почистив зуби, застелив ліжко,' +
//                 ' зробив ранкові вправи, а на останок - випив передобідню каву.');
//             cb(null, result);
//         } else {
//             cb('Прокинувся о 12.00. Увімкнув комп, побачив сьогоднішній код' +
//                 ' і почав його аналізувати. Застряг.', result);
//         }
//     }, 2000);
// }
//
// function working_On_House(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Не встиг допити каву - пора обідати. Пообідав.' +
//                 ' І почав займатись іншими корисними справами, щоб розвантажити мозок.' +
//                 ' London is the capital of Great Britain...')
//             cb(null, result);
//         } else {
//             cb('Задовбав той код. З робочим днем покінчено з того часу як проспав. ' +
//                 'Випив кави та зайнявся розважальними справами.', result);
//         }
//     }, 4000)
// }
//
// function goToTheBed(result, cb) {
//     setTimeout(() => {
//         if (result) {
//             console.log('Наповнений натхненням на завтрішній день - ліг спати.')
//         } else {
//             console.log('Після триваоих зарубанок в ДУМ - ліг спати.')
//         }
//     }, 3000);
// }
//
// getUp(true, (failed, getUp) => { //як що тут з тру погратись, то штучшнй нітелект ще попрацює
//     if (failed) {
//         console.log(failed);
//         run(getUp, (failed, doPE) => {
//             if (failed) {
//                 console.log(failed);
//                 goWork(doPE, (failed, goWork) => {
//                     if (failed) {
//                         console.log(failed);
//                         coding_In_Home(true, (failed, coding_in_Home) => { // true при попередньому false і день прожитий недарма
//                             if (failed) {
//                                 console.log(failed);
//                                 working_On_House(coding_in_Home, (failed, working_On_House) => {
//                                     if (failed) {
//                                         console.log(failed);
//                                         goToTheBed(working_On_House, (failed));
//                                     }
//                                 });
//                             } else {
//                                 working_On_House(coding_in_Home, (failed, working_On_TheHouse) => {
//                                     goToTheBed(working_On_TheHouse);
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     } else {
//         run(false, (failed, doPE) => { // при гловному true, а тут - false --- вже майже був на стадіоні
//             if (failed) {
//                 console.log(failed);
//                 goWork(true, (failed, onWork) => { // в попередньому false а тут true -- проспав і поїхав на роботу
//                     if (failed) {
//                         console.log(failed);
//                         coding_In_Home(onWork, (failed, in_Home) => {
//                             if (failed) {
//                                 console.log(failed)
//                                 working_On_House(in_Home, (failed, working) => {
//                                     if (failed) {
//                                         console.log(failed);
//                                         goToTheBed(working);
//                                     }
//                                 });
//                             }
//                         });
//                     } else {
//                         workWayP(onWork, (failed) => {
//                             atWork(false, (failed, atWork) => {
//                                 console.log(failed);
//                                 working(atWork, (failed, working) => {
//                                     console.log(failed);
//                                     dinner(working, (failed, dinner) => {
//                                         console.log(failed);
//                                         workAfterDinner(dinner, (failed, workAfterDinner) => {
//                                             console.log(failed);
//                                             coffee(workAfterDinner, (failed, coffee) => {
//                                                 console.log(failed);
//                                                 workAfterCoffee(coffee, (failed, workAfterCoffee) => {
//                                                     console.log(failed);
//                                                     goHome(workAfterCoffee, (failed, goHome) => {
//                                                         console.log(failed);
//                                                         study(goHome, (failed, study) => {
//                                                             console.log(failed);
//                                                             sleep(study, (failed, sleep) => {
//                                                                 console.log(failed);
//                                                             });
//                                                         });
//                                                     });
//                                                 });
//                                             });
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     }
//                 });
//             } else {
//                 goWork(doPE, (failed, goWork) => {
//                     if (failed) {
//                         console.log(failed);
//                         atWork(goWork, (failed, atWork) => {
//                             if (failed) {
//                                 console.log(failed);
//                             } else {
//                                 working(atWork, (failed, working) => {
//                                     if (failed) {
//                                         console.log(failed);
//                                         dinner(working, (failed, dinner) => {
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     } else {                // закінчені сценарії деяких подій
//                         atWork(goWork, (failed, atWork) => {
//                             working(atWork, (failed, working) => {
//                                 dinner(true, (failed, dinner) => { // тут можна забути гроші, а можна і ні
//                                     if (failed) {
//                                         console.log(failed);
//                                         workAfterDinner(true, (failed, workAfterDinner) => { // тут можна не пити каву по обіді, але тільки після того, як забув гроші, а можна і й випити
//                                             if (failed) {
//                                                 console.log(failed);
//                                                 coffee(workAfterDinner, (failed, coffee) => {
//                                                     if (failed) {
//                                                         console.log(failed);
//                                                         workAfterCoffee(coffee, (failed, workAfterCoffee) => {
//                                                             if (failed) {
//                                                                 console.log(failed);
//                                                                 goHome(workAfterCoffee, (failed, goHome) => {
//                                                                     if (failed) {
//                                                                         console.log(failed);
//                                                                         study(goHome, (failed, study) => {
//                                                                             if (failed) {
//                                                                                 console.log(failed);
//                                                                                 sleep(study)
//                                                                             }
//                                                                         });
//                                                                     }
//                                                                 });
//                                                             }
//                                                         });
//                                                     }
//                                                 });
//                                             } else {
//                                                 coffee(workAfterDinner, (failed, coffee) => {
//                                                     workAfterCoffee(coffee, (failed, workAfterCoffee) => {
//                                                         goHome(workAfterCoffee, (failed, goHome) => {
//                                                             study(goHome, (failed, study) => {
//                                                                 sleep(study => {
//                                                                 });
//                                                             });
//                                                         });
//                                                     });
//                                                 });
//                                             }
//                                         });
//                                     } else {
//                                         workAfterDinner(dinner, (failed, workAfterDinner) => {
//                                             coffee(workAfterDinner, (failed, coffee) => {
//                                                 workAfterCoffee(coffee, (failed, workAfterCoffee) => {
//                                                     goHome(workAfterCoffee, (failed, goHome) => {
//                                                         study(goHome, (failed, study) => {
//                                                             sleep(study)
//                                                         });
//                                                     });
//                                                 });
//                                             });
//                                         });
//                                     }
//                                 });
//                             });
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });


const someValue = 0.5;

function getUp(value) {
    console.log(value)
    return new Promise((resolve) => {
        setTimeout(() => {
            Math.random() > someValue
                ? resolve('Прокинувся. Збираюсь на стадіон.')
                : resolve('Сплю. Дзвін будильника. Будильник... Хай через 5 хвилин перетризвонить, а я ще посплю. ' +
                'Після цих 5 хвилин побіжу на стадіон.');
        }, 1000);
    });
}


function run(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // result.includes('Збираюсь')
            Math.random() > someValue
                ? resolve('Побігав на стадіоні. Повернувся додому, прийняв душ. Зуби почистив. Випив каву.')
                : resolve('... Передумав, краще посплю... Недавно ж скінчив працювати...');
        }, 2000);
    });
}

function goWork(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (result.includes('Побігав')) {
                resolve("Поїхав на роботу.");
            } else {
                Math.random() > someValue
                    ? resolve("Погано виспався. Кодінг он зе хаус...")
                    : resolve("Поїхав на роботу...");
            }
        }, 2000);
    });
}


function workWayP(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('...')
                ? resolve('Попав у пробку. Краще б дома працювати лишився, чим тут бібкати ' +
                'стоп-сигналом.')
                : resolve('Приїхав на роботу раніше ніж треба.')
        }, 2000);
    });
}

function atWork(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('Приїхав')
                ? resolve('Монітор тряпочкою протер.')
                : resolve('Ще їду на роботу. Взбодрьонний в хлам.')
        }, 2000);
    });
}

function working(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('Монітор')
                ? resolve('Працюю. Код сам себе пише.')
                : resolve('Запізнився на роботу. Почав працювати. Код нєчітаємий.')
        }, 2000);
    });
}

function dinner(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // result.includes('працюю')
            Math.random() > someValue
                ? resolve('Обід. Прийшов до закладу харчування. Пообідав.')
                : resolve('Обід. Прийшов до закладу харчування. Поцілував двері, а після пішов' +
                ' дихати обіднім повітрям,' +
                ' так як гроші забув.');
        }, 2000);
    });
}

function workAfterDinner(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('Пообідав')
                ? resolve('Повернувся після обіду на роботу - працюю. Код сам себе пише.')
                : resolve('Прогулявся замість обіду та повернувся на роботу - працюю. ' +
                'Прогулянка взбодріла і я снова готов кодіть.');
        }, 2000);
    });
}

function coffee(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('сам')
                ? resolve('Код сам себе пише. Випив каву.')
                : resolve('Час пити каву. А я пити каву не буду. Інтревальне голодування - це корисно. Працюю далі.');
        }, 2000);
    });
}

function workAfterCoffee(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('Випив')
                ? resolve('Працюю. Код сам себе пише.')
                : resolve('Працюю. Зайві калорії горять.')
        }, 2000);
    });
}

function goHome(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('сам')
                ? resolve('Закінчив працювати. Зібрався та поїхав додому. Приїхав додому.')
                : resolve('Дещо затримався попрацювти, якось цікаво закінчити швидше.');
        }, 2000);
    });
}

function study(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('Приїхав')
                ? resolve('Вчусь кодити далі.')
                : resolve('Приїхав пізненько додому, почистив зубки та ліг спатунькать.')
        }, 2000);
    });
}

function sleep(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('кодити')
                ? resolve('Покодив, повчився та пішов спати.')
                : resolve('Вже сплю.');
        }, 2000);
    });
}

function coding_In_Home(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            Math.random() > someValue
                ? resolve('Проснувся в 11.05. Почистив зуби, застелив ліжко,' +
                ' зробив ранкові вправи, а на останок - випив передобідню каву.')
                : resolve('Прокинувся о 12.00. Увімкнув комп, побачив сьогоднішній код' +
                ' і почав його аналізувати. Застряг.');
        }, 2000);
    })
}

function working_On_House(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            result.includes('11')
                ? resolve('Не встиг допити каву - пора обідати. Пообідав.' +
                ' І почав займатись іншими корисними справами, щоб розвантажити мозок.' +
                ' London is the capital of Great Britain...')
                : resolve('Задовбав той код. З робочим днем покінчено з того часу як проспав. ' +
                'Випив кави та зайнявся розважальними справами.');
        }, 4000);
    })
}

function goToTheBed(result, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result.includes('London')
                ? reject('Наповнений натхненням на завтрішній день - ліг спати.')
                : reject('Після триваоих зарубанок в ДУМ - ліг спати.')
        }, 2000);
    })
}


// // //     Тобто, як приклад
// // // Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали -
// // // Працюєте - Випили кави - Працюєте -
// // // Поїхали до дому - Повчились - Лягли спати.
// // //
// // //     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні
// // //     функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і
// // //   лишились голодні.

// getUp('Будильник.')
//     .then(result => {
//         console.log(result);
//         return run();
//     })
//     .then(result => {
//         console.log(result);
//         // if (result.includes('Передумав')) {
//         //     return goWork(result)
//         // } else {
//         //     return goWork(result)
//         // }
//         return goWork(result);
//     })
//     .then(result => {
//         console.log(result);
//         if (result.includes('Погано')) {
//             return coding_In_Home(result)
//         } else {
//             return workWayP(result)
//         }
//     })
//     .then(result => {
//         console.log(result)
//         if (result.includes('Попав') || result.includes('Приїхав')) {
//             return atWork(result);
//         } else {
//             return working_On_House(result);
//         }
//     })
//     .then(result => {
//         console.log(result);
//         if (result.includes('London') || result.includes('Задовбав')) {
//             return goToTheBed(result);
//         } else {
//             return working(result);
//         }
//     })
//     .then(result => {
//         console.log(result);
//         return dinner(result);
//     })
//     .then(result => {
//         console.log(result);
//         return workAfterDinner(result)
//     })
//     .then(result => {
//         console.log(result);
//         return coffee(result);
//     })
//     .then(result => {
//         return coffee(result);
//     })
//     .then(result => {
//         console.log(result);
//         return workAfterCoffee(result);
//     })
//     .then(result => {
//         console.log(result)
//         return goHome(result);
//     })
//     .then(result => {
//         console.log(result);
//         return study(result);
//     })
//     .then(result => {
//         console.log(result);
//         return sleep(result);
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(reason => console.log(reason))
//     .finally(() => setTimeout(()=>{
//         console.log("Ready to the next day")
//     },2000));

async function someFunction() {
    try {
        let someAction = await getUp('Будильник.');
        console.log(someAction);

        someAction = await run(someAction);
        console.log(someAction);

        someAction = await goWork(someAction);
        console.log(someAction);

        if (someAction.includes('Погано')) {
            someAction = await coding_In_Home(someAction);
        } else {
            someAction = await workWayP(someAction);
        }
        console.log(someAction);

        if (someAction.includes('Приїхав') || someAction
            .includes('Попав')) {
            someAction = await atWork(someAction);
        } else {
            someAction = await working_On_House(someAction);
        }
        console.log(someAction);

        if (someAction.includes('протер') || someAction.includes('їду')) {
            someAction = await working(someAction);
        } else {
            someAction = await goToTheBed(someAction);
        }
        console.log(someAction);

        if (someAction.includes('Працюю.') || someAction.includes('Запізнився')) {
            someAction = await dinner(someAction);
        } else {
            someAction = await goToTheBed(someAction);
        }
        console.log(someAction);

        someAction = await workAfterDinner(someAction);
        console.log(someAction);

        someAction = await coffee(someAction);
        console.log(someAction);

        someAction = await workAfterCoffee(someAction);
        console.log(someAction);

        someAction = await goHome(someAction);
        console.log(someAction);

        someAction = await study(someAction);
        console.log(someAction);

        someAction = await sleep(someAction);
        console.log(someAction);

    } catch (e) {
        setTimeout(() => {
            console.log(e); // cюди потряпляє значення reject
        }, 2000);
    }
}

someFunction();



