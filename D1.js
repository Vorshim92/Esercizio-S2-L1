/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// i principali datatype sono Stringhe, Numeri, Booleans, Undefined e NULL. Su JS bisogna tenere a mente che non c'è bisogno di definire questo tipo all'interno della variabile, sarà il linguaggio stesso a comprenderlo.
// Il TIPO quindi sarà un valore intrinseco che dovremo noi definire meglio durante la dichiarazione della variabile!

// 1. STRINGHE
let stringa1 = "String";
let stringa2 = "10"; // anche questo "numero" 10 verrà visto come una stringa e non come un numero.
console.log("ES1.1 - ", typeof stringa2);

// 2. NUMERI
let numero = 10; // questi valori vengono visti effettivamente come tipo "NUMERO".
let numero2 = -12;
let numero3 = 15.5;
console.log("ES1.2 - ", typeof numero);

// 3. BOOLEANS
let ciao = true; // questa variabile avrà un valore boolean forzato su TRUE.
console.log("ES1.3 - ", typeof ciao, ciao);
ciao = false; // adesso invece avrà un valore boolean forzato su FALSE.
console.log("ES1.3 - ", typeof ciao, ciao);

// 4. UNDEFINED
let indefinito; // Non è definito o assegnato a nulla.
console.log("ES1.4 - ", typeof indefinito);

// 5. NULL
let nullo = null;
console.log("ES1.5 - ", typeof nullo);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Stefano";
console.log("ES2 - ", "il mio nome è: " + myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
console.log("ES3 - ", "La somma dei due numeri è: ", num1 + num2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("ES4 - ", "x è uguale a: " + x);

/* ESERCIZIO 5
  1) Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  2) Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Francesco";
console.log("ES5.1 - ", "Il mio nuovo nome è ", myName);

const test = "fungo";
try {
  test = "pianta";
} catch (error) {
  console.error("ES5.2 - :", error.message);
}
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES6 - :", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log("ES7 - :", name1 === name2);

/* EXTRA */
console.log("EXTRA - ", name1.toLowerCase() === name2.toLowerCase());
