[Python JSON](https://www.w3schools.com/python/python_json.asp)
[json — JSON encoder and decoder — Python 3.11.4 documentation](https://docs.python.org/3/library/json.html)
[Python JSON: Read, Write, Parse JSON (With Examples)](https://www.programiz.com/python-programming/json)
[Read JSON file using Python - GeeksforGeeks](https://www.geeksforgeeks.org/read-json-file-using-python/)
[JSON in Python korrekt verwenden! | HelloCoding](https://hellocoding.de/blog/coding-language/python/json-verwenden)


__working with JSON data, encoding, decoding, ...__

[[../../General/json|json]]

|Method|Description|
|---|---|
|`json.dumps(obj)`|Serialize obj as a JSON formatted string.|
|`json.loads(s)`|Deserialize s (a str, bytes, or bytearray) to a Python object.|
|`json.dump(obj, fp)`|Serialize obj as a JSON formatted stream to a file-like object.|
|`json.load(fp)`|Deserialize a JSON file-like object to a Python object.|
|`json.JSONEncoder`|Custom JSON encoder class for encoding Python objects to JSON.|
|`json.JSONDecoder`|Custom JSON decoder class for decoding JSON to Python objects.|
|`json.JSONEncoder.default(obj)`|Method for custom encoding of non-JSON serializable objects.|
|`json.JSONDecoder.object_hook`|Method for custom decoding of JSON objects.|
|`json.JSONEncoder.encode(obj)`|Serialize obj as a JSON formatted string (same as `dumps`).|
|`json.JSONDecoder.decode(s)`|Deserialize s (a str, bytes, or bytearray) to a Python object (same as `loads`).|
