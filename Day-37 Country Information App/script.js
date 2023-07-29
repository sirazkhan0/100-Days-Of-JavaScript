const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const countryInfo = document.getElementById("countryInfo");

// Function to fetch country information and display it
function fetchCountryInfo() {
    const countryName = countryInput.value.trim();

    // Check if input is not empty
    if (countryName !== "") {
        // Fetch country data from the API
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => response.json())
            .then(data => {
                // Check if the response contains valid data
                if (data.length > 0) {
                    const country = data[0];

                    // Display country information
                    const infoHTML = `
                        <h2>${country.name.common}</h2>
                        <p><strong>Capital:</strong> ${country.capital}</p>
                        <p><strong>Population:</strong> ${country.population}</p>
                        <p><strong>Region:</strong> ${country.region}</p>
                        <p><strong>Subregion:</strong> ${country.subregion}</p>
                        <p><strong>Languages:</strong> ${Object.values(country.languages).join(", ")}</p>
                        <img src="${country.flags.png}" alt="${country.name.common} Flag" width="150">
                    `;
                    countryInfo.innerHTML = infoHTML;
                } else {
                    // If no data found, display an error message
                    countryInfo.innerHTML = "<p>No country found with that name. Please try again.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching country information:", error);
                countryInfo.innerHTML = "<p>An error occurred while fetching data. Please try again later.</p>";
            });
    } else {
        // If the input is empty, display a message
        countryInfo.innerHTML = "<p>Please enter a country name.</p>";
    }
}

// Add click event listener to the search button
searchBtn.addEventListener("click", fetchCountryInfo);
