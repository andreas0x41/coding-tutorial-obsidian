---
title: Untitled
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
---



# Python File Handling

## Opening and Closing Files
Use `open()` to open a file and `close()` to close it.

```python
file = open("example.txt", "r")
print(file.read())  # Read file content
file.close()  # Close the file
```

## File Opening Modes
Python provides various modes to open a file:

| Mode | Description                                                    |
| ---- | -------------------------------------------------------------- |
| `r`  | Read (default). File must exist.                               |
| `w`  | Write. Creates a new file or truncates an existing one.        |
| `a`  | Append. Creates a new file if it doesn't exist.                |
| `x`  | Create and Write. Fails if the file already exists.            |
| `t`  | Text mode (default). Used with other modes (e.g., `rt`, `wt`). |
| `b`  | Binary mode. Used with other modes (e.g., `rb`, `wb`).         |
| `+`  | Read and write mode (e.g., `r+`, `w+`, `a+`).                  |

## Context Manager

Using `with` ensures the file is automatically closed.

```python
with open("example.txt", "r") as file:
    content = file.read()
print(content)  # File is closed automatically
```

## Reading Files

### Reading Entire File

```python
with open("example.txt", "r") as file:
    content = file.read()
print(content)
```

### Reading Line by Line

```python
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # Removes newline characters
```

### Reading Specific Bytes

```python
with open("example.txt", "r") as file:
    content = file.read(10)  # Reads first 10 bytes
print(content)
```

### Using `readline()` and `readlines()`

```python
with open("example.txt", "r") as file:
    first_line = file.readline()  # Reads one line
    all_lines = file.readlines()  # Reads all lines into a list
print(first_line, all_lines)
```

## Writing to Files

### Overwriting File Content (`w`)

```python
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
```

### Appending to File (`a`)

```python
with open("example.txt", "a") as file:
    file.write("This is a new line.\n")
```

### Writing Multiple Lines

```python
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("example.txt", "w") as file:
    file.writelines(lines)
```

## Working with Binary Files

### Reading a Binary File

```python
with open("image.jpg", "rb") as file:
    data = file.read()
print(data[:10])  # Print first 10 bytes
```

### Writing a Binary File

```python
with open("copy.jpg", "wb") as file:
    file.write(data)
```

## File Pointer and Seeking

### Checking Current Position

```python
with open("example.txt", "r") as file:
    print(file.tell())  # Get current position
```

### Moving the Pointer (`seek()`)

```python
with open("example.txt", "r") as file:
    file.seek(5)  # Move to the 5th byte
    print(file.read())  # Read from new position
```

## Checking File Existence and Deletion

```python
import os

if os.path.exists("example.txt"):
    os.remove("example.txt")  # Delete file
else:
    print("File does not exist")
```

## Exception Handling in File Operations

```python
try:
    with open("example.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
```

## Summary

- Use `open(filename, mode)` to open files.
- Always close files or use `with` to manage them safely.
- Use `read()`, `readline()`, and `readlines()` for reading.
- Use `write()` and `writelines()` for writing.
- Use `seek()` and `tell()` to manipulate file position.
- Use `os.remove()` to delete files safely.

---

```

This note is fully structured and formatted in Obsidian Markdown. Let me know if you need modifications! 🚀
```