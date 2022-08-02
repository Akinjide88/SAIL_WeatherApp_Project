// API URL
const url = `https://api.weatherapi.com/v1/current.json?key=44db0dc3e5134fba99524023222207&aqi=no`
// Declared a variable to hold and display our results
const Result = document.getElementById("result");
// Search button
const btn = document.getElementById("search_btn");

btn.addEventListener("click", () => {
    // Get input value
    let city = document.getElementById("myInput").value;
    document.getElementsByClassName("Date").innerHTML = new Date();
    // Fetch API 
    fetch(`${url}&q=${city}`).then((response) => response.json()).then((data) => {
        // Prints out our data from API in console
        console.log(data);
        // Displays result
        Result.innerHTML = `
            <div class="contain">
                <div class="first">
                // Displays the input location
                    <h2 class="city">${data.location.name}</h2>
                </div>
                
                <div class="second">
                    <div>
                    // Displays the Icon
                        <img src="${"https:"+ data.current.condition.icon}" class="icon"/>
                    </div> 
                    <div class="degree">
                    // Displays the degree
                        <p class="temp">${data.current.temp_c}&#8451</p>
                        <p class="temp">${data.current.temp_f}&#8457</p>
                    </div>
                    
                </div>
                
                <div class="third">
                // Displays the description
                    <p class="description">${data.current.condition.text}</p>
                </div>
    
            </div>
    
            <div class="content">  
                <div class="humidity">
                    <p>Humidity</p>
                    // Displays the humudity
                    <p>${data.current.humidity}&#37</p>
                </div>
                <div class="humidity">
                    <p>Wind</p>
                    // Displays the wind
                    <p>${data.current.wind_kph}km/h</p>
                </div>
                <div class="humidity">
                    <p>Pressure</p>
                    // Displays the pressure
                    <p>${data.current.pressure_mb}mb</p>
                </div>
                <div class="humidity">
                    <p>Precip</p>
                    // Displays the precip
                    <p>${data.current.precip_in}&#37</p>
                </div>  
            </div>
        `
    }).catch(() => {
        /*Returns error message */
        Result.innerHTML = `<div class="contain" id="error">Couldn't find the word</div>`
    })

    
})
