document.addEventListener("DOMContentLoaded", function(){
document.getElementById("searchBar").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        window.location.href = "country.html";
    }
});
});

const url = "https://restcountries.com/v3.1/all";


async function fetchAllCountryData() {
    // Declare a variabble to store the HTTP response 
    const response = await fetch (url, {
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
    
    // Log out the joke data 
    
    console.log(data); 
    
    }

    