// Stampare 5 numeri in pagina
// Creare array
// Stampare con innerhtml elementi in pagina

let numeri = ['3','5','6','11','20'];

console.log(numeri)

stampa_numeri = document.getElementById('numeri');


for (i=0; i<numeri.length; i++){

    let item = numeri[i];
    
    stampa_numeri.innerHTML += `<li>${item}</li>`;
}






// Impostare un timer di 30 secondi

// Al termine del timer far sparire i numeri

// Far apparire 5 prompt

// pushare i numeri in un'array
// se tutti i numeri sono uguali all'array iniziale, allora il gioco finisce
// altrimenti si riporta che ha perso