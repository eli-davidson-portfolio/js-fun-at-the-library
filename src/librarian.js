class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, isMorning) {
    if(isMorning) {
      return `Good morning, ${patronName}!`;
    }
    return `Hello, ${patronName}!`;
  }
  findBook(bookTitle) {
    var availableGenres = [
      'nonFiction',
      'fiction',
      'fantasy',
    ]
  
    for (var i = 0; i < availableGenres.length; i++) {
      for (var j = 0; j < this.library.shelves[availableGenres[i]].length; j++) {
        if (this.library.shelves[availableGenres[i]][j].title === bookTitle) {
          this.library.shelves[availableGenres[i]].splice(j, 1);
          return `Yes, we have ${bookTitle}`
        }
      }
    } return `Sorry, we do not have ${bookTitle}`
  }
  
  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }  
}

module.exports = Librarian;