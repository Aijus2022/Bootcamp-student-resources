 // API keys
        const openWeatherMapApiKey = "ebb88b956bf8c05653e9de0ca2230d40";
        const nyTimesApiKey = "uDC9FtINoMvYp08zQbOiSeHxUhancoEb";
        const xRapidAPIKey = '3ae636fe26mshc2f8359d260fc59p1cd1d8jsn27515a485dec'; // Replace 'your_api_key' with your actual X-RapidAPI-Key

        // API URLs
        const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";
        const articleBaseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const cityImagesBaseUrl = "https://api.teleport.org/api/urban_areas"; // I assumed you still want to use this URL

        document.addEventListener("DOMContentLoaded", function () {
            const cityInput = document.getElementById("city-input");
            const searchButton = document.getElementById("search-button");
            const currentWeatherContainer = document.getElementById("currentWeatherContainer");
            const forecastContainer = document.getElementById("forecastContainer");
            const rightSidebar = document.getElementById("right-sidebar");
            const historyList = document.getElementById("history-list");
            const imagesContainer = document.getElementById("images-container");

            searchButton.addEventListener("click", function () {
                const cityName = cityInput.value.trim();
                if (cityName !== "") {
                    const weatherApiUrl = `${baseUrl}?q=${cityName}&appid=${openWeatherMapApiKey}`;
                    const articlesApiUrl = `${articleBaseUrl}?api-key=${nyTimesApiKey}&q=${cityName}`;
                    const cityImagesApiUrl = `${cityImagesBaseUrl}/${cityName.toLowerCase()}/images/`;

                    // Fetch city images
                    fetchCityImages(cityImagesApiUrl, imagesContainer);

                    // Fetch and display weather data
                    getWeatherData(weatherApiUrl, cityName);

                    // Fetch and display articles
                    getArticlesData(articlesApiUrl);
                } else {
                    alert("Please enter a city name.");
                }
            });

            // Update the function to fetch city images
            async function fetchCityImages(apiUrl, container) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': xRapidAPIKey,
                            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`Error fetching city images. Status: ${response.status}`);
                    }

                    const data = await response.json();

                    // Display city images
                    displayCityImages(data, container);
                } catch (error) {
                    console.error("Error fetching city images:", error);
                }
            }

            // Rest of your existing code...

            function displayCityImages(data, container) {
                // Display images
                const imagesHTML = data.photos.map(image => {
                    const imageUrl = image.image.web;

                    return `<img src="${imageUrl}" alt="City Image">`;
                }).join('');

                container.innerHTML = imagesHTML;
            }
        });
    </script>
