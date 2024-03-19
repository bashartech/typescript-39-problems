// project 39
function city_country(city, country) {
    for (var i = 0; i < city.length; i++) {
        console.log("\"".concat(city[i], ",").concat(country[i], "\""));
    }
}
var cities = ["Lahore", "Dehli", "Dubai"];
var countries = ["Pakistan", "India", "UAE"];
city_country(cities, countries);
