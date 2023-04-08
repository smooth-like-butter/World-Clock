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
updateTime();
setInterval(updateTime, 1000);
