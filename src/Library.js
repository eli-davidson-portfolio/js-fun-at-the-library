function createLibrary(name) {
  return {
      name: name,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: []
      }
    }
  };
  

function addBook(library, book) {
  //pushes new book object to the array using bracket notation
    library.shelves[book.genre].push(book)
}

function checkoutBook (library, bookTitle, genre) {
    for (var i = 0; i < library.shelves[genre].length; i++) {
      if (library.shelves[genre][i].title === bookTitle) {
        library.shelves[genre].splice(i, 1)
        return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}` 
}

module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};