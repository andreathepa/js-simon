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

let messaggio = document.getElementById('messaggio')

setTimeout(function(){

    messaggio.innerHTML += `Ora scrivi uno alla volta i numeri che ricordi`;

}, 6000)

setTimeout(function(){

    let chiedo_1 = prompt('Dimmi il primo numero che hai visto')

}, 11000)



// Far apparire 5 prompt

// pushare i numeri in un'array
// se tutti i numeri sono uguali all'array iniziale, allora il gioco finisce
// altrimenti si riporta che ha perso