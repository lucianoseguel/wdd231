const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${-32.879224279266964}&lon=${-68.85499061792237}&appid=7e5264c85d87ee2dd099784fc2453ba1&units=metric`

const nextdays_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${-32.879224279266964}&lon=${-68.85499061792237}&appid=7e5264c85d87ee2dd099784fc2453ba1&units=metric`




//Getting the weather information from the API and displaying it in a table format
async function getWeather() {
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data)



    return {
        temp: Math.round(data.main.temp) + '°C 🌡️',
        description: data.weather[0].description.toUpperCase(),
        icon: data.weather[0].icon,
        wind: data.wind.speed + ' m/s 🍃',
        humidity: data.main.humidity + '% 💧',
        pressure: data.main.pressure + 'hPa 📈',
    }

}


//Getting the next days weather information from the API and displaying it in a table format
async function getNextDaysWeather() {
    const nextdaysResponse = await fetch(nextdays_url)
    const nextdaysData = await nextdaysResponse.json()
    //console.log(nextdaysData)
    //create the nextays object
    let nextdays = []
    //filetring the data to get only the days and the temperature 

    //weekdays
    const weekdaysname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    nextdaysData.list.forEach((day) => {
        if (day.dt_txt.includes('12:00:00')) {

            let datestring = day.dt_txt.split(' ')[0]
            const date = new Date(datestring)
            const weekday = weekdaysname[date.getDay()]

            if (weekday == 0) {
                weekday = "Sun"
            } else if (weekday == 1) {
                weekday = "Mon"
            } else if (weekday == 2) {
                weekday = "Tue"
            } else if (weekday == 3) {
                weekday = "Wed"
            } else if (weekday == 4) {
                weekday = "Thu"
            } else if (weekday == 5) {
                weekday = "Fri"
            } else if (weekday == 6) {
                weekday = "Sat"
            }


            const weatherday = {
                date: day.dt_txt.split(' ')[0],
                temp: Math.round(day.main.temp),
                icon: day.weather[0].icon,
                day: weekday

            }
            console.log(weatherday)
            nextdays.push(weatherday)
        }
    })
    console.log(nextdays)
    return nextdays
}

async function weatherTable() {

    /**--------------------------------------------
     *               Creeation of element table
     *---------------------------------------------**/
    try {
        const weather = await getWeather()
        const next_weather = await getNextDaysWeather()

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

        const nextdays = document.createElement('div')
        nextdays.classList.add("nextdays")



        next_weather.forEach((day) => {

            nextdays.innerHTML += `
            <div>
                <p>${day.day}</p>
                <p>${day.temp}°C </p> 
                <img src="https://openweathermap.org/payload/api/media/file/${day.icon}.png" alt="${day.day}">
                </div> `



        })



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
        weatherContainer.appendChild(nextdays)
        weatherContainer.appendChild(weatherInfo)



    } catch (error) {
        console.error("Was an error to update API", error);

    }


}


/**--------------------------------------------
 *               GETJSONFILE
 *---------------------------------------------**/
async function loadingJSON(file_url) {

    const requesturl = file_url

    const request = new Request(requesturl)

    const response = await fetch(request)

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} .`);
    }

    let commerces = await response.json()
    //console.log(commerces)
    return commerces


}




async function main() {

    weatherTable()



}






main()