// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO


const getFullName = (firstName = "Federico DEFAULT", lastName = "Bacci DEFAULT") => {
    const fullName = { firstName, lastName };
    return fullName;
}

module.exports = { getFullName };