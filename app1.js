/* The second option*/


const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday ) => {
    return monday + tuesday + wednesday+ thursday + friday + saturday + sunday;
};
console.log(getActualSleepHours(5,3,4,6,5,10,10));

const getIdealSleepHours = (hoursToSleepPerNight) => {
      return hoursToSleepPerNight *=7;
}; 
console.log(getIdealSleepHours(9));

const calculateSleepDebt = () => {
let idealSleepHours = getIdealSleepHours(9);
let actualSleepHours = getActualSleepHours(5,3,4,12,10,11,2);
let sleepDebt = idealSleepHours-actualSleepHours;
let overSleep = actualSleepHours-idealSleepHours;

if(idealSleepHours === actualSleepHours) {
   return console.log('Congratulations! You got the perfect amount of sleep!');
}
else if ( idealSleepHours > actualSleepHours){
   return console.log(`Your sleep debt is ${sleepDebt} hours. You shouldn't tired yourself out. 
   Go and get some more sleep!`);
}
else if (idealSleepHours < actualSleepHours) {
   return console.log(`Wow! You overslept for ${overSleep} hours. You really like sleeping in! Remember your time 
   is the most valubale thing.`);
}
};
console.log(calculateSleepDebt());