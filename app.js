// Parent class: Media
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    } else {
      console.log("Please enter a rating between 1 and 5.");
    }
  }

  getAverageRating() {
    if (this._ratings.length === 0) {
      return 0;
    }
    const sum = this._ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / this._ratings.length;
  }
}

// Subclass: Book
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// Subclass: Movie
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Subclass: CD
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

// Create instances and test the methods

// Book instance
const book1 = new Book("J.K. Rowling", "Harry Potter", 500);
book1.addRating(5);
book1.addRating(4);
console.log(`Average rating for ${book1.title}: ${book1.getAverageRating()}`);  // Output: 4.5
book1.toggleCheckOutStatus();
console.log(`${book1.title} is checked out: ${book1.isCheckedOut}`);  // Output: true

// Movie instance
const movie1 = new Movie("Steven Spielberg", "Jurassic Park", 127);
movie1.addRating(5);
console.log(`Average rating for ${movie1.title}: ${movie1.getAverageRating()}`);  // Output: 5
movie1.toggleCheckOutStatus();
console.log(`${movie1.title} is checked out: ${movie1.isCheckedOut}`);  // Output: true

// CD instance
const cd1 = new CD("The Beatles", "Abbey Road", ["Come Together", "Something"]);
cd1.addRating(5);
cd1.addRating(4);
console.log(`Average rating for ${cd1.title}: ${cd1.getAverageRating()}`);  // Output: 4.5
cd1.toggleCheckOutStatus();
console.log(`${cd1.title} is checked out: ${cd1.isCheckedOut}`);  // Output: true

console.log(`Songs in ${cd1.title}: ${cd1.songs.join(", ")}`);  // Output: Come Together, Something
