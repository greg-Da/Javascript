const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let n = 0;
books.forEach(book => {
    if (book.rented !== 0) {
        n++;
    }
})
console.log(n === books.length);

let maxRented;
let max = 0;
books.forEach(book => {
    if (book.rented > max) {
        max = book.rented;
        maxRented = book;
    }
})
console.log(maxRented);


let minRented;
let min = Infinity;
books.forEach(book => {
    if (book.rented < min) {
        min = book.rented;
        minRented = book;
    }
})
console.log(minRented);

let searchBook;
books.forEach(book => {
    if (book.id === 873495) {
        searchBook = book;
    }
})
console.log(searchBook);



let index;
books.forEach((book, i) => {
    if (book.id === 133712) {
        index = i;
    }
})
books.splice(index, 1);
console.log(books);

books.sort((a, b) => {
    if (a.title < b.title) {
        return -1
    } else if (a.title === b.title) {
        return 0
    } else {
        return 1
    }
})
console.log(books);