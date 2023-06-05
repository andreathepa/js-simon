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



//Facciamo comparire un messaggio di istruzioni

setTimeout(function(){
    let messaggio = document.getElementById('messaggio');
    messaggio.innerHTML += `Ora scrivi uno alla volta i numeri che ricordi`;

}, seconds * 5000)


//Inseriamo le array vuote da riempire con score user, sbagliate, giuste, totale

let score_user = [];

let score_right = [];

let score_wrong = [];

let tot_score = 0;

//Inseriamo singoli prompt

// setTimeout(function(){
    
// let question_1 = parseInt(prompt('Inserisci il valore del primo numero'));
// let question_2 = parseInt(prompt('Inserisci il valore del secondo numero'));
// let question_3 = parseInt(prompt('Inserisci il valore del terzo numero'));
// let question_4 = parseInt(prompt('Inserisci il valore del quarto numero'));
// let question_5 = parseInt(prompt('Inserisci il valore del quinto numero'));

// score_user = [question_1,question_2,question_3,question_4,question_5];

// //Inseriamo un ciclo che mi permetta di far ciclare l'array random per pushare nelle array vuote

//     for( let i=0; i<arr_random_num.length; i++){
//         let numbers = arr_random_num[i];

//         if(score_user.includes(numbers)){
//             score_right.push(score_user[i]);
//             tot_score++
//         }
//         else{
//             score_wrong.push(score_user[i]);
//         }
//     }

//     //fare apparire i risultati finali

//     let final_result = document.getElementById('risultato_fin');

//     final_result.innerHTML += 
//     `
//     <li>Il tuo punteggio: ${tot_score}</li>
//     <li>Hai indovinato i numeri: ${score_right}</li>
//     <li>Hai sbagliato i numeri: ${score_wrong}</li>
//     `;




// }, seconds * 7000)


//Cambiare il messaggio d'istruzione in un messaggio finale


// setTimeout(function(){
//     let messaggio = document.getElementById('messaggio');
//     messaggio.innerHTML = `Final score`;

// }, seconds * 7000)

//Inseriamo singoli prompt
setTimeout(function(){
    
    let question_1 = parseInt(prompt('Inserisci il valore del primo numero'));
    while (isNaN(question_1)) {
        question_1 = parseInt(prompt('Il valore inserito non è valido, inserisci un valore numerico'));
    }

    let question_2 = parseInt(prompt('Inserisci il valore del secondo numero'));
    while (isNaN(question_2)) {
        question_2 = parseInt(prompt('Il valore inserito non è valido, inserisci un valore numerico'));
    }

    let question_3 = parseInt(prompt('Inserisci il valore del terzo numero'));
    while (isNaN(question_3)) {
        question_3 = parseInt(prompt('Il valore inserito non è valido, inserisci un valore numerico'));
    }

    let question_4 = parseInt(prompt('Inserisci il valore del quarto numero'));
    while (isNaN(question_4)) {
        question_4 = parseInt(prompt('Il valore inserito non è valido, inserisci un valore numerico'));
    }

    let question_5 = parseInt(prompt('Inserisci il valore del quinto numero'));
    while (isNaN(question_5)) {
        question_5 = parseInt(prompt('Il valore inserito non è valido, inserisci un valore numerico'));
    }

    score_user = [question_1,question_2,question_3,question_4,question_5];

    //Inseriamo un ciclo che mi permetta di far ciclare l'array random per pushare nelle array vuote

    for( let i=0; i<arr_random_num.length; i++){
        let random_num = arr_random_num[i];

        if(score_user.includes(random_num)){
            score_right.push(random_num);
            tot_score++
        }
        else{
            score_wrong.push(random_num);
        }
    }

    //fare apparire i risultati finali

    let final_result = document.getElementById('risultato_fin');

    final_result.innerHTML += 
    `
    <li>Il tuo punteggio: ${tot_score}</li>
    <li>Hai indovinato i numeri: ${score_right}</li>
    <li>Hai sbagliato i numeri: ${score_wrong}</li>
    `;

}, seconds * 7000)







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

