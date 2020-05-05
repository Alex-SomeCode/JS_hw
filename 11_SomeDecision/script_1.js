/ 2) Deep Copy реалізувати глибоке копіювання обєкту за допомогою рекурсій
let someObject = {
    name: 'Some Name',
    isDeveloper: false,
    skills: ['Hello World!', [{js: false, F: [['dd']], java: false, other: false}]],
}
let copy = {};

copyObject(someObject, copy)

function copyObject(obj, copy) {
    function forObj(innerObj, copy) {
        for (const key in innerObj) {
            if (!Array.isArray(innerObj[key]) && typeof innerObj[key] === 'object') {
                forObj(innerObj[key], copy);
            } else if (Array.isArray(innerObj[key])) {
                const innerArr = innerObj[key];
                copy[key] = []
                forArr(innerObj[key], copy[key], innerArr);
            } else {
                copy[key] = innerObj[key];
            }
        }
    }

    function forArr(innerArr, copy, nextInner) {
        for (const element of innerArr) {
            if (Array.isArray(element)) {
                const nextInner = element;
                forArr(element, copy, nextInner);
            } else if (typeof element === 'object' && (!Array.isArray(element))) {
                copy = []
                forObj(element, copy,);
            } else if (typeof element !== 'object' && (!Array.isArray(element))) {
                for (const element of nextInner) {
                    if (Array.isArray(element)) {
                        forArr(element, copy, nextInner)
                    }
                    copy.push(element);
                }
            }
        }
    }

    Array.isArray(obj)
        ? forArr(obj, copy)
        : forObj(obj, copy);
}

console.log('=====================================')
console.log(someObject)
console.log('--------------------------------------------------------------------------')
console.log(copy)
console.log('=====================================')
