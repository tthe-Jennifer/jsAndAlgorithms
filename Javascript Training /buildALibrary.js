class Media{
    constructor(name) {
      this._title = name;
      this._isCheckedOut = false;
      this._ratings= [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    getAverageRatings(){
      let sumArray = this.ratings.reduce((accumulator, ratings) =>
        accumulator + ratings)
    return sumArray/(this.ratings.length - 1);
    }
     addRating(value) {
       if (value >= 1 && value <= 5){
      this._ratings.push(value);
    } else {
      return 'Please give a valid Rating';
    }
    }
  };

    class Book extends Media{
    constructor (name, author, pages) {
      super(name);
      this._author = author;
      this._pages = 0;  
      }
      get author() {
      return this._author;
      }
      get pages() {
        return this._pages;
      }
      addPages(newPages){
        return this._pages += newPages;
      }
  };
  
  class Movie extends Media {
    constructor(name, director, runTime, movieCast){
      super(name);
      this._director = director;
      this._runTime = 0;
      this._movieCast - movieCast;
    }
    get director() {
      return this._director;
    }
    get movieCast() {
      return this._movieCast;
    }
    get runTime() {
      return this._runTime;
    }
    addRunTime(newRunTime) {
      return this._runTime =+ newRunTime;
    }
  };
  
  class CD extends Media {
    constructor(name, artist, songs, songTitles) {
      super(name);
      this._artist = artist;
      this._songs = songs;
      this._songTitles = songTitles;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    get songTitles() {
      return this._SongTitles
    }
    shuffle(){
      let randomSongs = Math.floor((Math.random)* (songs.length - 1));
      return songs[randomSongs];
    }
  };

  class Catalog{
    constructor(name, isCheckedOut, ratings){
      //super(name);
      name = this._title;
      isCheckedOut = this._isCheckedOut;
      ratings = this._ratings;

    }
  };
    
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRatings());

const speed = new Movie ('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(7);
speed.addRating(5);
speed.addRating(8);
console.log(speed.getAverageRatings());

const catalog = new Catalog(Media);
  console.log(catalog.name);