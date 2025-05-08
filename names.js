// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO



/**
 * Funzione che riceve il nome e il cognome della persona e li usa per generare un oggetto contenente le informazioni ricevute
 * @param {string} firstName `= John` Nome (valore) della persona
 * @param {string} lastName `= Doe` Cognome (valore) della persona
 * @returns {object} Oggetto contenente le chiavi firstName e lastName con i valori ricevuti
 */
// const getFullName = (firstName, lastName) => {
const getFullName = (firstName = "John", lastName = "Doe") => {
    // * AVENDO IMPOSTATO I VALORI DI DEFAULT QUESTO CONTROLLO NON SERVIREBBE, MA CONCETTUALMENTE NON MI SEMBRA CORRETTO DARE UN DEFAULT: IN CASO DI ASSENZA DEI VALORI MI SEMBREREBBE PIU CORRETTO BLOCCARE L'INVIO DELLA RICHIESTA CHE ME LI FA OTTENERE, AVVERTIRE L'UTENTE E FARGLI REINVIARE LE INFORMAZIONI
    if (!firstName || !lastName) throw new Error("Il nome o il cognome sono mancanti");

    const fullName = { firstName, lastName };
    return fullName;
};

module.exports = { getFullName };