
function getIP(json) {
  console.log("My public IP address is: ", json.ip);
  var request = new XMLHttpRequest();
  request.open('GET', "http://freegeoip.net/json/"+json.ip);
  request.responseType = 'json';

  request.send();
  request.onload = function() {
    document.write( "Time zone : "+ request.response.time_zone+ "<br /> Country Code : "+request.response.country_code +"<br /> Latitude : "+request.response.latitude+"<br /> Longitude : "+request.response.longitude);
  }
  console.log(request);
  // console.log(req.open('GET', "http://freegeoip.net/json/"+json.ip,true) );

}
  // Pour savoir si une personne à activer sa localisation
  navigator.geolocation.getCurrentPosition(success,error)

  function success(pos){
    console.log(pos.coords.latitude,pos.coords.longitude)
  }
  function error(){
    console.log('Pas localisé')
  }
