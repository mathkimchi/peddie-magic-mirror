from encodings import utf_8
from bs4 import BeautifulSoup as bs
import requests

# https://www.thepythoncode.com/article/extract-weather-data-python
file = open("weather.txt", "w", encoding="utf-8")
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36"
# US english
LANGUAGE = "en-US,en;q=0.5"


def get_weather_data(url):
    data = requests.get(url).json()
    current = data["current_condition"][0]
    info = {}
    info["temperature"] = current["temp_F"]
    info["wind"] = current["windspeedMiles"]
    info["condition"] = current["weatherDesc"][0]["value"]
    info["weather_code"] = current["weatherCode"]
    return info

def get_weather_icon(code):
    weather_icons = {
    "113": "☀️",  # Sunny
    "116": "🌤️",  # Partly cloudy
    "119": "☁️",  # Cloudy
    "122": "☁️",  # Overcast
    "176": "🌦️",  # Patchy rain
    "200": "⛈️",  # Thunder
    "227": "🌨️",  # Blowing snow
    "248": "🌫️",  # Fog
    "260": "🌫️",  # Freezing fog
    "263": "🌦️",  # Patchy drizzle
    "266": "🌧️",  # Light drizzle
    "293": "🌦️",  # Light rain
    "296": "🌧️",  # Light rain
    "299": "🌧️",  # Moderate rain
    "302": "🌧️",  # Moderate rain
    "308": "🌧️",  # Heavy rain
    "311": "🌧️",  # Light freezing rain
    "320": "🌨️",  # Light sleet
    "326": "🌨️",  # Light snow
    "335": "❄️",  # Heavy snow
    "338": "❄️",  # Heavy snow
    "353": "🌦️",  # Light rain shower
    "356": "🌧️",  # Moderate rain shower
    "368": "🌨️",  # Light snow shower
    "386": "⛈️",  # Thundery shower
    "395": "⛈️",  # Heavy snow shower
    }
    icon = weather_icons.get(code, "❓")
    return icon


if __name__ == "__main__":
    URL = "https://wttr.in/?format=j1"
    weather = get_weather_data(URL)
    file.write(f"{weather['temperature']}°F\n")
    file.write(f"Wind: {weather['wind']}mph\n")
    file.write(f"{weather['condition']}\n")
    icon = get_weather_icon(f"{weather['weather_code']}")
    file.write(icon)
    print(__file__)