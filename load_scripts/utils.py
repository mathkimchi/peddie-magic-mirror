from icalendar import Event
from datetime import date
import datetime
from dateutil.relativedelta import relativedelta
from typing import Union


def time_to_int(time_to_convert: Union[datetime.datetime, date, Event]) -> int:
    # Ex: "2024-04-17 16:00:00" would become the integer 20240417160000
    # A useful property is the ordering of this
    if type(time_to_convert) == datetime.datetime or type(time_to_convert) == date:
        return int(time_to_convert.strftime("%Y%m%d%H%M%S"))
    elif type(time_to_convert) == Event:
        time_to_convert_datetime: datetime.datetime | date = time_to_convert.decoded("dtstart")  # type: ignore
        return time_to_int(time_to_convert_datetime)
    raise TypeError(f"{time_to_convert} has type: {type(time_to_convert)}")


def is_event_relevant(event: Event) -> bool:
    threshold = date.today() + relativedelta(months=2)

    return time_to_int(date.today()) < time_to_int(event) < time_to_int(threshold)
