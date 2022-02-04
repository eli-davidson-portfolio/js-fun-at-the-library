function createLibrary(name) {
  var denverLibrary = {};
  if(name !== undefined) {
    denverLibrary.name = name;
  }
  denverLibrary.shelves = {
    fantasy: [],
    fiction: [],
    nonFiction: []
  };
  return denverLibrary;
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)
  } else if (book.genre === 'fiction') {
    library.shelves.fiction.push(book)
  } else {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook (library, bookTitle) {

  if (library.shelves.fantasy.length > 0 && library.shelves.fantasy[0].title === bookTitle)  {
      library.shelves.fantasy.pop()
  } else if (library.shelves.nonFiction.length > 0 && library.shelves.nonFiction[0].title === bookTitle)  { 
      library.shelves.nonFiction.pop()    
  } else if (library.shelves.fiction.length > 0 && library.shelves.fiction[0].title === bookTitle) {
      library.shelves.fiction.pop()
    } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
    }
  return `You have now checked out ${bookTitle} from the ${library.name}`
  
}

module.exports = {
   createLibrary,
    addBook,
   checkoutBook
};