    // project 39
function city_country (city : string[] , country :string[]){
for (let i = 0 ; i<city.length ; i++){
    console.log(`"${city[i]},${country[i]}"`)
}
}
let cities = ["Lahore","Dehli","Dubai"]
let countries = ["Pakistan","India","UAE"]
city_country(cities,countries)