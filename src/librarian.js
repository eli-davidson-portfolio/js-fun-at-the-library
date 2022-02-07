class Librarian {
  //constructor method that accepts a string name, and an object libary
  constructor(name, library) {
    //assign the name and library to properties
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, isMorning) {
    //ismorning is a bool, so if it is in fact morning, 
    if(isMorning) {
      //return happy path message
      return `Good morning, ${patronName}!`;
    }
    //return sad path message
    return `Hello, ${patronName}!`;
  }
  findBook(bookTitle) {
    //create an array containing all genres to iterate through
    //to be replaced with object.keys.forEach() in the future.
    var availableGenres = [
      'nonFiction',
      'fiction',
      'fantasy',
    ]
    //loop through each available genre
    for (var i = 0; i < availableGenres.length; i++) {
      //loop through each book on the shelf
      for (var j = 0; j < this.library.shelves[availableGenres[i]].length; j++) {
        //if the target book is found
        if (this.library.shelves[availableGenres[i]][j].title === bookTitle) {
          //remove the book from the shelf
          this.library.shelves[availableGenres[i]].splice(j, 1);
          //return happy path message
          return `Yes, we have ${bookTitle}`
        }
      }
      //if the entire loop within a loop runs without finding the target book,
      //return sad path message
    } return `Sorry, we do not have ${bookTitle}`
  }
  
  calculateLateFee(daysLate) {
    //25% times days late, rounded up using the ceil method
    return Math.ceil(daysLate * .25);
  }  
}

module.exports = Librarian;