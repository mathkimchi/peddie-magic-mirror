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

if __name__ == "__main__":
    URL = "https://wttr.in/?format=j1"
    weather = get_weather_data(URL)
    with open("weather.txt", "w") as file:
        file.write(f"{weather['temperature']}°F\n")
        file.write(f"Wind: {weather['wind']}mph\n")
        file.write(f"{weather['condition']}\n")
        file.write(f"{weather['weather_code']}")
    print(weather)