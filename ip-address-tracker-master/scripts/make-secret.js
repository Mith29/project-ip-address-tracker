// scripts/make-secret.js
const fs = require("fs");
const path = require("path");

// Name of your env var as set in Netlify (example: IP_API_KEY)
const apiKey = process.env.IP_API_KEY || "";

if (!apiKey) {
  console.warn("Warning: IP_API_KEY is empty");
}

const out = `export const API_KEY = "${apiKey}";\n`;

// Adjust this path to where your front-end code expects secret.js
const outPath = path.join(__dirname, "..", "ip-address-tracker-master", "secret.js");

fs.writeFileSync(outPath, out);
console.log("secret.js generated");
