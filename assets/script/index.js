    const cities = ['Herborn', 'Haiger', 'Wetzlar', 'Marburg', 'Kassel'];
    let temperatureOfCities = [];

    let maxTemperature = -Infinity;
    let minTemperature = Infinity;

    const containerInfo = document.querySelector('.containerInfo');
    const containerInfoTemp = document.querySelector('.containerInfoTemp');


    for(let city of cities){
    let temperature = parseFloat(prompt(`Please enter temperature in the city ${city}:`));
    temperatureOfCities.push(`${temperature}`);

    const list=`
        <p class = 'list'>Температура в городе ${city} : ${temperature}°C</p>`;
        containerInfo.innerHTML += list;

        if (temperature < minTemperature) {
            minTemperature = temperature;
        }
        if (temperature > maxTemperature) {
            maxTemperature = temperature;
        }

}

const pTempMin = `
<p class='temp'>Минимальная температура: ${minTemperature}°C</p>`;
const pTempMax = `
<p class='temp'>Максимальная температура: ${maxTemperature}°C</p>`;

containerInfoTemp.innerHTML += pTempMin;
containerInfoTemp.innerHTML += pTempMax;