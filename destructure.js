const person = {
  name: "Ben",
  age: 26,
  job: "Engniner",
  salary: 100000,
  address: "usa",
};
const name = person.name;
const job = person.job;
console.log(person.name);
console.log(name, job);
///////// destructure///////////
const { salary, address } = person;
console.log(salary, address);

const friends = ["shafayet", "noor", "mohib", "meraj", "asif"];
// const [bgme] = friends;
// const [butex] = friends;
//console.log(bgme, butex);
const [bgme, butex, ...restfriends] = friends;
console.log(restfriends);
///////// nested object//////////
const complexObject = {
  name: "abParty",
  info: {
    address: "nilkhet",
    leader: "tiger",
  },
};

const { leader } = complexObject.info;
console.log(leader);
