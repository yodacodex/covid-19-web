

$(function(){

  /* Adds comma to bigger numbers */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$.getJSON("https://corona.lmao.ninja/v2/countries",function(result){
   
//result.length
// Will show the first 10 countries
  for(i=0; i<10;i++){
data = result[i]
$('tbody').append(`

<tr>

<td>${i+1}</td>
<td> <img src="${data.countryInfo.flag}" class ="flag"/> </td>
<td>${data.country}</td>
<td>${numberWithCommas(data.cases)}</td>
<td>${numberWithCommas(data.deaths)}</td>
<td>${numberWithCommas(data.recovered)}</td>
<td>${numberWithCommas(data.active)}</td>
<td>${numberWithCommas(data.critical)}</td>


</tr>

`)
  }
  }
)


})