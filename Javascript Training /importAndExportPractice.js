/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
module.exports.circleArea = function(radiusLength) {
return Math.PI * (Math.pow(radiusLength, 2));
};
module.exports.squareArea = function(sideLength) {
return (Math.pow(sideLength, 2))
}

//in another file
/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
const areaFunctions = require('./shape-area.js')
// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

//const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = areaFunctions.circleArea(radius);

const areaOfSquare = areaFunctions.squareArea(sideLength);
