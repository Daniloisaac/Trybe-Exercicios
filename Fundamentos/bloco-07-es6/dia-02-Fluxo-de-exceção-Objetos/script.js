// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       return error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

// const obje = (ob, key, valor) => {
//  ob ={
//  }
//  key = 'name'
//  valor = 'danilo'
//  ob[key]=valor
//  return ob
// }
// console.log(obje())

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in arrayOfSkills) {
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');
//   listSkills(student2);

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//     console.log(Object.keys(coolestTvShow));
  
//   // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]


const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  const newPerson2 =  Object.assign(person,lastName)
  newPerson.name = 'Gilberto';
  newPerson2.name = 'danilo'
  newPerson2.age = 22
  lastName.age = 44
  console.log(newPerson);
  console.log(newPerson2);
  console.log(lastName)


