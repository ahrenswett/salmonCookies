function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };


/////////////////////////////////*********   Store Objects   **********////////////////////////////////
var salmonCookieStores =[
    {
    store: 'pike',
    min: 23,
    max: 65,
    aveCookieSalePH: 6.3,
    customersPerHour: getRandomInt,

    },

    // {
    // store: seaTac,
    // min: 3,
    // max: 24,
    // aveCookieSalePH: 1.2,
    // customersPerHour: getRandomInt,
    // rndArray:[],

    // },

    // {
    // store: seattleCenter,
    // min: 11,    
    // max: 38,
    // aveCookieSalePH: 3.7,
    // customersPerHour: getRandomInt,
    // rndArray:[],
    // }, 

    // {
    // store: capHill,
    // min: 20,
    // max: 38,
    // aveCookieSalePH: 2.3,
    // customersPerHour: getRandomInt,
    // },
    
    // {
    // store: alki,
    // min: 2,    
    // max: 16,
    // aveCookieSalePH: 4.6,
    // customersPerHour: getRandomInt,
    // }, 
];
var opHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8]

var pike = salmonCookieStores[0];
// var seaTac = salmonCookieStores[1];
// var seattleCenter = salmonCookieStores[2];
// var capHill = salmonCookieStores[3];
// var alki = salmonCookieStores[4];

//returns a list of estimated random customers pHR Per store that salmon cookies wants to open.
function getEstRndm(){
    for(i = 0; i< salmonCookieStores.length; i++){
    
        // creates an array to store estimate of people
        salmonCookieStores[i].rndArrayPeople = [];
        // creates an array to store estimate of cookies and calculates random cookies perhour.
        salmonCookieStores[i].averageCookies = [];
        


        for(j = 0; j < opHours.length; j++){
        // stores estimated customers perhour in an array on each store object
        salmonCookieStores[i].rndArrayPeople.push (salmonCookieStores[i].customersPerHour(salmonCookieStores[i].min, salmonCookieStores[i].max));
        salmonCookieStores[i].averageCookies.push (salmonCookieStores[i].rndArrayPeople[j] * salmonCookieStores[i].aveCookieSalePH);
    
    
    }

        
        
    }
}



getEstRndm();

console.log(salmonCookieStores[0].customersPerHour(salmonCookieStores[0].min, salmonCookieStores[0].max));
console.log(pike.rndArrayPeople);
console.log(pike.averageCookies);