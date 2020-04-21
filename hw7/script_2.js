// // // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку
// // // меню-оглавление по всем заголовкам которые есть в тексте.
// // // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

const idContent = document.getElementById('content');
const idWrap = document.getElementById('wrap');
const h2Arr = document.getElementsByTagName('h2');

const ul = document.createElement('ul');

for (let i = 0; i < h2Arr.length; i++) {
    const tagLi = document.createElement('li');
    const tagA = document.createElement('a');
    const anchor = `anchor${i}`;
    h2Arr[i].setAttribute('id', anchor);
    tagA.href = `#${anchor}`;
    tagA.innerText = h2Arr[i].innerText;
    tagLi.appendChild(tagA);
    ul.appendChild(tagLi);
}


idContent.appendChild(ul);
const mainDiv = document.createElement('div');
mainDiv.style = 'display: flex; justify-content: space-around';
mainDiv.appendChild(idContent);
mainDiv.appendChild(idWrap);
document.body.appendChild(mainDiv);







