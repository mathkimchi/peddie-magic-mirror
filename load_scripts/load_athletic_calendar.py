from bs4 import BeautifulSoup as bs
import requests

url = "https://peddie.org/peddie-education/athletics/athletics-schedule/"

response = requests.get(url, headers={"User-Agent":"Mozilla/5.0"}, allow_redirects=True)
html = (response.text)

activities = ""

soup = bs(html, "html.parser")
actTable = soup.find('table')

for row in actTable.find_all("tr", limit=10):
    for tag in row.find_all("td", limit=4):
        activities += tag.string.strip() +  " "
    activities += "\n"

with open('data/athletics.txt','w') as file:
    file.write(activities)

f = open("data/athletics.txt", "r")
print(f.read())