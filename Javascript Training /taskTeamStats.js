const team = {
    _players: [
      {firstName: 'Lionel', lastName: 'Messi', age: 35},
      {firstName: 'Neymar', lastName: 'Dos Santos', age: 31},
      {firstName: 'Kylian', lastName: 'Mbappe', age: 24}
    ],
    _games: [
      {opponent: 'LOSC', teamPoints: '54', opponetPoints: 41},
      {opponent: 'Marsielle', teamPoints: '57', opponetPoints: 49},
      {opponent: 'Nantes', teamPoints: '60', opponetPoints: 28}
    ],
   
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    //making a method that contains an object to add new info
   addPlayer(newFirstName, newLastName, newAge){
     let player = {
     firstName: newFirstName,
     lastName: newLastName,
     age: newAge
   };
   this.players.push(player)
   },
   
   //method for adding game result
   addGame(newOpponent, newTeamPoints, newOpponentPoints){
     let game = {
       opponent: newOpponent,
       teamPoints: newTeamPoints,
       opponentPoints: newOpponentPoints
     };
     this.games.push(game)
   }
   };
   
   team.addPlayer('Sergio', 'Ramos', 35);
   team.addGame('Bayern Munich', 3, 0);
   console.log(team._players);
   console.log(team._games);