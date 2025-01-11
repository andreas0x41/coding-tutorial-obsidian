[Python strftime reference cheatsheet](https://strftime.org/)
[Python DateTime - strptime() Function - GeeksforGeeks](https://www.geeksforgeeks.org/python-datetime-strptime-function/)

used in [[datetime]] and [[time]]

|Format Code|Meaning|Example|
|---|---|---|
|%a|Abbreviated weekday name|Sun, Mon|
|%A|Full weekday name|Sunday, Monday|
|%w|Weekday as decimal number|0…6|
|%d|Day of the month as a zero-padded decimal|01, 02|
|%-d|Day of the month as decimal number|1, 2...|
|%b|Abbreviated month name|Jan, Feb|
|%m|Month as a zero-padded decimal number|01, 02|
|%-m|Month as a decimal number|1, 2|
|%B|Full month name|January, February|
|%y|Year without century as a zero-padded decimal|99, 00|
|%-y|Year without century as a decimal number|0, 99|
|%Y|Year with century as a decimal number|2000, 1999|
|%H|Hour (24-hour clock) as a zero-padded decimal number|01, 23|
|%-H|Hour (24-hour clock) as a decimal number|1, 23|
|%I|Hour (12-hour clock) as a zero-padded decimal number|01, 12|
|%-I|Hour (12-hour clock) as a decimal number|1, 12|
|%p|Locale’s AM or PM|AM, PM|
|%M|Minute as a zero-padded decimal number|01, 59|
|%-M|Minute as a decimal number|1, 59|
|%S|Second as a zero-padded decimal number|01, 59|
|%-S|Second as a decimal number|1, 59|
|%f|Microsecond as a decimal number|000000, 999999|
|%z|UTC offset in the form +HHMM or -HHMM||
|%Z|Time zone name||
|%j|Day of the year as a zero-padded decimal number|001, 365|
|%-j|Day of the year as a decimal number|1, 365|
|%U|Week number of the year (Sunday being the first)|0, 6|
|%W|Week number of the year|00, 53|
|%c|Locale’s appropriate date and time representation|Mon Sep 30 07:06:05 2013|
|%x|Locale’s appropriate date representation|11/30/98|
|%X|Locale’s appropriate time representation|10:03:43|
|%%|A literal '%' character|%|