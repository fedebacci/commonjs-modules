// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO


// * CON PARAMETRI DEFINITI E VALORI DI DEFAULT (IMPOSSIBILE AGGIUNGERE PIU DI 3)
// const getHobbies = (hobbyOne = "Programming DEFAULT", hobbyTwo = "Gaming DEFAULT", hobbyThree = "Rugby DEFAULT") => {
//     const hobbiesList = [];
//     if (hobbyOne) hobbiesList.push(hobbyOne);
//     if (hobbyTwo) hobbiesList.push(hobbyTwo);
//     if (hobbyThree) hobbiesList.push(hobbyThree);
//     return hobbiesList;
// };



// * CON REST OPERATOR (IMPOSSIBILE DARE DEFAULT, MA N° DI HOBBY VARIABILE E POTENZIALMENTE INFINITO)
/**
 * Funzione che riceve delle stringhe contenenti gli hobby e restituisce un array contenente tutte le stringhe ricevute
 * @param  {...string} hobbies 
 * @returns 
 */
const getHobbies = (...hobbies) => {
    const hobbiesList = [];
    hobbies.forEach(hobby => {
        if (hobby) hobbiesList.push(hobby)
    });
    return hobbiesList;
};

module.exports = { getHobbies };