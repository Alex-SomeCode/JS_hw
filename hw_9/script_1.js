// // // Так. Письмова таска.
// // //     Зробити свій розпоряжок дня.
// // //
// // //     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в
// // //     день.
// // //     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// // //     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не
// // //     успішне виконання.
// // //     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.


let result = true;

function getUp(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Прокинувся. Збираюсь на стадіон.');
            cb(null, result);
        } else {
            // console.log('Сплю.');
            cb('Сплю. Дзвін будильника. Будильник... Хай через 5 хвилин перетризвонить, а я ще посплю. ' +
                'Після цих 5 хвилин побіжу на стадіон.', result);
        }
    }, 1000)
}

function run(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Побігав на стадіоні. Повернувся додому, прийняв душ. Зуби почистив. Випив каву.');
            cb(null, result);
        } else {
            // console.log('Можливо треба дійсно поспати більше, хоча б не зламатися знову через ту лінь.');
            cb('... Передумав, краще посплю... Недавно ж скінчив працювати...', result);
        }
    }, 6000);
}

function goWork(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log("Поїхав на роботу.");
            cb(null, result);
        } else {
            cb("Погано виспався." +
                " Кодінг он зе хаус...", result);
        }
    }, 4000);
}

function workWayP(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Попав у пробку. Краще б дома працювати лишився, чим тут бібкати ' +
                'стоп-сигналом.');
            cb(null, result);
        } else {
            cb('Приїхав на роботу вчасно.', result);
        }
    }, 5000);
}

function atWork(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Приїхав на роботу вчасно.');
            cb(null, result);
        } else {
            cb('Ще їду на роботу. Взбодрьонний в хлам.', result);
        }
    }, 3000)
}

function working(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Працюю. Код сам себе пише.');
            cb(null, result);
        } else {
            cb('Запізнився на роботу. Почав працювати. Код нєчітаємий.', result);
        }
    }, 3000)
}

function dinner(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Обід. Прийшов до закладу харчування. Пообідав.');
            cb(null, result);
        } else {
            cb('Обід. Прийшов до закладу харчування. Поцілував двері, а після пішов' +
                ' дихати обіднім повітрям,' +
                ' так як гроші забув.', result);
        }
    }, 2000);
}

function workAfterDinner(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Повернувся після обіду на роботу - працюю. Код сам себе пише.');
            cb(null, result);
        } else {
            cb('Повернувся пілся обіду на роботу - працюю. ' +
                'Прогулянка пішла на користь.', result)
        }
    }, 3000);
}

function coffee(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Код сам себе пише. Випив каву.');
            cb(null, result);
        } else {
            cb('Пити каву не буду. Інтревальне голодування - це корисно. Працюю далі.', result)
        }
    }, 1000)
}

function workAfterCoffee(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Працюю. Код сам себе пише.');
            cb(null, result);
        } else {
            cb('Працюю. Зайві калорії горять.', result)
        }
    }, 3000);
}

function goHome(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Закінчив працювати. Зібрався та поїхав додому. Приїхав додому.')
            cb(null, result);
        } else {
            cb('Дещо затримався попрацювти, якось цікаво закінчити швидше.', result);
        }
    }, 3000);
}

function study(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Вчусь кодити далі.');
            cb(null, result);
        } else {
            cb('Приїхав пізненько додому, почистив зубки та ліг спатунькать.', result);
        }
    }, 4000);
}

function sleep(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Покодив, повчився та пішов спати.')
        } else {
            console.log('Вже сплю.')
        }
    }, 3000);
}

function coding_In_Home(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Проснувся в 11.05. Почистив зуби, застелив ліжко,' +
                ' зробив ранкові вправи, а на останок - випив передобідню каву.');
            cb(null, result);
        } else {
            cb('Прокинувся о 12.00. Увімкнув комп, побачив сьогоднішній код' +
                ' і почав його аналізувати. Застряг.', result);
        }
    }, 2000);
}

function working_On_House(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Не встиг допити каву - пора обідати. Пообідав.' +
                ' І почав займатись іншими корисними справами, щоб розвантажити мозок.' +
                ' London is the capital of Great Britain...')
            cb(null, result);
        } else {
            cb('Задовбав той код. З робочим днем покінчено з того часу як проспав. ' +
                'Випив кави та зайнявся розважальними справами.', result);
        }
    }, 4000)
}

function goToTheBed(result, cb) {
    setTimeout(() => {
        if (result) {
            console.log('Наповнений натхненням на завтрішній день - ліг спати.')
        } else {
            console.log('Після триваоих зарубанок в ДУМ - ліг спати.')
        }
    }, 3000);
}

getUp(true, (failed, getUp) => { //як що тут з тру погратись, то штучшнй нітелект ще попрацює
    if (failed) {
        console.log(failed);
        run(getUp, (failed, doPE) => {
            if (failed) {
                console.log(failed);
                goWork(doPE, (failed, goWork) => {
                    if (failed) {
                        console.log(failed);
                        coding_In_Home(true, (failed, coding_in_Home) => { // true при попередньому false і день прожитий недарма
                            if (failed) {
                                console.log(failed);
                                working_On_House(coding_in_Home, (failed, working_On_House) => {
                                    if (failed) {
                                        console.log(failed);
                                        goToTheBed(working_On_House, (failed));
                                    }
                                });
                            } else {
                                working_On_House(coding_in_Home, (failed, working_On_TheHouse) => {
                                    goToTheBed(working_On_TheHouse);
                                });
                            }
                        });
                    }
                });
            }
        });
    } else {
        run(true, (failed, doPE) => { // при гловному true, а тут - false --- вже майже був на стадіоні
            if (failed) {
                console.log(failed);
                goWork(false, (failed, onWork) => { // в попередньому false а тут true -- проспав і поїхав на роботу
                    if (failed) {
                        console.log(failed);
                        coding_In_Home(onWork, (failed, in_Home) => {
                            if (failed) {
                                console.log(failed)
                                working_On_House(in_Home, (failed, working) => {
                                    if (failed) {
                                        console.log(failed);
                                        goToTheBed(working);
                                    }
                                });
                            }
                        });
                    } else {
                        workWayP(onWork, (failed) => {
                            atWork(false, (failed, atWork) => {
                                console.log(failed);
                                working(atWork, (failed, working) => {
                                    console.log(failed);
                                    dinner(working, (failed, dinner) => {
                                        console.log(failed);
                                        workAfterDinner(dinner, (failed, workAfterDinner) => {
                                            console.log(failed);
                                            coffee(workAfterDinner, (failed, coffee) => {
                                                console.log(failed);
                                                workAfterCoffee(coffee, (failed, workAfterCoffee) => {
                                                    console.log(failed);
                                                    goHome(workAfterCoffee, (failed, goHome) => {
                                                        console.log(failed);
                                                        study(goHome, (failed, study) => {
                                                            console.log(failed);
                                                            sleep(study, (failed, sleep) => {
                                                                console.log(failed);
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    }
                });
            } else {
                goWork(doPE, (failed, goWork) => {
                    if (failed) {
                        console.log(failed);
                        atWork(goWork, (failed, atWork) => {
                            if (failed) {
                                console.log(failed);
                            } else {
                                working(atWork, (failed, working) => {
                                    if (failed) {
                                        console.log(failed);
                                        dinner(working, (failed, dinner) => {
                                        });
                                    }
                                });
                            }
                        });
                    } else {                // закінчені сценарії деяких подій
                        atWork(goWork, (failed, atWork) => {
                            working(atWork, (failed, working) => {
                                dinner(true, (failed, dinner) => { // тут можна забути гроші, а можна і ні
                                    if (failed) {
                                        console.log(failed);
                                        workAfterDinner(true, (failed, workAfterDinner) => { // тут можна не пити каву по обіді, але тільки після того, як забув гроші, а можна і й випити
                                            if (failed) {
                                                console.log(failed);
                                                coffee(workAfterDinner, (failed, coffee) => {
                                                    if (failed) {
                                                        console.log(failed);
                                                        workAfterCoffee(coffee, (failed, workAfterCoffee) => {
                                                            if (failed) {
                                                                console.log(failed);
                                                                goHome(workAfterCoffee, (failed, goHome) => {
                                                                    if (failed) {
                                                                        console.log(failed);
                                                                        study(goHome, (failed, study) => {
                                                                            if (failed) {
                                                                                console.log(failed);
                                                                                sleep(study)
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            } else {
                                                coffee(workAfterDinner, (failed, coffee) => {
                                                    workAfterCoffee(coffee, (failed, workAfterCoffee) => {
                                                        goHome(workAfterCoffee, (failed, goHome) => {
                                                            study(goHome, (failed, study) => {
                                                                sleep(study => {
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            }
                                        });
                                    } else {
                                        workAfterDinner(dinner, (failed, workAfterDinner) => {
                                            coffee(workAfterDinner, (failed, coffee) => {
                                                workAfterCoffee(coffee, (failed, workAfterCoffee) => {
                                                    goHome(workAfterCoffee, (failed, goHome) => {
                                                        study(goHome, (failed, study) => {
                                                            sleep(study)
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }
                                });
                            });
                        });
                    }
                });
            }
        });
    }
});

// // //     Тобто, як приклад
// // // Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали -
// // // Працюєте - Випили кави - Працюєте -
// // // Поїхали до дому - Повчились - Лягли спати.
// // //
// // //     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні
// // //     функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і
// // //   лишились голодні.