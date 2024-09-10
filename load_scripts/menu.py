import requests
import icalendar
import json

url = "https://peddie.org/events/month/?tribe_eventcategory%5B0%5D=250&ical=1"
response = requests.get(url)

# print (response.text)

with open('data/menu.ics', 'wb') as file:
    file.write(response.content)

with open('data/menu.ics', 'r') as file:
    calendar = icalendar.Calendar.from_ical(file.read())

menu_events = []
with open('data/menu.json','w') as file:
    for (index, event) in enumerate(calendar.walk('VEVENT')):
        menu_event = {}
        menu_event["meal_type"] = event.get("SUMMARY")
        menu_event["foods"] = event.get("DESCRIPTION")
        menu_events.append(menu_event)

        # break if this is last with redundant safety
        if (event.get("SUMMARY")=="Dinner") or (event.get("SUMMARY")=="Family Style Dinner") or (index>=2):
            break
    file.write(json.dumps(menu_events, indent=4))

f = open("data/menu.json", "r")
print(f.read())