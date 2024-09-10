import requests
import icalendar

url = "https://peddie.org/events/month/?tribe_eventcategory%5B0%5D=250&ical=1"
response = requests.get(url)

# print (response.text)

with open('data/menu.ics', 'wb') as file:
    file.write(response.content)

with open('data/menu.ics', 'r') as file:
    calendar = icalendar.Calendar.from_ical(file.read())

text = ""
with open('data/menu.txt','w') as file:
    for event in calendar.walk('VEVENT'):
        text += event.get("SUMMARY") + "\n"
        text += event.get("DESCRIPTION") + "\n"
        if event.get("SUMMARY")=="Dinner" or event.get("SUMMARY")=="Family Style Dinner":
            break
    file.write(text)

f = open("data/menu.txt", "r")
print(f.read())