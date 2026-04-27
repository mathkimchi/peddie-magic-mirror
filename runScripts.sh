mkdir -p data
# mkdir data/teamwise_calendars

# #Run Magic Mirror scripts

# # Load athletics calendar
python3 load_scripts/load_athletic_calendar.py

# # Load calendar events
python3 load_scripts/upcomingevents.py

# Load Menu
python3 load_scripts/menu.py

# #Load Weather
# python3 load_scripts/weather.py
