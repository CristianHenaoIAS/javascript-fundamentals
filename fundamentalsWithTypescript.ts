const string: string = '';

interface Operations {
    getResource(): boolean;
};

interface Person {
    name:       string;
    lastName:   string;
    age:        number;
};

type Category = {
    id:     bigint;
    name:   string;
    serie?: string;
};

const objPerson: Person = {
    name: 'Daniel',
    lastName: 'Gomez',
    age: 28
};

const category: Category = {
    id: 11n,
    name: 'Electronic'
};

/// 


const danielPerson = { name: 'Daniel', lastName: 'Gomez', age: 18};
const jorgePerson = { name: 'Jorge', lastName: 'Perez', age: 6};
const danielQuiroz = {...danielPerson, lastName: '17'};

// operators

    //spread operator - estructuring
const replicaDaniel = {...danielPerson, age: 2, profession: 'Eng'};
console.log(danielPerson);
console.log(replicaDaniel);
replicaDaniel.name = 'Pepito';
console.log(danielPerson);
console.log(replicaDaniel);

const baseArray = [danielPerson, jorgePerson];
const arrayReplic = [...baseArray];
arrayReplic.pop();
console.log(baseArray);
console.log(arrayReplic);


    // destructuring

const { name: newName } = danielPerson;
console.log(newName);

const [first] = [1,2,3,4,5];
console.log(first);

// 


const base: Person[] = [danielPerson, jorgePerson, danielQuiroz, {...jorgePerson, name: 'Juanito'}];

interface PersonForPrint {
    index: number;
    fullName: string;
    age: number;
};

const personsForPrint: PersonForPrint[] = base.map( (value: Person, index: number) => {
    return {index, fullName: `${value.name} ${value.lastName}`, age: value.age};
});
console.log(personsForPrint);


const personLongerThan18 = base.filter( (value: Person) => value.age >= 18);
console.log(personLongerThan18);

const daniel = base.find( (value: Person) => value.name === 'Daniel' && value.lastName === 'Gomez');
console.log(daniel);

const isExistDaniel = base.some( (value: Person) => value.name === 'Daniel' && value.lastName === 'Gomez');
console.log(isExistDaniel);

const sumAge = base.reduce( (prev, act) => {
    console.log('prev', prev);
    console.log('act', act);
    
    return prev + act.age;
}, 0);

console.log(sumAge);
console.log(sumAge / base.length);