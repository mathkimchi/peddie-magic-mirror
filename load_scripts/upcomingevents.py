import requests
import icalendar
import json
from utils import is_event_relevant

url = "https://peddie.org/events/month/?tribe_eventcategory%5B0%5D=228&tribe_eventcategory%5B1%5D=32&tribe_eventcategory%5B2%5D=210&tribe_eventcategory%5B3%5D=7&tribe_eventcategory%5B4%5D=33&tribe_eventcategory%5B5%5D=261&ical=1"
response = requests.get(url, headers={"User-Agent":"Mozilla/5.0"}, allow_redirects=True)

# print (response.text)

with open('data/upcoming.ics', 'wb') as file:
    file.write(response.content)

with open('data/upcoming.ics', 'r') as file:
    calendar = icalendar.Calendar.from_ical(file.read())

# # not currently used
# menu_events = []
# with open('data/menu.json','w') as file:
#     for (index, event) in enumerate(calendar.walk('VEVENT')):
#         menu_event = {}
#         menu_event["meal_type"] = event.get("SUMMARY")
#         menu_event["foods"] = event.get("DESCRIPTION")
#         menu_events.append(menu_event)

#         # break if this is last with redundant safety
#         if (event.get("SUMMARY")=="Dinner") or (event.get("SUMMARY")=="Family Style Dinner") or (index>=2):
#             break
#     file.write(json.dumps(menu_events, indent=4))

with open('data/upcoming.txt','w') as file:
    text = ""
    for (index, event) in enumerate(calendar.walk('VEVENT')):
        text += str(event.get("DTSTART").dt.strftime("%m/%d/%Y")) + ": "
        text += event.get("SUMMARY") + "\n"
        text += event.get("DESCRIPTION") + "\n\n"

        if not is_event_relevant(event):
            break
    file.write(text)

f = open("data/upcoming.txt", "r")
print(f.read())