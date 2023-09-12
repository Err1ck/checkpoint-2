/*
Write a function that takes an array of objects as a parameter. 
Each object has a "name" property and an "age" property. 
The function should return the object with the highest age.
const people= [
  { name: 'Mario', age: 32 },
  { name: 'Luigi', age: 28 },
  { name: 'Peach', age: 29 },
  { name: 'Toad', age: 35 }
];
*/
const people = [
    { name: 'Mario', age: 32 },
    { name: 'Luigi', age: 28 },
    { name: 'Peach', age: 29 },
    { name: 'Toad', age: 35 }
  ];

function peopleAge(arrayPersonas){
    let mayor=arrayPersonas[0]
    for(let i=1;i<arrayPersonas.length;i++){
        if(arrayPersonas[i].age>mayor.age){
            mayor=arrayPersonas[i].age
        } 
    }
    return mayor;
}


console.log(peopleAge(people))