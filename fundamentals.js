// variables primitivas
//Variables dentor del lenguaje que no representan un objeto -> es el valor plano
const number = 1;
console.log(typeof number); number

const bigInt = 3n;
console.log(typeof bigInt); bigInt

const alfanumerico = 'string';
console.log(typeof alfanumerico); alfanumerico;

const isValid = true; //boolean
console.log(typeof isValid);

const indefinido = undefined; undefined
let emptyValue;

console.log(typeof indefinido);
console.log(typeof emptyValue);

console.log(null == undefined);

const symbol = Symbol();
console.log(typeof symbol); symbol

//declaracion de variables

const constante = 1
// constante = 3 error

let cambiante = 1;
cambiante = 3;

// bad practice - variable withou scope
var cambianteWithScope = 3;

const constanteObj = {name: 'Jorge', lastName: 'Perez'};
constanteObj.name = 'Daniel';

// condicionales

const number3 = 3;
const string3 = '3'

//compara el vlaor y le tipo
console.log(number3 === string3); //good practice

// solo compara el valor
console.log(number3 == string3); // bad practice
console.log(number3 !== string3); // good practice

console.log(number3 >= 3);
console.log(number3 <= 3);
console.log(number3 > 3);
console.log(number3 < 3);

let persona;
console.log(!!persona);


const isInvalid = false;
console.log(!isInvalid);


// obj - arreglos -methods

// obj
const obj = {name: 'Daniel', lastName: 'Gómez', document: {type: 'CC', number: 103625}}
console.log(typeof obj);

//array
const array = [1, 3, 4, true, 'string', undefined];
console.log(typeof array);

//metodos 
    //tradicional
    function method(arg){
        //logic
        if(typeof arg == 'string'){

        }else
            throw 'No se puede ejecuar'
    }

    // arrow function
    const method2 = (arg) => {
        //logic
    }

    method('string');
    method2('string');

//callback
function methodWithArgCallback(arg, num1, num2){
    return arg(num1 + num2);
}

const callback = (result) => {
    return result.toString();
    //console.log('callback....', result);
}

const stringCallback = methodWithArgCallback(callback, 5, 6);
console.log(stringCallback);


arrayForCallback = [1,2,3,4,5];

function methodArray(callback){
    for (const element of arrayForCallback) {
        callback(element);
    }
}

let sum = 0;
const callbackForEachData = (eachData) =>{
    sum += eachData;
}


let major = 0;
const callForRest = (eachData) =>{
    major = major < eachData ? eachData : major;
}

let menior = 9999999;
const callBackForMenior = (eachData) =>{
    menior = menior > eachData ? eachData : menior;
}

methodArray(callbackForEachData);
console.log(sum);

methodArray(callForRest);
console.log(major);


methodArray(callBackForMenior);
console.log(menior);


//array functions
let meniorwithforEach = 9999;
let objWithResulForEach = {};
const callBackForEach = (value, index, array) =>{
    if(meniorwithforEach > value){
        meniorwithforEach = value;
        objWithResulForEach = {value, index, array}
        //arrayWithResulForEach.value = value;
        //arrayWithResulForEach.index = index;
        //arrayWithResulForEach.array = array;
    }
}

// ForEach
[1,2,3,4,5].forEach(callBackForEach)
console.log(meniorwithforEach);
console.log(objWithResulForEach);

// Map
const arrayBase = [1,2,3,4,5];
const resultMap = arrayBase.map((value, index, array) => {
    return value * 2;
})

console.log(resultMap);
console.log(arrayBase);


//Filter
const callbackFilter = function (value, index, array) {
    return value % 2 == 0;
}

const pairs = [1,2,3,4,5,6].filter(callbackFilter);
console.log([1,2,3,4,5,6].filter(e => e % 2 !== 0));

console.log(pairs);

// find
const callbackFind = (value, index) =>{
    return value > 4 && index > 2;
}

const resultFind = [1,2,3,4,5,6].find(callbackFind);
console.log(resultFind);

//some 
const callbacksome = (value, index) =>{
    return value > 4 && index > 2;
}

const resultSome = [1,2,3,4,5,6].some(callbacksome)
console.log(resultSome);

//reduce
const callBackReduce = function(prev, actual, indexActual, array){
    return prev + actual;
}

const baseReduce = [1, 2, 3, 4, 5, 6];
const valueInitial = 0;
const resultReduce = [1, 2, 3, 4, 5, 6].reduce(callBackReduce, valueInitial);
console.log(resultReduce);

const valueInitialObj = {pairs: 0, inpairs: 0}
const pairAndInPairs = baseReduce.reduce(function(prev, act){
    if(act % 2 == 0){
        return {...prev, pairs:  prev['pairs'] + act};
    }else{
        return {...prev, inpairs:  prev['inpairs'] + act};
    }
}, valueInitialObj)

console.log(pairAndInPairs);

// OBJECTS



