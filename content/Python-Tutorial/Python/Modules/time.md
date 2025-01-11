[time — Time access and conversions — Python 3.11.4 documentation](https://docs.python.org/3/library/time.html)
[Python time Module (with Examples)](https://www.programiz.com/python-programming/time)
[Python - Date & Time](https://www.tutorialspoint.com/python/python_date_time.htm)
[Python Time Module - GeeksforGeeks](https://www.geeksforgeeks.org/python-time-module/)

__functions for working with time, including timing measurements and formatting__

[[format datetime]]

|Function|Description|
|---|---|
|`time()`|Returns the number of seconds since the Unix epoch.|
|`sleep(secs)`|Suspends the execution for the specified number of seconds.|
|`ctime(secs)`|Converts a timestamp to a readable string representation.|
|`gmtime(secs)`|Converts a timestamp to a UTC `struct_time` object.|
|`localtime(secs)`|Converts a timestamp to a local `struct_time` object.|
|`strftime(format, t)`|Converts a `struct_time` object to a string based on the format string.|
|`strptime(string, format)`|Parses a string into a `struct_time` object based on the format string.|