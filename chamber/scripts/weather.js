const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${-32.879224279266964}&lon=${-68.85499061792237}&appid=7e5264c85d87ee2dd099784fc2453ba1&units=metric`



//Getting the weather information from the API and displaying it in a table format
async function getWeather() {
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data)

    return {
        temp: Math.round( data.main.temp) + '°C 🌡️',
        description: data.weather[0].description.toUpperCase(),
        icon: data.weather[0].icon,
        wind: data.wind.speed + ' m/s 🍃' ,
        humidity: data.main.humidity + '% 💧',
        pressure: data.main.pressure + 'hPa 📈',
    }
    
}

async function weatherTable(){

    /**--------------------------------------------
     *               Creeation of element table
     *---------------------------------------------**/
    const weather = await getWeather()
    const weatherSection = document.getElementById('weather-section')

    //Create a div element to hold the weather information
    const weatherContainer = document.createElement('div')
    weatherContainer.classList.add('weather-container')
    weatherSection.appendChild(weatherContainer)

    //Get the image from the API and create an img element to display it
    const weatherIcon = document.createElement('img')
    weatherIcon.src = `https://openweathermap.org/payload/api/media/file/${weather.icon}.png`
    weatherIcon.alt = weather.description
    //Get only the temperature from the API and create a p element to display it
    const weatherTemperature = document.createElement('p')
    weatherTemperature.textContent = `${weather.temp}`

    
    

    const weatherInfo = document.createElement('div')

    //Get the weather information and create a div element to display it
    weatherInfo.classList.add('weather-info')
    weatherInfo.innerHTML = `
        <p>Temperature: ${weather.temp}</p>
        <p>Description: ${weather.description}</p>
        <p>Wind Speed: ${weather.wind}</p>
        <p>Humidity: ${weather.humidity}</p>
        <p>Pressure: ${weather.pressure}</p>
    `



    weatherContainer.appendChild(weatherIcon)
    weatherContainer.appendChild(weatherTemperature)
    weatherContainer.appendChild(weatherInfo)


}


async function main() {

    weatherTable()


}






main()