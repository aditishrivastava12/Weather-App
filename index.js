const akey = "8e9eae55a1f24048432942f73c24948c";
const aurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

document.addEventListener("DOMContentLoaded", () => {
  const searchbox = document.querySelector(".search input");
  const searchbtn = document.querySelector(".search button");
  const weathicon = document.querySelector(".icon");

  async function checkweath(city) {
    try {
      const response = await fetch(`${aurl}${city}&appid=${akey}`);
      if (!response.ok) {
        throw new Error("City not found or some other error occurred.");
      }
      const data = await response.json();
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humid").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
      document.querySelector(".press").innerHTML = data.main.pressure;


      if(data.weather[0].main=="Clouds"){
       weathicon.src="cloudy.png";
      }
      else  if(data.weather[0].main=="Rain"){
        weathicon.src="rain.png";
       }
       else  if(data.weather[0].main=="Drizzle"){
        weathicon.src="drizzle.png";
       }
       else  if(data.weather[0].main=="Clear"){
        weathicon.src="sunny.jpg";
       }
       else  if(data.weather[0].main=="Mist"){
        weathicon.src="mist.png";
       }
       else  if(data.weather[0].main=="Snow"){
        weathicon.src="snow.png";
       }
    } 
    catch (error) {
      console.error("Error Occurs");
      // Handle the error gracefully (e.g., show an error message to the user).
    }
  }

  searchbtn.addEventListener("click", () => {
    checkweath(searchbox.value);
  });
});
