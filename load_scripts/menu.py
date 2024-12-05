import requests
import icalendar
import json
import datetime

url = "https://www.peddie.org/events/month/?tribe_eventcategory%5B0%5D=250&ical=1"
response = requests.get(
    url, headers={"User-Agent": "Mozilla/5.0"}, allow_redirects=True
)

# print (response.text)

with open("data/menu.ics", "wb") as file:
    file.write(response.content)

with open("data/menu.ics", "r") as file:
    calendar = icalendar.Calendar.from_ical(file.read())

# not currently used
menu_events = []
with open("data/menu.json", "w") as file:
    for event in calendar.walk("VEVENT"):
        menu_time: datetime.datetime = event.get("DTSTART").dt
        if menu_time.date() == datetime.date.today():
            menu_event = {}
            menu_event["meal_type"] = event.get("SUMMARY")
            menu_event["foods"] = event.get("DESCRIPTION")
            menu_events.append(menu_event)
    file.write(json.dumps(menu_events, indent=4))

with open("data/menu.txt", "w") as file:
    text = ""
    for event in calendar.walk("VEVENT"):
        menu_time: datetime.datetime = event.get("DTSTART").dt
        if menu_time.date() == datetime.date.today():
            text += event.get("SUMMARY") + "\n"
            text += event.get("DESCRIPTION") + "\n\n"
    file.write(text)

# f = open("data/menu.json", "r")
# print(f.read())

