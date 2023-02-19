const getSleepHours = day => {
    day = day.toLowerCase();
  switch (day) {
  case 'monday':
  return 4;
  break;
  case 'tuesday':
  return 8;
  break;
  case 'wednesday':
  return 6;
  break;
  case 'thursday':
  return 4;
  break;
  case 'friday':
  return 6;
  break;
  case 'saturday':
  return 6;
  break
  case 'sunday':
  return 6;
  break
  default:
  return 'please enter a vaild day'
  }
  };
  //console.log(getSleepHours('Monday'));
  //above for my sleep hours perday
  
  const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  //console.log(getActualSleepHours());
  //above for calculating my sleep hours during the week
  
  const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
  };
  //above for calculating how much I'd like to sleep per week
  //console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect sleep amount for this week');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than recommended, you were ' + (actualSleepHours - idealSleepHours) + ' hours over the ideal sleep hours in a week');
  } else {
    console.log('You should get some rest, you were ' + (idealSleepHours - actualSleepHours) + ' hours under the ideal sleep hours in a week');
  }
  };
  
  calculateSleepDebt();