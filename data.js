document.addEventListener('DOMContentLoaded', fetchAllCountryData);


//Create Variables 



let countryName = document.getElementById("countryName");
let capital = document.getElementById("capital");
let continent = document.getElementById("continent");
let flag = document.getElementById("flag");
let currency = document.getElementById("currency");
let language = document.getElementById("language");

let inputText = localStorage.getItem('searchInput');

//fix how input is written so it matches the name 

if (inputText) {
    inputText = inputText.toLowerCase(); 
    inputText = inputText.trim();
    inputText = inputText.charAt(0).toUpperCase() + inputText.slice(1); 
}

//Event Listener for input + //Fetching API Data changing data via API 
    
async function fetchAllCountryData(event) {

    const url = `https://restcountries.com/v3.1/name/${inputText}`;
        
    // Declare a variable to store the HTTP response 
        const response = await fetch (`${url}?q=${encodeURIComponent(inputText)}`, {
        headers: {
        Accept: "application/json",
        },
        });
        
        // if the request fails log out an error 
        
        if (!response.ok) {
        console.error(response.status);
        console.error(response.text());
        return "Sorry the no countries today!😭";
        }
        
        // parse the response body or data as JSON 
        
        const data = await response.json();
        
        
        // Change text on webpage with for loops 

        for (let i = 0; i < data.length; i++) {
            countryName.textContent = data[i].name.common;
            capital.textContent = data[i].capital;
            continent.textContent = data[i].continents; 
            flag.textContent = data[i].flag; 
            language.textContent = data[i].languages[0];
            
            for (let currencyCode in data[i].currencies) {
                let currencyName = data[i].currencies[currencyCode].name;
                currency.textContent = currencyName;
            }

            for (let languageTypes in data[i].languages) {
                let languageName = data[i].languages[languageTypes];
                language.textContent = languageName;
            }
        }
    
    };


