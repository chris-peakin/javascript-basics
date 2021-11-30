const createPerson = (name, age) => {
  return {name: name,
          age: age}
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]){
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  if (person.age > 65){
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  let myArray = [];
  for (let i = 0; i < people.length; i += 1){
  myArray.push(people[i].age);
  };
  return myArray;
};

const findByName = (name, people) => {
  for (i = 0; i < people.length; i += 1){
    if (people[i].name === name){
      return people[i];
    }
  }
};

const findHondas = cars => {
  let carList = [];
  for (let i = 0; i < cars.length; i += 1){
    if (cars[i].manufacturer === 'Honda'){
      carList.push(cars[i]);
    }
  }
  return carList;
};

const averageAge = people => {
  let ageAv = 0;
  for (let i = 0; i < people.length; i += 1){
    ageAv += people[i].age;
  }
  return (ageAv / people.length);
};

const createTalkingPerson = (name, age) => {
  return {
    "name": name,
    "age": age,
    "introduce": (nameTwo) => {
      return `Hi ${nameTwo}, my name is ${name} and I am ${age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
