const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${-32.879224279266964}&lon=${-68.85499061792237}&appid=7e5264c85d87ee2dd099784fc2453ba1&units=metric`


async function getWeather() {
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data)
    
}

getWeather()