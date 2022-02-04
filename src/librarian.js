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
      var currentGenre = availableGenres[i];
      for (var j = 0; j < this.library.shelves[currentGenre].length; j++) {
        if (this.library.shelves[currentGenre][j].title === bookTitle) {
          this.library.shelves[currentGenre].splice(j, 1);
          return `Yes, we have ${bookTitle}`
        }
      }
    } return `Sorry, we do not have ${bookTitle}`
  }
  
  calculateLateFee(daysLate) {
    var fee;
    fee = Math.ceil(daysLate * .25);
    return fee;
  }  
}

module.exports = Librarian;