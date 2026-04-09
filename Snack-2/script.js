
/** Snack 2 - Il primo libro scontato
 */


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

console.log(books);


// 1) Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter((book) => {
    return book.available === true;
})

console.log("Libri disponibili :", availableBooks); 


// 2) Crea un array (discountedBooks) con gli availableBooks, 
// ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map((book) => {
    //trasformo i prezzi in numeri dato che sono stringhe 
    const numericPrice = parseFloat(book.price.replace("€", ""));
    const discountedPrice = (numericPrice * 0.8).toFixed(2); 

     return {
    ...book,
    price: `${discountedPrice}€`
  };
    
})

console.log("Libri disponibili con sconto del 20%", discountedBooks); 

// 3) Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((book) => {
    const numericPrice =parseFloat(book.price.replace("€", "")); 
    return Number.isInteger(numericPrice);
})
console.log("Libro con prezzo intero (senza centesimi)", fullPricedBook); 


