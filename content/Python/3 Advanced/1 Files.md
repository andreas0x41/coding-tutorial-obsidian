---
title: 3.1 Files
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - Advanced
  - SDML
  - AECD
  - GEES
---

Python allows you to read data from a file and write data to a file.
# Summary
- **Open:** Use `open(filePath, mode)` to open the file at `filePath` with a specific editing `mode`. 
- **Closing:** Use `close()` to close file and free resources.
- **Context Manager (`with open(...)`):** Opens file for context and ensures automatic file closing, even in case of exceptions.
- **Read:** Use methods to `read(n)` part or all of the file content.
- **Write:** Use `.write(string)` to write a string to a file.
- **File Pointer:** Tracks read/write position; use `tell()` to check and `seek(offset, whence)` to move.
# Open
To work with a file you first have to open it. The [[5 Function|function]] `open(filePath, mode="rt")` opens the file located at `filePath` and returns it as a file object for further usage. 

```python
file = open("example.txt")
file2 = open(r"c:\Andreas Patuzzi\AIAT\Code\PythonLessons\code-review.csv", "w")
```

## File Opening Modes
Python provides various modes to open a file. These define how the file is opened and what you can do with the file.

| Mode | Description                                                    |
| ---- | -------------------------------------------------------------- |
| `r`  | Read (default). File must exist.                               |
| `w`  | Write. Creates a new file or overwrites an existing one.       |
| `a`  | Append to end of file. Creates a new file if it doesn't exist. |
| `x`  | Create and Write. Error if the file already exists.            |

There are 3 additional modifiers that can be combined with the basic modes.

| Modifier | Description                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `t`      | Text mode (default) (e.g., `rt`, `wt`).                                                                                                         |
| `b`      | Binary mode (e.g., `rb`, `wb`).                                                                                                                 |
| `+`      | Read and write mode (e.g., `r+`, `w+`, `a+`,`rb+`). The behavior for checking/handling file file existence is the same as with the basic modes. |

You can use the methods `readable()` and `writable()` to check if you can read/write to a file object.

```python
file = open("example.txt", "r")
print(file.readable(), file.writable()) # -> True False

file = open("example.txt", "w")
print(file.readable(), file.writable()) # -> False True

file = open("example.txt", "rb+")
print(file.readable(), file.writable()) # -> True True
file.close()
print(file.readable(), file.writable()) # !!! ValueError: I/O operation on closed file
```

# Close
As soon as you no longer need a file you should close it to free up resources and ensure that changes are saved. This is done using the `close()` method. You can use the attribute `closed` to check if a file object is open or closed

```python
file = open("example.txt")
print(file.closed)         # False
file.close()
print(file.closed)         # True
```

# Context Manager
The context manager is an alternative way to open and close a file. t automatically closes the file once you exit the context, even if it is because of an [[7 Errors|error or exception]]. This makes safe file handling significantly easier and is almost always the better way to handle files. The syntax for opening a file is `with open(filePath) as varName:`.

```python
with open("example.txt") as file:
	# you can use the file inside the context manager
    content = file.read()
# As soon as you exit the context manager (indentation) the file is closed, but the variables still exist
print(file.closed)   # True
print(content)  
```

The context manager only ensures proper closing and freeing up the resources. To handle Error like `FileNotFoundError` or to do special error handling/closing, you have to write your own exception handling.

The context manager works when an object has the magic methods `__enter__` and `__exit__`. So you can also use it with some other resources, database connections, your own classes, ... 
# Read
The method `read(n)` returns the first n characters (including [[5 Datatype#Special Characters|special characters]]) from a file. By default it returns all the data until the end of a file as a string. You can also use `readline()` to read till the end of a line or `readlines()` to read all remaining lines as a list of strings. To properly understand reading parts of a file, you have to understand the [[1 Files#File Pointer|file pointer]].

Here is an example with the following data inside "example.txt".

```example.txt
This is a simple text file.
This demonstrates file reading.
0
1 2
3 4 5
6 7 8 9
```

We can read all the data at once.

```python
with open("example.txt", "r") as file:
    print(file.read()) # -> "This is a simple text file.\nThis demonstrates.....6 7 8 9"
with open("example.txt", "r") as file:
    print(file.readlines()) # -> ["This is a simple text file.\n", ....., "6 7 8 9"]
```

Or individual parts of it.

```python
with open("testFile.txt", "r") as file:
    print(file.read(5))      # -> "This "
    print(file.read(5))      # -> "is a "
    print(file.readline())   # -> "simple text file.\n"
    print(file.readline())   # -> "This demonstrates file reading.\n"
    print(file.read(2))      # -> "0\n"
    print(file.readlines())  # -> ['1 2\n', '3 4 5\n', '6 7 8 9']
```

Expecting specific (types of) data in a file, without checking, creates security and reliability problems. 
# Write
You can write a string to a file using the method `.write(string)`. It will return the number of characters written/length of the string. You can also write a list of strings to a file using the method `.writelines()`.

```python
with open("output.txt", "x") as file:
    print(file.write("This is a simple "))                    # characters written -> 17
    print(file.write("text file.\n"))                         # characters written -> 11
    print(file.write("This demonstrates file reading.\n0\n")) # characters written -> 34
    print(file.writelines(["1 2\n", "3 4 5\n", "6 7 8 9\n"])) # no retrun value -> None
```

This python code creates a new file, write the following text to it, and then close it. You can see that the resulting text is the same as used for the read example.

```output.txt
This is a simple text file.
This demonstrates file reading.
0
1 2
3 4 5
6 7 8 9
```

# File Pointer
The file pointer stores your current position in a file. The starting position of operations like reading and writing is the current position of the file pointer. 

> [!todo]- not exam relevant
> This is not exam relevant, but good to know and very helpful for working with specific positions/parts of a file.

The method `tell()` returns the current position of the file pointer with 0 being the start of the file. The method `seek(offset, whence)`goes to a specific position (in bytes) and returns the current absolute position. The `offset` is the number of bytes to move. The argument `whence` sets the origin point where `0` is the default and means start of the file, `1` means the current position, and `2` means the end of the file. Seeking relative to the current or end position only works in binary mode.

```example.txt
This is a simple text file.
This demonstrates file reading.
0
1 2
3 4 5
6 7 8 9
```

Lets read some specific parts of the example text file to demonstrate these methods.

```python
with open("example.txt", "rb") as file:
    print(file.tell())      # current position -> 0
    print(file.read(5))     # read 5 bytes -> b'This '
    print(file.tell())      # current position after reading -> 5
    print(file.seek(29, 1)) # go ahead 29 bytes from current positon -> 34
    print(file.readline())  # read line -> b'demonstrates file reading.\n'
    print(file.tell())      # current position after reading -> 62
    print(file.seek(-5, 2)) # go to 5 bytes before the end of the file -> 79
    print(file.read())      # read the rest of the file -> b'7 8 9'
    print(file.tell())      # current position after reading = end of file -> 84
    print(file.seek(0))     # go to start of the file -> 0
```

# Questions
- [ ] What function is used to open a file in Python? What does it do and return?
- [ ] Explain the different opening modes.
- [ ] For each of the 4 main opening modes, what happens if you open a file that does not exist and what happens if you open a file that already exists?
- [ ] How can you close a file?  
- [ ] How does a context manager (`with open(...)`) work and how does it improve file handling?  
- [ ] How can you check if a file is currently open or closed? How can you check if you can currently read from/write to a file?
- [ ] How can you read data from a file? What are the different options and how do they work?
- [ ] How can you write data to a file? What are the different options and how do they work?
- [ ] Explain the file pointer and why it is important? 
- [ ] Explain the method `tell()` in your own words. 
- [ ] Explain the method`seek(offset, whence)` in your own words. 
- [ ] You want to use `seek(offset, 0)` with a file in text mode (so you can only use relative position from the start). You know the total length/size of the file. Using this, how can you read only the last 10 characters of the file. Also, how can you go ahead 5 characters from your current position, no matter where your current position is.
