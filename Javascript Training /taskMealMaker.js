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
    
    menu.meal = 'beans Porridge';
    menu.price = 20;
    //console.log(menu);
    console.log(menu.todaysSpecial);