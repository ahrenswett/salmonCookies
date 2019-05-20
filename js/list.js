
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
  totals.textContent = `Total For the Day: ${sumUpArray(salmonCookieStores[i].averageCookies)}`;
  tableHead.appendChild(totals);
}