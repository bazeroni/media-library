class Media {
  constructor(title) {
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckOut() {
    return this._isCheckOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckOut(status) {
    this._isCheckOut = status;
  }

  getAverageRating() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumOfRatings = this._ratings.reduce(reducer);
    return sumOfRatings / this._ratings.length;
  }

  toggleCheckOutStatus() {
    if (this._isCheckOut === false) {
      this._isCheckOut = true;
    } else {
      this._isCheckOut = false;
    }
    return this._isCheckOut;
  }

  addRating(rate) {
    this._ratings.push(rate);
    return this._ratings;
  }
}

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

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating())
