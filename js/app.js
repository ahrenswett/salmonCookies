function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//returns a list of estimated random customers pHR Per store that salmon cookies wants to open.
//it also returns the estimated average of cookies needed per business hour
function getEstRndm(store){

  // creates an array to store estimate of people
  store.rndArrayPeople = [];

  // creates an array to store estimate of cookies and calculates random cookies perhour.
  store.averageCookies = [];

  // while there are 15 index places there are only 14 working hours so the below code returns cookies per hour on the 14 hour work day
  // cookies per hour will be calculated 6-7 7-8 8-9 and so on and so forth.
  for(var j = 1; j < opHours.length; j++){

    // stores estimated customers perhour in an array on each store object
    store.rndArrayPeople.push (store.customersPerHour(store.min, store.max));

    //pushes the average cookies per business hour to an array on each object in a whole nubmer.
    store.averageCookies.push ( Math.round((store.rndArrayPeople[j-1] * store.aveCookieSalePH)));
  }

  //Joins average cookies and the time table to spit out a string "x am- y am : z cookies"
  store.cookiesPerHour =[];
  for(var j = 1; j < opHours.length; j++){
    store.cookiesPerHour.push(`${opHours[j-1]} to ${opHours[j]} : ${store.averageCookies[j-1]} cookies`);
  }


  //Sums up total of estimated cookies per day and creates a new sum array on each store.
  store.sum = 0;
  for(var j = 0; j < store.averageCookies.length; j++){
    store.sum = store.sum + store.averageCookies[j];
  }

}

//creates the list of cookies per hour at each store
function toList(store)
{
  var infoTable = document.getElementById('infoTable');
  var tableHead = document.createElement('ul');
  tableHead.textContent = store.location;
  infoTable.appendChild(tableHead);

  for(var j = 0; j < store.cookiesPerHour.length; j++){
    var hours = document.createElement('li');
    hours.textContent = store.cookiesPerHour[j];
    tableHead.appendChild(hours);
  }
  var totals = document.createElement('li');
  totals.textContent = `Total : ${store.sum}`;
  tableHead.appendChild(totals);
}

function postData(store){

  getEstRndm(store);
  toList(store);

}

/////////////////////////////////*********   Store Objects   **********////////////////////////////////
var pike = {
  location: 'Pike',
  min: 23,
  max: 65,
  aveCookieSalePH: 6.3,
  customersPerHour: getRandomInt,
};

var seaTac = {
  location: 'SeaTac',
  min: 3,
  max: 24,
  aveCookieSalePH: 1.2,
  customersPerHour: getRandomInt,
};

var seaCenter = {
  location: 'Seattle Center',
  min: 11,
  max: 38,
  aveCookieSalePH: 3.7,
  customersPerHour: getRandomInt,
};

var capHill = {
  location: 'Capitol Hill',
  min: 20,
  max: 38,
  aveCookieSalePH: 2.3,
  customersPerHour: getRandomInt,
};

var alki = {
  location: 'Alki',
  min: 2,    
  max: 16,
  aveCookieSalePH: 4.6,
  customersPerHour: getRandomInt,
};


var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];




postData(pike);
postData(seaTac);
postData(seaCenter);
postData(capHill);
postData(alki);
