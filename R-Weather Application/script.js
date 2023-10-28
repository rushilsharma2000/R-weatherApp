const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a536a7b6d1msh9bd6508d72f5143p154b84jsn6824b0208696',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




const getResults= async (city)=>{
	cityName.innerHTML=city;
    const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options);
	const result = await response.json();
	console.log(result);
    console.log(city);

	cloud_pct.innerText=result.cloud_pct;
	feels_like.innerHTML=result.feels_like;
	humidity.innerHTML=result.humidity;
	max_temp.innerHTML=result.max_temp;
	min_temp.innerHTML=result.min_temp;
	sunrise.innerHTML=result.sunrise;
	sunset.innerHTML=result.sunset;
	temp.innerHTML=result.temp;
	wind_degrees.innerHTML=result.wind_degrees;
	wind_speed.innerHTML=result.wind_speed;  
}

getResults("Yamunanagar");

document.getElementById("submitcity").addEventListener("submit",(e)=>{
	e.preventDefault();
	// console.log("Hello");
	let cityname= document.getElementById("cityValue").value;
	getResults(cityname);
})










