// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO

// * RIGA DI CODICE DA ESEGUIRE DA TERMINALE A PARTIRE DA: C:\Users\bacci\Desktop\# 2025-02-05 CORSO BOOLEAN\# LEZIONI\2025-05-08 LEZIONE 39\commonjs-modules\assets\js
// * DA QUI ARRIVANO I PARAMETRI UTILIZZATI NELLE DUE FUNZIONI
// node people.js "Federico2" "Bacci2" "Hobby 1" "Hobby 2" "Hobby 3"
const { getFullName } = require('./names.js');
const { getHobbies } = require('./hobbies.js');


// console.debug(getFullName(process.argv[2], process.argv[3]));
// console.debug(getFullName("Federico"));
// console.debug(getFullName("Federico", "Bacci"));



// console.debug(getHobbies(process.argv[4], process.argv[5], process.argv[6]));
// console.debug(getHobbies("Hobby N° 1", "Hobby N° 2", "Hobby N° 3"));
// console.debug(getHobbies("Hobby N° 1", "Hobby N° 2"));



const init = () => {

    // const person = {
    //     fullName: getFullName(),
    //     hobbies: getHobbies()
    // }
    const person = {
        fullName: getFullName(process.argv[2], process.argv[3]),
        hobbies: getHobbies(process.argv[4], process.argv[5], process.argv[6])
    }

    console.log(person)

    return person;
}

init();