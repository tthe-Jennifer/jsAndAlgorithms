const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== ''){
      records[id][prop] = value;
    }
    else if (prop === 'tracks' && records[id].hasOwnProperty(prop) === false){
      records[id][prop] = [value];

    }else if (prop === 'tracks' && value !== ''){
    records[id][prop].push(value);
  }
  else if (value === ''){
    delete records[id][prop];
  }

    return records;
   }

  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

  var total = 0;
  const Azz = [2, 4, 6, 8, 10];
for (let i = 0; i < Azz.length; i++){
  total += Azz[i];
  console.log(total);
}

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


