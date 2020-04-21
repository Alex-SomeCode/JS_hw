// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//

const textArea_1 = document.getElementById('text_1');

const inputs = document.getElementsByTagName('input');
for (const element of inputs) {
    element.style = 'margin: 20px 0px 10px 0px';
}

textArea_1.onblur = function (ev) {
    localStorage.setItem('textArea_1Value', ev.target.value);
}
textArea_1.value = localStorage.getItem('textArea_1Value');


// //  - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// //    Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил
// //    всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли
// // на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.


let task_2 = document.getElementsByClassName('task_2');


let objTask_2 = {};

if (localStorage.getItem('objTask_2')) {
    objTask_2 = JSON.parse(localStorage.getItem('objTask_2'));
    for (const element of task_2) {
        switch (element.name) {
            case 'name':
                if (objTask_2.name === undefined) break;
                element.value = objTask_2.name;
                break;
            case 'surname':
                if (objTask_2.surname === undefined) break;
                element.value = objTask_2.surname;
                break;
            case 'text':
                if (objTask_2.text === undefined) break;
                element.value = objTask_2.text;
                break;
            case 'city':
                element.value = objTask_2.city;
        }
        switch (element.type) {
            case 'checkbox':
                element.checked = objTask_2[element.id];
                break;
            case 'radio':
                if (element.id === objTask_2.radioId) element.checked = objTask_2.radioChecked
        }
    }

}

for (const element of task_2) {
    element.onblur = () => {
        console.log('onblur')
        switch (element.name) {
            case 'name':
                objTask_2.name = element.value;
                break;
            case 'surname':
                objTask_2.surname = element.value;
                break;
            case 'text':
                objTask_2.text = element.value;
                break;
            case 'city':
                objTask_2[element.name] = element.value;
                console.log(element.value);
        }
        switch (element.type) {
            case 'checkbox':
                objTask_2[element.id] = element.checked;
                break;
            case 'radio':
                objTask_2.radioId = element.id;
                objTask_2.radioChecked = element.checked;
                break;
        }
        localStorage.setItem('objTask_2', JSON.stringify(objTask_2));
    }
}


// // - Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// // затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const notebook = document.getElementById('notebook');
const left = document.getElementById('arrowLeft');
const right = document.getElementById('arrowRight');
const save = document.getElementById('save');

let obj = {};
let counter = 1;

save.onclick = (ev) => {
    obj[counter] = notebook.value;
    localStorage.setItem('text', JSON.stringify(obj));
    counter < 3
        ? counter++
        : counter = 1
}


left.onclick = () => {
    right.style.visibility = 'visible';
    let index;
    for (let key in JSON.parse(localStorage.getItem('text'))) {
        if (JSON.parse(localStorage.getItem('text')).hasOwnProperty(key)) {
            if (JSON.parse(localStorage.getItem('text'))[key] === notebook.value) {
                index = key;
            }
        }
    }
    if (index === '1') {
        left.style.visibility = 'hidden';
        return;
    }
    let value = JSON.parse(localStorage.getItem('text'));
    notebook.value = value[index - 1]
}

right.onclick = () => {
    left.style.visibility = 'visible';
    let index;
    for (let key in JSON.parse(localStorage.getItem('text'))) {
        if (JSON.parse(localStorage.getItem('text')).hasOwnProperty(key)) {
            if (JSON.parse(localStorage.getItem('text'))[key] === notebook.value) {
                index = key;
            }
        }
    }
    if (index === '3') {
        right.style.visibility = 'hidden';
        return;
    }
    let value = JSON.parse(localStorage.getItem('text'));
    notebook.value = value[+index + 1]
}


// - Реализуйте зxаписную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется
// форма, в которой есть все необходимые инпуты для редактирования, которые уже
// заполнены данными объекта

const usersArray = 'usersArray';
let userEdit = {};
const content = document.getElementById('content');
const form_1 = document.forms.form_1;
console.log(form_1.submit_f1)
form_1.submit_f1.onclick = ev => {
    // ev.preventDefault();
    let person = { ...userEdit};

    for (let i = 0; i < form_1.children.length; i++) {
        const form_1Element = form_1.children[i];
        if (form_1Element.name && form_1Element.type !== 'submit') {
            person[form_1Element.name] = form_1Element.value;
        }
    }
    if(!person.id){
        person.id = new Date().getTime()
    }
    console.log(person);
    addUser(person);
}

function addUser(user) {
    if (localStorage.hasOwnProperty(usersArray)) {
        const array = JSON.parse(localStorage.getItem(usersArray));
        const find = array.find(value => value.id === user.id);
        if (find) {
            const filter = array.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(usersArray, JSON.stringify(filter));
        } else {
            array.push(user);
            localStorage.setItem(usersArray, JSON.stringify(array));
        }
    } else {
        localStorage.setItem(usersArray, JSON.stringify([user]));
    }
}

getUsers();

function getUsers() {
    if (localStorage.hasOwnProperty(usersArray)) {
        const parseValue = JSON.parse(localStorage.getItem(usersArray));
        for (const element of parseValue) {
            console.log(element);
        content.appendChild(createDivPerson(element));
        }
    }
}

function createDivPerson(user) {
    const div = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = `${key} : ${user[key]}`;
            div.appendChild(h3);
            flag=false;
        } else {
            const p = document.createElement('p');
            p.innerText = `${key} : ${user[key]}`;
            div.appendChild(p);
        }
    }
    div.style = 'width: 300px; border: green 1px solid; float: left';
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');

    b1.innerText = 'Внести зміни';
    b2.innerText = 'Видалити'

    b1.onclick=function(){
        console.log(user.id);
        editUser(user.id);
    }

    b2.onclick=function(){
        console.log(user.id);
        delUser(user.id);
    }

    div.appendChild(b1)
    div.appendChild(b2)

 return div;
}

function delUser(id) {
    const parse =JSON.parse(localStorage.getItem(usersArray));
    const filter = parse.filter(user =>user.id!==id);
    localStorage.setItem(usersArray, JSON.stringify(filter));
    location.reload();
}


function editUser(id){
    const parse =JSON.parse(localStorage.getItem(usersArray));
    const user = parse.find(user =>user.id==id);
    for (let i = 0; i < form_1.children.length; i++) {
        const form_1Element = form_1.children[i];
        if (form_1Element.name && form_1Element.type !== 'submit') {
            for (const key in user) {
                if (form_1Element.name === key){
                    form_1Element.value = user[key];
                }
            }
        }
    }
    userEdit = user;
}









