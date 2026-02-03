import { key } from "./secret.js";

const searchForm = document.getElementById('search-form');
const ipAddressInput = document.getElementById('ipAddressInput');
const inputError = document.getElementById('input-error');
const searchButton = document.getElementById('search-button');
const apiData = document.getElementById('api-data');
const mapSection = document.getElementById('map');
const ipAddressSpan = document.getElementById("ip-address");
const locationSpan = document.getElementById("location");
const timezoneSpan = document.getElementById("timezone");
const ispSpan = document.getElementById("isp");

//search input validation function----
function validateIpAddress() {
    const regex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
  if (ipAddressInput.validity.valueMissing) {
    ipAddressInput.setCustomValidity("IP Address is required");
  } else if (!regex.test(ipAddressInput.value)) {
    ipAddressInput.setCustomValidity("Enter valid IP Address.");
  } else {
    ipAddressInput.setCustomValidity("");
  }
  inputError.textContent =ipAddressInput.validationMessage;
  return ipAddressInput.checkValidity();
}
//Adding event listener to validate input field
ipAddressInput.addEventListener("input", validateIpAddress);

//Adding event listener on the form to validate and search IP address
searchForm.addEventListener("submit",function(event){
    event.preventDefault();
    const isIPAddressValid = validateIpAddress();
    if(!isIPAddressValid){
        return;
    }
 fetchAPIData(ipAddressInput.value);



});
 async function fetchAPIData(ipAddress){
  try{
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ipAddress}`);
          if (!response.ok) {
      throw new Error (`HTTP error! Status: ${response.status}`);
    }

        const data = await response.json(); // returns object of arrays
        renderAPIData(data);
          updateMap(data.location.lat, data.location.lng); // move map and marker

    //    console.log(`ip:${data.ip}\n Location:${data.location.city},${data.location.region}\n${data.location.postalCode}\nTimezone: UTC${data.location.timezone}\nISP:${data.isp}`);
    }
        

     catch(error)  {
        if (error instanceof NetworkError) {
          console.log("Network Error", error.message);
        } else if (error instanceof DataError) {
          console.log("Data Error", error);
        } else {
          console.error("Unknown Error:", error);
        }
      }
     
}

function renderAPIData(data) {
  ipAddressSpan.textContent = data.ip;
  locationSpan.textContent = `${data.location.city}, ${data.location.region}\n${data.location.postalCode}`;
  timezoneSpan.textContent = `UTC ${data.location.timezone}`;
  ispSpan.textContent = data.isp;
  console.log(data);

}

//Here we create a map in the 'map' div, add tiles of our choice, and then add a marker with some text in a popup:

let map = L.map('map').setView([39.96118,-82.99879], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const customIcon = L.icon({
  iconUrl: './images/icon-location.svg',      // path to your image
  iconSize: [25, 30],         // size of the icon
  iconAnchor: [20, 40],       // point of the icon which corresponds to marker location
  popupAnchor: [0, -40]       // point from which the popup should open
});

L.marker([39.96118,-82.99879], { icon: customIcon }).addTo(map);

 let marker;
function updateMap(lat, lng) {
  map.setView([lat, lng], 13);
  if (marker) {
    marker.setLatLng([lat, lng]);
  } else {
    marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
  }
}
renderAPIData(data);           // update the info blocks

// L.marker([51.5, -0.09]).addTo(map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();

    //     let map = L.map("map").setView([0, 0], 2); // default world view
// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

