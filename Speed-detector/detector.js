
//declaring a function that takes in the user input speed as its argument
//the range calculates upto 12 demerit points on the basis of being above the speed limit in increaments of 5kph.
function speedDetector(speed) {
  if (speed > 130) {
    return 'License suspended';
  } else if (speed >= 125) {
    return '12 points';
  } else if (speed >= 120) {
    return '11 points';
  } else if (speed >= 115) {
    return '10 points';
  } else if (speed >= 110) {
    return '9 points';
  } else if (speed >= 105) {
    return '8 points';
  } else if (speed >= 100) {
    return '7 points';
  } else if (speed >= 95) {
    return '6 points';
  } else if (speed >= 90) {
    return '5 points';
  } else if (speed >= 85) {
    return '4 points';
  } else if (speed >= 80) {
    return '3 points';
  } else if (speed >= 75) {
    return '2 points';
  } else if (speed >= 70) {
    return '1 point';
  } else {
    return 'ok';
  }
}
//declaring a function that takes in userInput for speed by use of  a prompt
function speedDemeritGenerator() {
  const speed = parseFloat(prompt('Enter the speed:'));

//Takes into account non number characters and negative numbers.
  if (isNaN(speed) || speed < 0) {
    return 'Please enter a valid input';
  }
 //Gives the user his/her demerit points
  const demeritPoints = speedDetector(speed);
  return `Your points are: ${demeritPoints}`;
}
//Calls the speedDemeritgenerator function to give the result
const result = speedDemeritGenerator();
console.log(result);
