//Getting the current day and hour
var today = new Date();
var hour = today.getHours();

//Setting appropriate greeting message based on current hour
var greeting = "";
if (hour >= 4 && hour < 12) {
    greeting = "Good Morning! 🌞";
    console.log("Good Morning! 🌞");
} else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon! 🌼";
    console.log("Good Afternoon! 🌼");
} else if (hour >= 18 && hour < 22) {
    greeting = "Good Evening! 🌕";
    console.log("Good Evening! 🌕");
} else {
    greeting = "Good Night! 🌙";
    console.log("Good Night! 🌙");
}

//Updating the greeting message using jQuery
$(document).ready(function() {
    $(".greetingmessage").html(greeting);
});

//API call to get weather information
$(document).ready(function() {

    //API from Open Weather Map
    var apiKey = "03911d044f63b10cb91766df94818a9d";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&units=metric&appid=" + apiKey;
    
    //Testing if API is working
    console.log("API URL:", apiUrl);

    //Making the API request using jQuery's getJSON
    $.getJSON(apiUrl, function(data) {

        //Testing if API is working
        console.log("API Response:", data);

        //Getting the weather information from API response
        var weatherInfo = "Weather: " + data.weather[0].description;
        var temperature = "Temperature: " + data.main.temp + "°C";

        //Creating URL for the weather icon
        var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        
        //Updating HTML using the retrieved data
        var html = "<p>" + weatherInfo + "</p>";
        html += "<p>" + temperature + "</p>";

        //Displaying the weather icon
        html += "<img src='" + iconUrl + "' alt='Weather Icon'>";
        
        //Updating the weather-info div class in HTML
        $("#weather-info").html(html);
    });
});

//Updating date and time in real time
function updateDateAndTime() {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = today.toLocaleDateString('en-US', options);
    var time = today.toLocaleTimeString();

    var dateTimeContent = "<span id='datetime'>Today is " + formattedDate + " and the time is " + time + "</span>";
    document.getElementById("datetime").innerHTML = dateTimeContent;
    console.log("dateTimeContent");
}

updateDateAndTime();
