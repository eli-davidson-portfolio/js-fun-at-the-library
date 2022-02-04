function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return mainCharacter;
}

function saveReview(review, reviews) {
  if(!reviews.includes(review)) {
    reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  return pageCount; 
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  };
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
