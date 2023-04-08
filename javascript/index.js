function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTime = chicagoElement.querySelector(".time");
  let currentChicagoTime = moment().tz("America/Chicago");

  chicagoDate.innerHTML = currentChicagoTime.format("MMMM Do YYYY");
  chicagoTime.innerHTML = currentChicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let aucklandElement = document.querySelector("#auckland");
  let aucklandDate = aucklandElement.querySelector(".date");
  let aucklandTime = aucklandElement.querySelector(".time");
  let currentAucklandTime = moment().tz("Pacific/Auckland");

  aucklandDate.innerHTML = currentAucklandTime.format("MMMM Do YYYY");
  aucklandTime.innerHTML = currentAucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
      <a href="index.html" class="home">Back to home</a>
      `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
