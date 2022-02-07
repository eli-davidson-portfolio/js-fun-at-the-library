function createLibrary(name) {
  //return an new library object with a name and newly created shelves
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
  //loop through each bool on the shelf targeting the genre through bracket notation passing a string
    for (var i = 0; i < library.shelves[genre].length; i++) {
      //if the tatget book is found
      if (library.shelves[genre][i].title === bookTitle) {
        //remve the book from the shelf and return happy path message
        library.shelves[genre].splice(i, 1)
        return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
//if the entire shelf is searched without finding the book, then send the sad path message
return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}` 
}

module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};