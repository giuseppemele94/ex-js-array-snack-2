/** SNACK 5 BONUS RACCOGLI I LIBRI 
 * Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() 
 * e Promise.all(), 
 * per creare una funzione (getBooks) che a partire da un array di id (ids), 
 * ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] .
 */

const ids = [2,13,7,21,19];


async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}


async function getBooks(ids) {

    try {
        const promises = ids.map((id) => {
            return fetchJson(`http://localhost:3333/books/${id}`);
        });

        const books = await Promise.all(promises);
        return books;
    } catch (error) {
        throw new Error("Errore nel recupero dei dati ", error.message);
    }
}


// test
getBooks(ids)
    .then((books) => {
        console.log(books);
    })
    .catch((error) => {
        console.error("Errore:", error);
    });