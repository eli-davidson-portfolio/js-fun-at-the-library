function createLibrary(name) {
  var library = {};
  
  if(name !== undefined) {
    library.name = name;
  }

  library.shelves = {
    fantasy: [],
    fiction: [],
    nonFiction: []
  }

  return library;
}

function addBook(library, book) {
  //pushes new book object to the array using bracket notation
    library.shelves[book.genre].push(book)
}

function checkoutBook (library, bookTitle) {
  //Has a list of available genres
  //In the future, I would like to make this a dynamic list
  var availableGenres = [
    'nonFiction',
    'fiction',
    'fantasy',
  ] 
  
  //Iterate through the availalbe genres 
  for (var i = 0; i < availableGenres.length; i++) {
    var currentGenre = availableGenres[i];
    //Iterate throught the available books on the shelf
    for (var j = 0; j < library.shelves[currentGenre].length; j++) {
      //If the target book exists on the shelf, delete it.
      if (library.shelves[currentGenre][j].title === bookTitle) {
        /*In the future, we should probably return this object to be put into a list of checked out items rather than having the item deleted completely. */
        library.shelves[currentGenre].splice(j, 1)
        return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
  } 
  //If the program has checked all shelves and has been unable to check out a book
  //make the assumpyion that the book does not exist on any of the shelves, and return the
  //string indicating failure.
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};