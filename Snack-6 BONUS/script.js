/** SNACK-6 BONUS Ordina i libri  */

const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];



// 1) Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.

const areThereAvaiableBooks = books.some((book) => {
    return book.available ;
})

console.log("Ci sono libri disponibili?", areThereAvaiableBooks); 

// 2) Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
const bookByPrice = books.sort((a,b) => {
     const priceA = parseFloat(a.price.replace("€", ""));
     const priceB = parseFloat(b.price.replace("€", ""));
    return priceA - priceB;
})

console.log(bookByPrice); 

// 3) Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.
bookByPrice.sort((a,b) => {
    return b.available - a.available; 
})
console.log(bookByPrice); 