//Facciamo apparire 5 numeri casuali

//Scriviamo prima l'array con i numeri casuali

let arr_random_num = [];

let random_num = document.getElementById('risultato_fin');

let seconds = 1;

//Scriviamo funzione che genera 5 numeri random

function generate_number(min,max){
    for(let i=0; i<5; i++){
        arr_random_num[i] = Math.floor(Math.random() * (max - min + 1) + min);

    }
    return arr_random_num;
}

//Invochiamo funzione e stampiamola in pagina

generate_number(1, 100);
console.log(arr_random_num)

random_num.innerText += arr_random_num;

//Facciamo sparire dopo il timer i numeri

setTimeout(function(){
    random_num.innerText='';
}, seconds * 5000)

setTimeout(function(){
    let messaggio = document.getElementById('messaggio')
    messaggio.innerHTML += `Ora scrivi uno alla volta i numeri che ricordi`;

}, seconds * 5000)










































// // Stampare 5 numeri in pagina
// // Creare array
// // Stampare con innerhtml elementi in pagina


// let numeri = ['3','5','6','11','20'];
// stampa_numeri = document.getElementById('numeri');

// for (i=0; i<numeri.length; i++){

//     let item = numeri[i];
    
//     stampa_numeri.innerHTML += `<li>${item}</li>`;
// }
    
// //Far sparire i numeri dopo 30 secondi (5secondi test)

// let seconds = 5;

// let interval = setInterval(function(){


//     if(seconds === 0){
//         clearInterval(interval);
//         stampa_numeri.innerHTML = ``;


//     }
//     else{
//         seconds--;

//     }

// }, 1000);

// //Messaggio di istruzioni

// let messaggio = document.getElementById('messaggio')
// let chiedo_1;
// let chiedo_2;
// let chiedo_3;
// let chiedo_4;
// let chiedo_5;

// let right = [];
// let wrong = [];

// setTimeout(function(){

//     messaggio.innerHTML += `Ora scrivi uno alla volta i numeri che ricordi`;

// }, 6000)

// //Far apparire i prompt

// setTimeout(function(){

//     chiedo_1 = parseInt(prompt('Dimmi il primo numero che hai visto'));

//     if(chiedo_1 == 3){
//         right.push(chiedo_1)
        
//     }
//     else{
//         wrong.push(chiedo_1)
//     }
    

// }, 11000)

// setTimeout(function(){

//     chiedo_2 = parseInt(prompt('Dimmi il secondo numero che hai visto'));

//     if(chiedo_2 == 5){
//         right.push(chiedo_2)
//     }
//     else{
//         wrong.push(chiedo_2)
//     }
    

// }, 11000)

// setTimeout(function(){

//     chiedo_3 = parseInt(prompt('Dimmi il terzo numero che hai visto'));

//     if(chiedo_3 == 6){
//         right.push(chiedo_3)
//     }
//     else{
//         wrong.push(chiedo_3)
//     }
    

// }, 11000)

// setTimeout(function(){

//     chiedo_4 = parseInt(prompt('Dimmi il quarto numero che hai visto'));

//     if(chiedo_4 == 11){
//         right.push(chiedo_4)
//     }
//     else{
//         wrong.push(chiedo_4)
//     }
    

// }, 11000)

// setTimeout(function(){

//     chiedo_5 = parseInt(prompt('Dimmi il quinto numero che hai visto'));

//     if(chiedo_5 == 20){
//         right.push(chiedo_5)
//     }
//     else{
//         wrong.push(chiedo_5)
//     }

       

// }, 11000)

// setTimeout(function(){

//     let risultato_fin = document.getElementById('risultato_fin')


//     if(right == numeri){

//         risultato_fin.innerHTML += `Hai scritto correttamente tutti i numeri`;

        
//     }
//     else{
//         risultato_fin.innerHTML += `Hai perso`;

//     }
    

// }, 11000)


// console.log(right)
// console.log(wrong)
// let risultato_fin = document.getElementById('risultato_fin')


// // Far apparire 5 prompt

// // pushare i numeri in un'array
// // se tutti i numeri sono uguali all'array iniziale, allora il gioco finisce
// // altrimenti si riporta che ha perso

