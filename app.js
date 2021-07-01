const getSleepHours = day => {
    let sleptHours = '';
    switch (day.toLowerCase()) {
        case 'monday':
           return sleptHours = 9;
        break;
        case 'tuesday':
           return sleptHours = 7;
        break;
        case 'wednesday':
            return sleptHours = 10;
        break;
        case 'thursday':
             return sleptHours = 9;
        break;
        case 'friday':
           return sleptHours = 7;
        break;
        case 'saturday':
           return sleptHours = 5;
        break;
        case 'sunday':
            return sleptHours = 10;
        break;
        default:
           return console.log('Is what you entered a day of the week?');
        break;
    }
};
console.log(getSleepHours('Friday'));

const getActualSleepHours = () => {
     return getSleepHours('Monday') + getSleepHours('Tuesday')  +
     getSleepHours('Wednesday') + getSleepHours('Thursday') + 
     getSleepHours('Friday') + getSleepHours('Saturday') +
     getSleepHours('Sunday');
};
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours *=7;
}; 
console.log(getIdealSleepHours());

 const calculateSleepDebt = () => {
let idealSleepHours = getIdealSleepHours();
let actualSleepHours = getActualSleepHours();
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



/* The second option*/


const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday ) => {
    return monday + tuesday + wednesday+ thursday + friday + saturday + sunday;
};
console.log(getActualSleepHours(5,3,4,6,5,10,10));

const getIdealSleepHours = () => {
   let idealHours = 8;
   return idealHours *=7;
}; 
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
let idealSleepHours = getIdealSleepHours();
let actualSleepHours = getActualSleepHours();
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