// Desafio 1
function compareTrue(sdds, daex) {

    if (sdds && daex) {
    return true;
  
  } return false;
    
} compareTrue();

// Desafio 2
function calcArea(base,altura) {
let calculo= (base * altura) / 2;
return calculo;
}
calcArea();
// Desafio 3
function splitSentence(nome) {
let virgula=nome.split([" " ,]);
  
  return virgula;
}
splitSentence("dada dada");

// Desafio 4
function concatName(arr) {
 let invertNome = arr[arr.length -1] + ", " + arr[0];
 
 return  invertNome;
  }z
console.log(concatName([]));

// Desafio 5
function footballPoints(wins,ties) {
  wins = wins * 3;console.log
  ties = ties *  1;
  let pontos= wins + ties; 
  return pontos;
}
footballPoints();

// Desafio 6
function highestCount(arr) {
  let maior = arr[0];
  let repeticao= 0
  for(i = 0; i<arr.length; i+= 1){
     if (arr[i]> maior){
       maior = arr[i]
 
     }
  }  
  for(i = 0; i<arr.length; i+= 1){
     if (arr[i]=== maior){
       repeticao += 1
     }
     }
 return repeticao
 }
 highestCount([0,0,0])


// Desafio 7
function catAndMouse(rat, cat1, cat2) {
  
  if((Math.abs(cat1-rat))<(Math.abs(cat2-rat))){
    return "cat1"
} else if((Math.abs(rat-cat1))===(Math.abs(rat-cat2))){
    return 'os gatos trombam e o rato foge'
}else {
    return "cat2"
}

}
catAndMouse(1,0,2)


// Desafio 8
function fizzBuzz(arr) {
  let result=[]
   for(i=0;i<arr.length; i+=1){
     if((arr[i]%3===0)&&(arr[i]%5===0)){
        result.push("fizzBuzz")
     }else if (arr[i]%5===0){
         result.push ("buzz")
     }else if (arr[i]%3===0){
         result.push ("fizz")
     }else{
         result.push ("bug!")
     }
   } 
   return result
}
fizzBuzz([])
// Desafio 9
function encode(hash) {
  let code = hash;
   for(let i = 0; i < hash.length; i += 1){
    if (hash[i]==="a","e","i","o","u"){
      code= code.replace("a",1)
      code= code.replace("e", 2)
      code= code.replace("i", 3)
      code= code.replace("o", 4)
      code= code.replace("u", 5)
    }
 }
 return code;
}
encode("go trybe")

function decode(GTX) {
  let descode=GTX;
 for(i=0;i<GTX.length; i+= 1){
    if (GTX[i]==="1","2","3","4","5"){
      descode= descode.replace("1","a")
      descode= descode.replace("2", "e")
      descode= descode.replace("3", "i")
      descode= descode.replace("4", "o")
      descode= descode.replace('5', 'u')
    }
 }
 return descode;
}
decode("go trybe")

// Desafio 10
function techList(tec,nom) {
  let obje =tec.sort()
  if (obje ==0){
        obje ="Vazio!"
  }else {
    for(let key in obje){
      obje[key]={
        tech: obje[key],
        name: nom
      }
    }
   
  }
  return obje
}
// Desafio 11
function generatePhoneNumber(arr) {
    let repts= {}
    let telefone=0
    arr.forEach((rept) => { repts[rept]= (repts[rept]  || 0 ) +1;
     });
       let numRept= Math.max(...Object.values(repts));
       if(arr.length!=11 || arr.length=== ([])){
        return 'Array com tamanho incorreto.'
       }
       for(let i=0; i<arr.length;i+=1){
       if(arr[i]>9 || arr[i]<0 || numRept>2 ){
         return'não é possível gerar um número de telefone com esses valores'
      
      }
      }
      let ooo=arr.join(',')
              
      telefone=ooo.replace(/\D+/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2")
      
    return telefone
    
  }
  generatePhoneNumber([0,1,2,3,4,5,6,7,8,9,0,])
  
  // Desafio 12
  function triangleCheck(l1,l2,l3) {
    let triangulo;
    if (Math.abs(l1+l2>l3 && l1+l3>l2 && l2+l3>l1)){
      triangulo= true
        }else {
        triangulo= false
        }
       return triangulo
  }
  triangleCheck(80,10,8)
  
  // Desafio 13
  function hydrate(bar) {
    let barTender= bar.replace(/[^0-9]/g, '').split([ ,])
      let garcom=0
      
      for(let i=0;i<barTender.length;i+=1){
          garcom+= Number(barTender[i])
          
      }
     if (garcom>1){
      return garcom+= " copos de água" 
     }else{
         return garcom+= ' copo de água'
     }
      
      
    }
    hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')
  
  
  
 
  