/* eslint-disable no-unused-vars */
class Media {
  constructor(title, yearOfRelease) {
    this.title = title;
    this.yearOfRelease = yearOfRelease;
    this.ratings = [];
  }
  getTitle() {
    return this.title;
  }
  getYearOfRelease() {
    return this.yearOfRelease;
  }
  addRating(rating) {
    if (rating >= 1 && rating <= 100) {
      this.ratings.push(rating);
    } else {
      return `${rating} is not a valid rating, ratings must be 1-100`;
    }
  }
  getAverageRating() {
    if (this.ratings.length === 0) {
      return `this is not rated`;
    }
    const sum = this.ratings.reduce((accum, rating) => accum + rating);
    return Math.round(sum / this.ratings.length);
  }
}

class Album extends Media {
  constructor(title, yearOfRelease, artist, tracks) {
    super(title, yearOfRelease);
    this.artist = artist;
    this.tracks = tracks;
  }
}

class Movie extends Media {
  constructor(title, yearOfRelease, director, runTime) {
    super(title, yearOfRelease);
    this.director = director;
    this.runTime = runTime;
  }
}

class Book extends Movie {
  constructor(title, yearOfRelease, author, pages) {
    super(title, yearOfRelease);
    this.author = author;
    this.pages = pages;
  }
}
