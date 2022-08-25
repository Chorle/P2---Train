/* let countEl = document.getElementById('count');
countEl.innerText = 0;

function inc() {
    countEl.innerText = countEl.innerText + 1;
}

let incrementEl = document.getElementById('increment-btn');
incrementEl.addEventListener('click', inc); */

let countEl = document.getElementById('count');

/* console.log(countEl); */

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}




let saveButton = document.getElementById('save-btn');

let saveEl = document.getElementById('save-el');

function saveContent() {
    let countString = count + ' - ';
    saveEl.textContent += countString;
    /* saveEl.innerText += ' ' + count + ' -'; */ //my method
}

function resetCount() {
    count = 0;
    countEl.innerText = count;
}

function saveNewEntry() {
    saveContent();
    resetCount();
    /* console.log(count); */
}


/*--------------------------------------
let countEl = 0;
console.log(countEl);

const myAge = 28;
console.log(myAge);

const humanDogRatio = 7;
const myDogAge = myAge / humanDogRatio;

console.log(myDogAge); 
-------------------------------------*/

/*------------------------------------
let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints); 
--------------------------------------*/

/*-------------------------------------
function increment() {
    console.log('The button was clicked');
}

function number() {
    console.log(42);
}

number()

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function lapSum() {
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}

lapSum();

let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted);
}

incrementLap();
incrementLap();
incrementLap(); 
----------------------------------------------*/


/* -------------------------------------------
let theName = 'Carlos';
let theGreeting = 'Hello, my name is ';

let greetingsName = theGreeting + theName;

console.log(greetingsName);

let welcomeEl = document.getElementById('welcome-el');

welcomeEl.innerText = greetingsName;

welcomeEl.innerText += ' 👋'
-------------------------------------------- */

