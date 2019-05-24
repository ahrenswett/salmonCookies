function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function Store(locationString,minCustPerHour,maxCustPerHour,aveCookieSoldPerHour){
  this.store = locationString;
  this.min = minCustPerHour;
  this.max = maxCustPerHour;
  this.aveCookieSalePH = aveCookieSoldPerHour;
}

//console logs the store is allive and pushes store to an array
Store.prototype.sellingCookies = function(){
  listOfStoresArray.push(this);
  getEstRndm(this)
  console.log(`${this.store} says Im alive and selling cookies!!!`);
};

//returns a list of estimated random customers pHR Per store that salmon cookies wants to open.
//it also returns the estimated average of cookies needed per business hour
function getEstRndm(store){
  store.customersPerHour = getRandomInt;
  // creates an array to store estimate of people and an array to store estimate of cookies and calculates random cookies perhour.
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

  //Sums up total of estimated cookies per day and creates a new sum array on each store.
  store.sum = 0;
  for(var j = 0; j < store.averageCookies.length; j++){
    store.sum = store.sum + store.averageCookies[j];
  }
}




//PETES SALMON COOKIES HOURS OF OPERATION
var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//Creates an array that displays hours 6-7, 7-8, 8-9 and so on for the durayion of operationl hours used to diplay in table"

var hours =[''];
for(var j = 1; j < opHours.length; j++){
  hours.push(`${opHours[j-1]}-${opHours[j]}`);
}

/////////////////////////////////*********   Store Objects   **********////////////////////////////////
var listOfStoresArray = [];
var infoTable = document.getElementById('infoTable');

///Creating store instances.
var pike = new Store('Pike', 23, 56, 6.3);
pike.sellingCookies();

var seaTac = new Store('SeaTac', 3, 24, 1.2);
seaTac.sellingCookies();

var seaCenter = new Store('Seattle Center', 23, 56, 6.3);
seaCenter.sellingCookies();

var capHill = new Store('Capitol Hill', 23, 56, 6.3);
capHill.sellingCookies();

var alki = new Store('Alki', 23, 56, 6.3);
alki.sellingCookies();

console.log(listOfStoresArray);

//creates the list of cookies per hour at each store and displays on HTML

// create a tHead that contains all 
//create a table row table head that shows hours of operation and one blank cell to the left
// create a row that prints name of store, cookie estimate and totals of an element


// Table Body
var tbEl = document.createElement('tbody');
infoTable.appendChild(tbEl);

// Table Row 1
var row = document.createElement('tr');
tbEl.appendChild(row);

//Table Head
for(var x = 0; x< hours.length + 1; x++){
  if(x< hours.length){
    var thEl = document.createElement('th');
    row.appendChild(thEl);
    thEl.textContent = hours[x];
    console.log('making babies');
  }else{
    thEl = document.createElement('th');
    row.appendChild(thEl);
    thEl.textContent = 'Total Per Day';
  }
}


// Table Rows with data
for(var x = 0; x < listOfStoresArray.length + 1; x++){
  if(x<listOfStoresArray.length){
    row = document.createElement('tr');
    tbEl.appendChild(row);

    // writes store name in left most cell
    var cell = document.createElement('td');
    cell.textContent = listOfStoresArray[x].store;
    row.appendChild(cell);

    //fills in cookies per hour 
    for(var y = 0; y < listOfStoresArray[0].averageCookies.length; y++){
      cell = document.createElement('td');
      cell.textContent = listOfStoresArray[x].averageCookies[y];
      row.appendChild(cell);
    }
    //fills in total cookies for the day
    cell = document.createElement('td');
    cell.textContent = listOfStoresArray[x].sum;
    row.appendChild(cell);
}
}
// else{
    // row = document.createElement('tr');
    // tbEl.appendChild(row);

//     var cell = document.createElement('td');
//     cell.textContent = 'Total Cookies Per Hour';
//     row.appendChild(cell);

//     //fills in cookies per hour 
//     for(var y = 0; y < listOfStoresArray[0].averageCookies.length; y++){
//       cell = document.createElement('td');
//       cell.textContent = listOfStoresArray[x].averageCookies[y];
//       row.appendChild(cell);
//     }
//     //fills in total cookies for the day
//     cell = document.createElement('td');
//     cell.textContent = listOfStoresArray[x].sum;
//     row.appendChild(cell);
//   }
var longestArrayLength = 0
// for(var x = 0; x < listOfStoresArray.length; x++){
//   if(longestArrayLength < listOfStoresArray[x].averageCookies.length){
//     console.log(listOfStoresArray[x].averageCookies.length);
//     longestArrayLength = listOfStoresArray[x].averageCookies.length;
//   }
  function findLongestArray(array, array2){
    for(var x = 0; x < array.length; x++){
      if(longestArrayLength < array[x][array2].length){
        console.log(array[x][array2].length);
        longestArrayLength = array[x][array2].length;
      }
    }
}
        findLongestArray(listOfStoresArray, 'averageCookies');

console.log(listOfStoresArray[0].averageCookies);



console.log(longestArrayLength);
    