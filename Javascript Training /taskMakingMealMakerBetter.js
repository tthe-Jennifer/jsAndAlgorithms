

const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
       return this._meal = mealToCheck;
      } else {
        console.log('pass in a meal')
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
       return this._price = priceToCheck;
        //return priceToCheck;
      } else {
        console.log('pass in a valid price')
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for $${this._price}!`
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
    };
    let mealer = ' '
    const foodNames = ['beans Porridge', 'Jollof rice, plantains and chicken', 'Fried rice and turkey', 'Vegetable sauce and yams'];
    const randomNumber = Math.floor(Math.random()*5);
    mealer = foodNames[randomNumber]; 
    // console.log(mealer);  
    
    const pricer = 0;
    const priceEstimator = () => {
    if (mealer === 'beans Porridge') {
      return pricer += 35;
    } else if (mealer === 'Jollof rice, plantains and chicken') {
      return pricer += 45;
    } else if (mealer === 'Fried rice and turkey') {
      return pricer += 40;
    } else if (mealer === 'Vegetable sauce and yams') {
      return pricer += 45;
    } else {
      return 'Meal not available'
    }; 
  };
  menu.price = pricer;
  console.log(menu.price);


  
    

    //menu.meal = 'beans Porridge';
    // menu.price = 20;
    //console.log(menu);
    // menu.price = 20;
