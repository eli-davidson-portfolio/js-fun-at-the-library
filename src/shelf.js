function shelfBook(book, shelf) {
  if(shelf.length < 3) {
    shelf.unshift(book);
  }
}
function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
 var titles = [];
 for(var i = 0; i < shelf.length; i++) {
   titles.push(shelf[i].title)
 }
 return titles.join(', ');
}

function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return true;
    }
  }
  return false
  
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};