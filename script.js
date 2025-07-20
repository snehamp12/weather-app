async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "00f47ebedf4e3ebf6a73d980d33bfc76";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const resultBox = document.getElementById("weatherResult");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      resultBox.innerHTML = `<p style="color:red;">${data.message}</p>`;
      return;
    }

    resultBox.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
  } catch (error) {
    console.error("Error fetching weather:", error);
    resultBox.innerHTML = `<p style="color:red;">Something went wrong!</p>`;
  }
}
