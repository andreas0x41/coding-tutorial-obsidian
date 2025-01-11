[datetime — Basic date and time types — Python 3.11.4 documentation](https://docs.python.org/3/library/datetime.html)
[Python Dates](https://www.w3schools.com/python/python_datetime.asp)
[Python datetime (With Examples)](https://www.programiz.com/python-programming/datetime)
[Python DateTime [Guide] – PYnative](https://pynative.com/python/datetime/)

__use and manipulate dates, times, timestamps, timezones, ...__

[[format datetime]]

|Class/Function|Description|
|---|---|
|`datetime(year, month, day, hour, minute, second)`|Creates a `datetime` object with the specified date and time components.|
|`date(year, month, day)`|Creates a `date` object with the specified date components.|
|`time(hour, minute, second)`|Creates a `time` object with the specified time components.|
|`today()`|Returns the current local `datetime` object.|
|`now(tz=None)`|Returns the current local or specified timezone-aware `datetime` object.|
|`utcnow()`|Returns the current UTC `datetime` object.|
|`strftime(format)`|Converts a `datetime` object to a string based on the format string.|
|`strptime(string, format)`|Parses a string into a `datetime` object based on the format string.|
|`timedelta(days, seconds, microseconds, milliseconds, minutes, hours, weeks)`|Represents a duration or difference between two `datetime` objects.|
|`replace(year, month, day, hour, minute, second)`|Creates a new `datetime` object with the specified components replaced.|
|`weekday()`|Returns the day of the week as an integer (Monday is 0 and Sunday is 6).|
|`isoweekday()`|Returns the ISO day of the week as an integer (Monday is 1 and Sunday is 7).|
|`isocalendar()`|Returns a tuple containing ISO year, ISO week number, and ISO weekday.|
