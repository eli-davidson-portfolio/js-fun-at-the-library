function createLibrary(name) {
  var library = {};
  
  if(name !== undefined) {
    library.name = name;
  }

  library.shelves = {
    fantasy: [],
    fiction: [],
    nonFiction: []
  };
  return library;
}

function addBook(library, book) {
    library.shelves[book.genre].push(book)
}

function checkoutBook (library, bookTitle) {
  var availableGenres = [
    'nonFiction',
    'fiction',
    'fantasy',
  ] 
  
  for (var i = 0; i < availableGenres.length; i++) {
    var currentGenre = availableGenres[i];
    for (var j = 0; j < library.shelves[currentGenre].length; j++) {
      if (library.shelves[currentGenre][j].title === bookTitle) {
        library.shelves[currentGenre].splice(j, 1)
        return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
  } 
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
   createLibrary,
    addBook,
   checkoutBook
};