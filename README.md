                                   IP Address Tracker


It's a web application that detects and displays the geographical location of any IP address using the IPify Geolocation API and LeafletJS for interactive map visualization. The project uses HTML5, CSS3, JavaScript (ES6 Modules),IPify Geolocation API, LeafletJS + OpenStreetMap(Map) and Netlify for the deployment.

Live demo-link: https://ip-address-tracker-mithravenu.netlify.app/ 
<img src="./ip-address-tracker-master/images/Screenshot 2026-02-08 174346.png" width=300px/>

Overview:
This app allows users to search for any valid IPv4 or IPv6 address and view:

-IP Address

-City, Region, Postal Code

-Timezone

-Internet Service Provider (ISP)

-Interactive map with live location marker

On page load, the app automatically detects and displays the user’s current IP location.

Features:
-Search any valid IPv4 or IPv6 address

-Auto-detect user IP on load

-Dynamic map rendering using LeafletJS

-Real-time geolocation using IPify API

-Input validation with Regex

-Custom error handling (Network & API errors)

-Responsive and accessible UI

-API key hidden from GitHub using Netlify environment variables.


Local Setup:

1.Clone the repository
2.Create secret.js (for local development)
  export const API_KEY = "YOUR_IPIFY_API_KEY";
3.Build Script to Generate secret.js,scripts/make-secret.js  
4. Netlify Config : Create netlify.toml in the root folder and add the below code:
   [build]
  command = "node scripts/make-secret.js"
  publish = "ip-address-tracker-master"
5.Add Environment Variable (Netlify)-Go to Site Settings → Environment Variables and add:
     IP_API_KEY = your_real_api_key


Security: 
The secret.js file is excluded using .gitignore, ensuring that the API key is not exposed in the repository. The key is only injected during the build process and becomes visible in the built frontend, which is acceptable for client-side applications.

How It Works: 
When the page loads, the app automatically fetches the user’s current IP location. When a user enters an IP address, it is first validated using Regex. The application then calls the IPify API to retrieve geolocation data, updates the UI with the returned information, and moves the map marker to the detected location.

Error Handling: 
The application uses custom error classes to manage failures. NetworkError handles issues related to network failures, while DataError is used when the API returns invalid or incomplete data.     




