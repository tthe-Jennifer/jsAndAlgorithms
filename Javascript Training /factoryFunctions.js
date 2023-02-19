const robotFactory1 = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const newRobot1 = robotFactory1('P-501', false)
  console.log(newRobot1.model)
  console.log(newRobot1.mobile)
  
  
  //or in the new ES6 shorthand method
  const robotFactory2 = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot2 = robotFactory('P-501', false)
  console.log(newRobot2.model)
  console.log(newRobot2.mobile)

//or
const myDetails = (name, age, occupation, relationshipStatus, quote) => {
    return{
      name,
      age,
      occupation,
      relationshipStatus,
      quote(){
        return quote;
      }
    }
  };
  
  const Jennifer = myDetails('Jennifer', 23, 'RFI Specialist', 'In a relationship', 'Do your best!')
  console.log(Jennifer);
  console.log(Jennifer.quote());
  const Jenniferr = (Object.assign(Jennifer, {hobbies: ['Dancing', 'cooking', 'singing']}));
  console.log(Jenniferr);