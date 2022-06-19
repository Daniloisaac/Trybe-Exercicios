// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// // 3

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift(). Teste em seu console e veja o resultado.
// Bacana, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens. Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?". Simples, veja este exemplo:

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
// Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift(). Teste em seu console e veja o resultado.
// Bacana, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens. Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?". Simples, veja este exemplo:
// Copiar
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // remove a última tarefa
// console.log(tasksList);

// // [ 'Tomar café', 'Reunião' ]
// O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift(). Faça em seu console e veja o resultado.
// Outra importante ferramenta é o indexOf(), usado para procurar o índice de um item no Array. Veja o exemplo:
// Copiar
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);

// // 1
// Essas são algumas das possibilidades mais utilizadas para manipular arrays. Caso tenha dúvidas, lembre-se sempre de consultar a documentação.

// let menu= ["Home", "Serviços", "Portfólio", "Links"];
// let menuServices= menu[menu.length, 1];
// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu[ menu.length -2];

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push= ("Contato");

// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(let index of groceryList){

// console.log (index);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let index of numbers){
// console.log(index)
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma= 0;
// for(let index= 0; index<numbers.length; index+= 1){
//  soma= soma + numbers[index]

// }

// console.log(soma)

//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma= 0;
// for(let index= 0; index<numbers.length; index+= 1){
//  soma= soma + numbers[index]

// }
//  soma=soma/2
// console.log(soma)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma= 0;
// for(let index= 0; index<numbers.length; index+= 1){
//  soma= soma + numbers[index]

// }
//  soma=soma/2
// console.log(soma)

// if(soma> 20){
// console.log("é maior que 20")
// }else{
//     console.log("é menor que 20")
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let maiorNumero= numbers[0];


// for(let i= 0; i< numbers.length; i += 1){

    
//     if(numbers[i]>maiorNumero){
//      maiorNumero= numbers[i];
//     }
// }
// console.log(maiorNumero)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numeroPar
// for(let i= 0; i<numbers.length; i+= 1  ){
// if(numbers[i]%2===  0){
//     numeroPar=numbers[i]
// console.log(numeroPar, "ooo")
// }else{
//     console.log("iii")
// }
// } 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menorNumero= numbers[0];


// for(let i= 0; i< numbers.length; i += 1){


//     if(numbers[i]<menorNumero){
//      menorNumero= numbers[i];
//     }
// }
// console.log(menorNumero)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numero25= 25;
// for(let i= 0; i<numbers.length; i+= 1){
//     if(numero25>= numbers[i]){
        
//        console.log(numbers[i])
//     }
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numero25= 25;
// for(let i= 0; i<numbers.length; i+= 1){
//     if(numero25>= numbers[i]){
        
//        console.log(numbers[i]/2)
//     }
// }

