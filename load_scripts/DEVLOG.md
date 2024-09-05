2024/4/14

I will be putting all the load scripts into a folder called load scripts, and combining all the athletics ones into one.

When you run `python3 load_scripts/load_athletic_calendar.py` and the python file creates a new file, say `test.txt`, then it will be in the directory your shell is in, not inside load_scripts.

All the data will be loaded into a folder called data.
The python `open` function does not work if the directory doesn't exist, so I took care of that in runScripts.sh.

The icalendar library does not have type hints, which is annoying but whatever.

If viewing from `file:///<path to>/magic-mirror/index.html` on your browser, you will get `Unable to fetch portfolio, try again later` for many of the elements.

To avoid this, run `python3 -m http.server`.

The only visual change right now is changing the dates from `4/5` to `Apr 5`, as well as the order possibly changing if two events have the same date.
Ex: `4/16: Golf - Junior Varsity Boys vs. The Hun School of Princeton CHANGED:New location: was originally scheduled at Hun (Home)` to `Apr 16: Golf - Junior Varsity Boys vs. The Hun School of Princeton CHANGED:New location, was originally scheduled at Hun (Home)`.

### Dates

2024/4/14


It is long weekend right now, and the upcoming events is empty.

I feel like it should not be empty even if it is long weekend.

In calendar1.py, it decides whether the event should be listed based off:
``` python
if (
    startTimeString1 == todayMonth
    and startTimeString2 >= nextDay
    or startTimeString1 == nextMonth2
    and startTimeString2 <= actualDay
):
```
First of all, regardless of if this is interpreted the way it was intended to be interpreted, I feel like there should still be parentheses just so other coders can understand it.

I see that the previous maintainers imported relativedelta but didn't utilize it fully so I will just use it.
I will create a new python file to take care of the time stuff.

It turns out that the problem was that there are no events past march in the calendar, which is kind of weird. I will ask Tomaz about it.

### Academic Calendar

2024/4/16

The calendar is outdated, so I made a python script to fetch the calendar.

I am going to mergy calendar1.py and calendar2.py into one, and I am going to use more or less the same code from the athletic calendar.

### Small Changes

2024/4/22

Note: deleted tech lab, and the mm on techlab just displays index.html now.

Added meta tag to disable caching.

```html
<!-- the following 3 tags should all do the same thing: disable cache -->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```
