class School {
    constructor(name, level, numberOfStudents, averageTestScores) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = 0;
      this._averageTestScores = 0;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get averageTestScores() {
      return this._averageTestScores;
    }
    calcAverageTestScores(value) {
      let testSum = this.averageTestScores.reduce((acc, averageTestScores) => acc + averageTestScores);
      return testSum /(this.averageTestScores.length - 1);
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    addNumberOfStudents(value){
        return this.numberOfStudents += value;
      };
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number'){
        newNumberOfStudents = this.numberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      } 
    }
    quickFacts() {
      return (`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`)
    };
    static pickSubstituteTeacher(substituteTeachers){
      let randomTeacher= Math.floor((Math.random) * (substituteTeachers.length - 1));
      return substituteTeachers[randomTeacher];
    }
  };
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
      super(name);
      this._level = 'primary';
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  };
  class MiddleSchool extends School {
    constructor(name){
      super(name);
    }
  };
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    } 
    get sportsTeams() {
      console.log(this._sportsTeams);
    }
  };
  class SchoolCatalog extends School{
    constructor(name){
      super(name);
      name = this._name;
      }
  };
  const school = new SchoolCatalog(School);
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury.quickFacts());
  console.log(lorraineHansbury.pickupPolicy)
  School.pickSubstituteTeacher['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
  console.log(SchoolCatalog);