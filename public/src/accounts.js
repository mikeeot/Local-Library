function findAccountById(accounts, id) {
  return accounts.find((user) => user.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((user1, user2) => (user1.name.last > user2.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    return acc + book.borrows.filter(borrow => borrow.id === account.id).length;
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBook = books.filter(book => book.borrows.some(borrow => borrow.id === account.id && borrow.returned === false));
  let authorOfBook = authors.filter(author => borrowedBook.some(book => book.authorId === author.id));
  return borrowedBook.map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {...book, author};
  });
} 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
