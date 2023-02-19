class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  
  //Below our Surgeon class, we use the new keyword to create an instance of our Surgoen class. Let’s consider the line of code step-by-step.
  
  //We create a new variable named surgeonRomero that will store an instance of our Surgeon class.
  //We use the new keyword to generate a new instance of the Surgeon class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
  //We pass the ''Francisco Romero', 'Cardiovascular' string to the Dog constructor, which sets the name property to 'Francisco Romero'.
  //Finally, we log the value saved to the name key in our surgeonRomero object, which logs 'Francisco Romero' to the console.
  //Now you know how to create instances. In the next exercise, you will learn how to add getters, setters, and methods.