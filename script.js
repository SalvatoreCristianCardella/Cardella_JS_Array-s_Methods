/*ESERCIZI JAVASCRIPT - METODI DEGLI ARRAY

ES 1: Metti un po' d'ordine
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
  Variante:
  Prova ad ordinali in modo crescente.*/ 
/*let num = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
function crescente(array){
    return array.sort((a,b)=>a-b);
}
function decrescente(array){
    return array.sort((a,b)=>b-a);
}
console.log(num)
console.log(`In ordine crescente è ${crescente(num)}, in ordine decrescente è ${decrescente(num)}`);*/

/*ES 2: Scrivi una funzione che permetta di calcolare la somma dei numeri all’interno di un array:

dato di partenza, let numbers = [10, 20, 30, 40];
il risultato dovra’ restituire = 100;*/
/*let numbers = [10, 20, 30, 40];
function somma(array) {
    return array.reduce((acc,n)=>acc+n)
}
console.log(`l'array è ${numbers} e la somma è ${somma(numbers)}`);*/


/*ES 3: Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:
  Esempio:

    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2] 

  Variante:

  Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. */
  /*let a = [3, 5, 10, 2, 8];
  function media(array) {
    let sum = array.reduce((acc,n)=>acc+n);
    return sum/array.length;
  }
  let mediaA = media(a);
  let maggiori = a.filter((a)=>a>mediaA)
  let minori = a.filter((a)=>a<mediaA)
  console.log(`media = ${mediaA},valori minori = ${minori}, sono ${minori.length} , valori maggiori = ${maggiori}, sono ${maggiori.length}`);*/

/*ES 4:  Scrivere una funzione che prenda come input un numero e generi un array composto da n numeri casuali compresi tra 1 e 10.

Esempio: Input= 5    Output= [5, 9, 1, 6, 10]
//Usiamo questa formula per generare un numero random

Math.floor(Math.random() * (max - min + 1) + min);*/
/*let n = prompt('inserisci da quante cifre deve essere composto l array')
function generatorArray(x) {
    let a = [];
    for (let i = 0; i < x; i++) {
        a.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
    }
    return a
}
let array = generatorArray(n);
console.log(`questo è l'array generato ${array}`);*/