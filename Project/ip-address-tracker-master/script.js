import { key } from "./secret.js";

const searchForm = document.getElementById('search-form');
const ipAddressInput = document.getElementById('ipAddressInput');
const inputError = document.getElementById('input-error');
const searchButton = document.getElementById('search-button');
const apiData = document.getElementById('api-data');
const map = document.getElementById('map');

//search input validation function----
function validateIpAddress() {
    const regex = "^(?>(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(?1)$"
  if (ipAddressInput.validity.valueMissing) {
    ipAddressInput.setCustomValidity("IP Address is required");
  } else if (searchInput.value !== regex) {
    ipAddressInput.setCustomValidity("Enter valid IP Address.");
  } else {
    ipAddressInput.setCustomValidity("");
  }
  inputError.textContent =searchInput.validationMessage;
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



});
















//Here we create a map in the 'map' div, add tiles of our choice, and then add a marker with some text in a popup:

// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();