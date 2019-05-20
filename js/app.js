function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//returns a list of estimated random customers pHR Per store that salmon cookies wants to open.
//it also returns the estimated average of cookies needed per business hour
function getEstRndm(){
  for(var i = 0; i< salmonCookieStores.length; i++){

    // creates an array to store estimate of people
    salmonCookieStores[i].rndArrayPeople = [];

    // creates an array to store estimate of cookies and calculates random cookies perhour.
    salmonCookieStores[i].averageCookies = [];

    // while there are 15 index places there are only 14 working hours so the below code returns cookies per hour on the 14 hour work day
    // cookies per hour will be calculated 6-7 7-8 8-9 and so on and so forth.
    for(var j = 1; j < opHours.length; j++){

      // stores estimated customers perhour in an array on each store object
      salmonCookieStores[i].rndArrayPeople.push (salmonCookieStores[i].customersPerHour(salmonCookieStores[i].min, salmonCookieStores[i].max));

      //pushes the average cookies per business hour to an array on each object in a whole nubmer.
      salmonCookieStores[i].averageCookies.push ( Math.round((salmonCookieStores[i].rndArrayPeople[j-1] * salmonCookieStores[i].aveCookieSalePH)));
    }

  }
}

function join(){

  for(var i = 0; i< salmonCookieStores.length; i++){
    salmonCookieStores[i].htmlTimeTable =[];

    for(var j = 1; j < opHours.length; j++){
      salmonCookieStores[i].htmlTimeTable.push(`${opHours[j-1]} to ${opHours[j]} : ${salmonCookieStores[i].averageCookies[j-1]} cookies`);

    }
  }
}

function sumUpArray(salmonCookies){
  var sum = 0;
  for(var j = 0; j < salmonCookies.length; j++){
    sum = sum + salmonCookies[j];
  }
  return sum;
}
/////////////////////////////////*********   Store Objects   **********////////////////////////////////
var salmonCookieStores =[
  {
    store: 'Pike',
    min: 23,
    max: 65,
    aveCookieSalePH: 6.3,
    customersPerHour: getRandomInt,
  },

  {
    store: 'SeaTac',
    min: 3,
    max: 24,
    aveCookieSalePH: 1.2,
    customersPerHour: getRandomInt,
  },

  {
    store: 'Seattle Center',
    min: 11,
    max: 38,
    aveCookieSalePH: 3.7,
    customersPerHour: getRandomInt,
  },

  {
    store: 'Capitol Hill',
    min: 20,
    max: 38,
    aveCookieSalePH: 2.3,
    customersPerHour: getRandomInt,
  },

  {
    store: 'Alki',
    min: 2,    
    max: 16,
    aveCookieSalePH: 4.6,
    customersPerHour: getRandomInt,
  },
];

var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

getEstRndm();
join();


//creates the table head
for(var i = 0; i < salmonCookieStores.length; i++){
  var infoTable = document.getElementById('infoTable');
  var tableHead = document.createElement('ul');
  tableHead.textContent = salmonCookieStores[i].store;
  infoTable.appendChild(tableHead);

  for(var j = 0; j < salmonCookieStores[i].htmlTimeTable.length; j++){
    var hours = document.createElement('li');
    hours.textContent = salmonCookieStores[i].htmlTimeTable[j];
    tableHead.appendChild(hours);
  }
  var totals = document.createElement('li');
  totals.textContent = `Total : ${sumUpArray(salmonCookieStores[i].averageCookies)}`;
  tableHead.appendChild(totals);
}
