let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew.captain['favorite foods'][0]; //0th index in the favorite food array
  
  //spaceship.passengers = ['Jennifer', 'Lucky', 'Favour'];
  //assigning names and key to nul passengers info
  spaceship.passengers = [{name: 'Jennifer', like: 'Lucky', sister: 'Favour'}, {name: 'Lucky', like: 'Jennifer, Maybe', sister: 'Angela'}];
  //assigning the element in the 0th index of the spaceship.passengers
  let firstPassenger = spaceship.passengers[0];
  console.log(spaceship.passengers)