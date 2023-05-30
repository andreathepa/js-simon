// Stampare 5 numeri in pagina
// Creare array
// Stampare con innerhtml elementi in pagina


let numeri = ['3','5','6','11','20'];
stampa_numeri = document.getElementById('numeri');

for (i=0; i<numeri.length; i++){

    let item = numeri[i];
    
    stampa_numeri.innerHTML += `<li>${item}</li>`;
}
    
//Far sparire i numeri dopo 30 secondi (5secondi test)

let seconds = 5;

let interval = setInterval(function(){


    if(seconds === 0){
        clearInterval(interval);
        stampa_numeri.innerHTML = ``;


    }
    else{
        seconds--;

    }

}, 1000);

//Messaggio di istruzioni

let messaggio = document.getElementById('messaggio')
let chiedo_1;
let chiedo_2;

setTimeout(function(){

    messaggio.innerHTML += `Ora scrivi uno alla volta i numeri che ricordi`;

}, 6000)

//Far apparire i prompt

setTimeout(function(){

    chiedo_1 = parseInt(prompt('Dimmi il primo numero che hai visto'));

    if(chiedo_1 == 3){
        alert('Hai vinto')
    }
    else{
        alert('hai perso')
    }
    

}, 11000)

setTimeout(function(){

    chiedo_2 = parseInt(prompt('Dimmi il secondo numero che hai visto'));

    if(chiedo_2 == 5){
        alert('Hai vinto')
    }
    else{
        alert('hai perso')
    }
    

}, 11000)





// Far apparire 5 prompt

// pushare i numeri in un'array
// se tutti i numeri sono uguali all'array iniziale, allora il gioco finisce
// altrimenti si riporta che ha perso