// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO

const getHobbies = (hobbyOne = "Programming DEFAULT", hobbyTwo = "Gaming DEFAULT", hobbyThree = "Rugby DEFAULT") => {
    const hobbiesList = [];

    if (hobbyOne) hobbiesList.push(hobbyOne);
    if (hobbyTwo) hobbiesList.push(hobbyTwo);
    if (hobbyThree) hobbiesList.push(hobbyThree);

    return hobbiesList;
}

module.exports = { getHobbies };