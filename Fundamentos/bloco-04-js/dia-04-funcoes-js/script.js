// let diasDaSemana = {
//  1: 'domingo',
//  2: 'segunda',
//  3: 'terça',
//  4: 'quarta',
//  5: 'quinta',
//  6: 'sexta',
//  7: 'sábado',
//   };
  
//   diasDaSemana.1; // SyntaxError: Unexpected number
//   // console.log(diasDaSemana['1']); // domingo

// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

//  moradores[0];
// console.log(moradores[0]); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log (moradores[0]['andar']); // 10



let player=  {
 name : 'Marta',
 lastName : 'Silva',
 age : 34,
 medals : { golden: 2, silver: 3 },
 bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018]
 
}
console.log('a jogadora '+ player['name']+ ' '+player['lastName']+' tem'+ " " + player.age+ " "+ "anos de idade")
console.log("A jogadora Marta Silva foi eleita a melhor do mundo por "
+player['bestInTheWorld'].length+ ' '+'vezes' )

console.log('A jogadora possui '+ player['medals']['golden']+' medalhas de ouro e '+ player["medals"]['silver']+ ' medalhas de prata')