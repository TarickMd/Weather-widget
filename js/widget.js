//take values from a text field
var city = document.getElementsByTagName("input")[0].value;
document.getElementsByTagName("input")[1].onclick = getWeatherInfo(city);

//main XMLHttpRequest function
function getWeatherInfo(city) {
  //url http
  var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="
  + city + "&mode=json&units=metric";
  //new  XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl, true);
  xhr.send();

    //Onreadystatechange function
    xhr.onreadystatechange = function() { 
      if (xhr.readyState == 4) {
        var json = eval("(" + xhr.responseText + ")");
        //Take Json for weather values
        document.getElementById("img").src = "http://openweathermap.org/img/w/"
        + json.weather[0].icon + ".png";
        document.getElementById("place").innerHTML = json.name + ", " + json.sys.country;
        document.getElementById("temp").innerHTML = json.main.temp
        + " &deg;C ("  + json.main.temp_min + "&deg;C - " + json.main.temp_max + "&deg;C)";
        document.getElementById("description").innerHTML = json.weather[0].description;
        document.getElementById("clouds").innerHTML = json.clouds.all + " &#37";
        document.getElementById("wind").innerHTML = json.wind.speed + " Mph";
        document.getElementById("vis").innerHTML = json.visibility + " Met";
      }
      
      if (xhr.status != 200) {     
            alert('Error ' + xhr.status + ': ' + xhr.statusText);      
            return;   
      } 
    }
}

