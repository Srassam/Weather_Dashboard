$(document).ready(function () {
    $("#weatherClicker").click(function () {

        var city = $("#city").val();
        if (city !== "") {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&unit=imperial" + "&APPID=06c808a79c3435d6449150067bbd03b0",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {

                    var thing = show(data);

                    $("#show").html(thing);

                    $("#city").val('');
                }
            });
        } else {
            $("error").html('Please Input City ');
        }

    });
});

function show(data) {
    return "<h2 style='font-size:50px; font weight: bold;'>Current Weather for " + data.name + "," + data.sys.city + "</h3>" +
        "<h2>Weather: " + data.weather[0].main + "</h2>" +
        "<h2>Forcast: " + data.weather[0].description + "</h2>" +
        "<h2>Temperture: " + data.main.temp + "</h2>" +
        "<h2>Pressure: " + data.main.pressure + "</h2>" +
        "<h2>Humidity: " + data.main.humidity + "</h2>";
    console.log(temp)
}