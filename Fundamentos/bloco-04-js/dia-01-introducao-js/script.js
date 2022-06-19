// const myName= "Danilo"
// const birthCity= "Santo André"
// var birthYear= 2030
// console.log(myName) 
// console.log(birthCity) 
// console.log(birthYear)

// const base= 5
// let height= 8
// const area= base * height
// const perimeter= base + height
// console.log(base)
// console.log(height)
// console.log(area)
// console.log(perimeter)


// const notaDoDesafio=  89

// if(notaDoDesafio>= 80){
//     console.log("Parabéns, você foi aprovada(o)!")
// }
// else if(notaDoDesafio< 80 || notaDoDesafio== 60){
// console.log("Você está na nossa lista de espera"
// )
// }
// else{
//     console.log("Você foi reprovada(o)")
// }

// const comida = 'pão na chapa';
// const bebida = 'cafezinho';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// const bulbasaur = "melhor pokemon inicial";

// console.log(!bulbasaur); // false
// console.log(!42); // false

// console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// let resultadoDoProcesso= aprovado;

// switch(resultadoDoProcesso) {
//     case "aprovado":
//     console.log("aprovado");
//     break;

//      case "lista":
//     console.log("lista");
//     break;

//      case "reprovado":
//     console.log("reprovado");
//     break;

//  default:
// console.log("não se aplica")
// }


// const a= 7
// const b= 9
// console.log(a+b)

// const c= 6
// const d= 8
// console.log(c-d)

// const e= 45
// const f= 83
// console.log(e*f)

// const g= 60
// const h= 2
// console.log(g/h)

// const i= 10
// const j= 2
// console.log(i%j)

// const n1 = 10
// const n2= 5
// if(n1> n2){
// console.log("maior numero é:", n1)
// }else if(n2>n1){
// console.log("maior numero é:", n2)
// }else{
//     console.log("empate")
// }

let idade= 18;
let sexo= "m";
let peso= 70;
let altura= 170;

if(sexo === "m"){
 console.log("homem",(altura * 6.25)+ (peso * 9.99)- (idade * 4.92)+ 5 )
}else{
    console.log((altura * 6.25)+ (peso * 9.99)- (idade * 4.92)+ 161 )
}