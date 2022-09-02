const searchBtn = document.querySelector('.search-button');
const inputBar = document.querySelector('.input-bar');
const result = document.querySelector(".result");

async function getCountry(){
  const url= await fetch("https://restcountries.com/v2/all");
  const res = await url.json();
  res.forEach(element => {
    displayCountries(element)
  });
}
getCountry()

function displayCountries(data){

  const country= document.createElement('div');
  country.classList.add("country")
  country.className="card m-5 shadow";
  country.style.width="20rem";
  country.innerHTML= `
  <h2 class="card-text h2" >${data.name}</h2>
  <div class="image">
  <img src="${data.flag}" class="card-img-top img" alt="...">
  </div>
  <div class="card-body m-0">
   <h4 class="card-text h4">Capital: ${data.capital}</h4>
   <h4 class="card-text h4">Region: ${data.region}</h4>
   <h4 class="card-text h4">Population: ${data.population}</h4>
   <h4 class="card-text h4">Country Code: ${data.alpha3Code}</h4>
   <h4 class="card-text h4">Lattitude: ${data.latlng[0]}</h4>
   <h4 class="card-text h4">Longitude: ${data.latlng[1]}</h4>
  </div>
</div>
`
const button = document.createElement('button')
button.innerHTML="Click Here For Weather";
button.className="button shadow";
button.addEventListener("click",()=>{
  let key = "6a632da5b193d8fe101da468b2ef028f";
  let url = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${data.latlng[0]}&lon=${data.latlng[1]}&appid=${key}`
  );
  url
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(`
          Temperature - ${data.main.temp} Cel
          Humidity - ${data.main.humidity} %
          Pressure - ${data.main.pressure} Pa
          Weather - ${data.weather[0].main}`);
      //   console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
    `<div class="btm"></div>`
})
result.appendChild(country);
country.appendChild(button);

}
