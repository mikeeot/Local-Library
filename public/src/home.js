function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned === false).length;
}

function genreCounter(genres, genreName) {
  const existingGenre = genres.find(genre => genre.name === genreName) 
  existingGenre ? existingGenre.count++ : genres.push({name: genreName, count: 1});
}

function getMostCommonGenres(books) {
  const genres = [];
  books.forEach(book => {
    genreCounter(genres, book.genre)
  });
  genres.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1);
  genres.splice(5);
  return genres;
}


function getMostPopularBooks(books) {
  const borrowed = [];
  books.forEach(book => {
    const popularity = book.borrows.length;
    borrowed.push({name: book.title, count: popularity});
  });
  borrowed.sort((book1, book2) => book1.count > book2.count ? -1 : 1);
  borrowed.splice(5);
  return borrowed;
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  books.forEach(book => {
    const popularBook = book.borrows.length;
    const author = authors.find(author => author.id === book.authorId)
    popularAuthors.push({name: `${author.name.first} ${author.name.last}`, count: popularBook})
  });
  popularAuthors.sort((author1, author2) => author1.count > author2.count ? -1 : 1);
  popularAuthors.splice(5);
  return popularAuthors;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
