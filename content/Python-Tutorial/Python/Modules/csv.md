[csv — CSV File Reading and Writing — Python 3.11.4 documentation](https://docs.python.org/3/library/csv.html)
[Python CSV: Read and Write CSV files](https://www.programiz.com/python-programming/csv)
[How To Read A CSV File In Python - Earthly Blog](https://earthly.dev/blog/csv-python/)
[CSV Datei einlesen mit Python (Daten aus Excel nutzen)](https://www.python-lernen.de/csv-datei-einlesen.htm)

__functionality for reading from and writing to CSV files__

|Method/Attribute|Description|
|---|---|
|`csv.reader(file)`|Create a CSV reader object for reading a CSV file.|
|`csv.writer(file)`|Create a CSV writer object for writing to a CSV file.|
|`csv.register_dialect(name, dialect)`|Register a dialect for the CSV file format.|
|`csv.unregister_dialect(name)`|Unregister a previously registered dialect.|
|`csv.get_dialect(name)`|Get the dialect associated with the given name.|
|`csv.list_dialects()`|Get a list of all registered dialect names.|
|`csv.field_size_limit([size])`|Get or set the maximum field size allowed in CSV files.|
|`csv.reader.line_num`|Get the number of the current line being read.|
|`csv.reader.__iter__()`|Get an iterator over the lines in the CSV file.|
|`csv.writer.writerow(row)`|Write a single row of data to the CSV file.|
|`csv.writer.writerows(rows)`|Write multiple rows of data to the CSV file.|
|`csv.DictReader(file, fieldnames=None)`|Create a CSV reader object that returns rows as dictionaries.|
|`csv.DictWriter(file, fieldnames)`|Create a CSV writer object that writes rows from dictionaries.|
|`csv.Sniffer().sniff(sample)`|Guess the format of a CSV file based on a sample.|
|`csv.QUOTE_MINIMAL`|Quote fields only if necessary (default behavior).|
|`csv.QUOTE_ALL`|Quote all fields.|
|`csv.QUOTE_NONNUMERIC`|Quote all non-numeric fields.|
|`csv.QUOTE_NONE`|Never quote fields.|
|`csv.Dialect`|Base class for defining CSV dialects.|