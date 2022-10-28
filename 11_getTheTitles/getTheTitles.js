const getTheTitles = function(books) {

    const allBooks = books.map(book => `${book.title}`);

    // const allBooks = [];

    // for(let i = 0; i < books.length; i++) {
    //     allBooks.push(books[i].title);
    // }

    return allBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
