---
title: 5 Datatypes
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
  - General
---
A datatype defines how different types of information/data are stored and behave. More detail regarding the behaviour can be found on the pages [[7 Operators|Operators]], built in methods and functions, ...

For almost every datatype in python, there is a function with the same (or similar) name that is used to create a object of that datatype or convert something from a different datatype.

| Name       | Function  | Syntax Example          | Explanation                                                              |
| ---------- | --------- | ----------------------- | ------------------------------------------------------------------------ |
| Integer    | int()     | 0, 13, -3               | whole number                                                             |
| Float      | float()   | 1.5, 1e-4               | rational/floating point number                                           |
| Boolean    | bool()    | True, False             | truth value, can only be True(1) or False(0)                             |
| String     | str()     | 'abc', "abc", """abc""" | text, can include, numbers, special characters, ...                      |
| List       | list()    | [1, 1, 2, 3]            | mutable collection of any datatype                                       |
| Tuple      | tuple()   | (1, 1, 2, 3)            | unmutable collection of any datatype                                     |
| Set        | set()     | {1, 2, 3}               | mutable collection of any datatype without order, indexing or duplicates |
| Dictionary | dict()    | {"a": 1, "c": "5"}      | mutable mapping of key and value pairs of any datatype                   |
| None       |           | None                    | None means that there is no value                                        |
| Complex    | complex() | 1j, 2+0.5j              | complex number with real and imaginary part                              |
# Basic Datatypes
## Integer
The datatype Integer can hold any whole number including negatives and zero. You can use the function `int()` to convert a value to an Integer, or create one with value `0` if no argument is given. 

```python
1 4 -2 0 -4 962 -123456789
```

## Float
The datatype Float can hold any rational/floating point number including negatives and zero. You can use the function `float()` to convert a value to a Float, or create one with value `0.0` if no argument is given. 

Python supports the scientific notation of writing numbers as a power of 10 for integers and floats. To do this you can give numbers in the format "`number`e`power`". So for example `1e3 == 1 * 10**3 == 1000` or `-1.5e-2 == -1.5 * 10**-2 == -0.015`.

```python
1.5 -0.5 0.0 3.3333 1e-4 2.5e3 -5e6
```

## Boolean
The datatype Boolean can hold a truth value. There are only two possible options for this value. True/False 1/0 Yes/No On/Off. This datatype is very important for Control Flow like Conditions, because it is usually based on many "Yes/No Questions", which are answered with a Boolean value. You can use the function `bool()` to convert a value to a Boolean, or create one with value `False` if no argument is given.

# Collection Datatypes
## General
Bellow you find a table of some key properties of the collection datatypes available in python.

| Name       | Mutable | Iterable                    | Indexing | Slicing | Common Use Case                            |
| ---------- | ------- | --------------------------- | -------- | ------- | ------------------------------------------ |
| String     | No      | Yes                         | Yes      | Yes     | Text processing and manipulation           |
| List       | Yes     | Yes                         | Yes      | Yes     | Storing and manipulating mutable sequences |
| Tuple      | No      | Yes                         | Yes      | Yes     | Fixed-size collections of items            |
| Set        | Yes     | Yes (but no order)          | No       | No      | Ensuring unique elements in a collection   |
| Dictionary | Yes     | Yes (keys, values, or both) | Keys     | No      | Key-value pair storage and lookups         |
### Mutable
A mutable object can be modified after it is created. This means you can change, add, or remove parts or all of its content without creating a new object. For example, you can change the value of the second item in a list, but you can not change the value of the second item in a tuple or string.

### Iterable
An iterable is any object capable of returning its elements one at a time, allowing it to be used in a loop (e.g., `for` loops). 

### Indexing
Indexing refers to accessing individual elements of a sequence using their position (index). Python uses zero-based indexing, meaning the first element has an index of `0`, second one has an index of `1`... You can also start indexing from the end of the sequence using negative numbers starting from -1, so the last element has an index of `-1`, the second last has an index of `-2`... 
A [[5 Datatypes#Dictionary|dictionary]] does not have classic ordered indexing with numbers. Instead, each element is a combination of key and value, and you use the key instead of an index

```python
[3, 1, 7, 4, 5, 2] # list of values
 0  1  2  3  4  5  # positive indexes
-6 -5 -4 -3 -2 -1  # negative indexes
```

Indexing can be used to get the value of a element or also to set/change it. To use it you first put the sequence and then the index inside square brackets `sequence[index]`.

```python
listName = [3, 1, 7, 4, 5, 2] # create list and save in variable listName
print(listName[2]) # get and print the third element of the list -> 7
listName[0] = -1 # set the first element of the list to -1
print(listName) # print the whole list -> [-1, 1, 7, 4, 5, 2]
```

### Slicing

Slicing is used to select a subsequence/portion of a sequence, instead of only on element. You can specifying a start, stop, and step.

```python
sequence[start:stop:step]
```

I you leave one of these blank, it will have a default value
- `start`: The starting index (**inclusive**). Defaults to `0` (first element) if omitted. Negative values work the same way as with indexing.
- `stop`: The ending index (**exclusive**). Defaults to `-1` (last element) if omitted. Negative values work the same way as with indexing.
- `step`: The interval between elements. Defaults to `1` (every element without skipping). Negative values reverse the order of the sequence.

If you get elements of a sequence using slicing, it will create a shallow copy[^1] of the sequence and give it to you. 

```python
listName = [3, 1, 7, 4, 5, 2, 9]  # create list and save in variable listName
print(listName[1:3])              # elements from the 2nd (inclusive) to the 4th (exclusive) -> [1, 7]
print(listName[:4])               # elements from the 1st to the 5th -> [3, 1, 7, 4]
print(listName[2:])               # elements from the 3rd to the last (inclusive) -> [7, 4, 5, 2, 9]
print(listName[:])                # all elements -> [3, 1, 7, 4, 5, 2, 9]
print(listName[0:5:2])            # every second element from the 1st to the 6th -> [3, 7, 5]
print(listName[::3])              # every third element from the whole sequence -> [3, 4, 9]
print(listName[-5:-1:1])          # elements from the 5th last (inclusive) to the last (exclusive) -> [7, 4, 5, 2]
print(listName[::-1])             # all elements in reverse order -> [9, 2, 5, 4, 7, 1, 3]
print(listName[6:1:-2])           # every second element from the 7th to the 2nd in reverse order -> [9, 5, 7]
```

You can also set multiple values at the same time using slicing. If you don't give the correct numbers of values to set/replace, you might get an error.

```python
listName = [3, 1, 7, 4, 5, 2, 9]  # create list and save in variable listName
listName[1:4] = [10, 20, 30]  # replace elements from the 2nd to the 5th -> [3, 10, 20, 30, 5, 2, 9]
listName[-2:] = [400, 500]  # replace elements from the 2nd last to the last -> [3, 10, 20, 30, 5, 400, 500]
listName[::2] = [1, 2, 3, 4]  # replace every secound element -> [1, 10, 2, 30, 3, 400, 4]
listName[:0] = [-1, -2]  # insert two new elements at the start of the sequence -> [-1, -2, 1, 10, 2, 30, 3, 400, 4]
listName[2:5] = []  # remove the elements from the 3rd to the 6th -> [-1, -2, 30, 3, 400, 4]
```

## String
The datatype String can hold any text including numbers and [[#Special Characters|special characters]]. In python, all strings have to be within quotes single `'string'` or double `"string"` quotes, using [[#Tripple Quotes String|tripple quotes]] has a special behaviour. You can use the function `str()` to convert a value to a String, or create one with value `""` if no argument is given. Strings also supports [[#Indexing|indexing]], [[#Slicing|slicing]] and some list functions/methods. But it is impossible to change individual elements/characters of a string, because it is not [[#Mutable|mutable]].

```python
"text" 'string' "some long message" "line 1\nline 2" """tripple quotes string"""
```

You might think of string as a base datatype, but it actually behaves very similar to a [[#List|list]] (or more precisely a [[#Tuple|tuple]]) of individual characters. So especially in low level languages you will find `character` as a base datatype and the string is just a collection of characters. 

### Special Characters
Python strings support many special characters. To use a special character first write a backslash `\` to escape the string and tell python that the next thing is a special character. After the backslash you can put one of the supported special characters. 

| Character    | Description                                                                                   | Example                                     |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `\n`         | Newline character. Moves the cursor to the next line.                                         | `"Hello\nWorld"` → `Hello` <br>`World`      |
| `\t`         | Horizontal tab. Adds a tab space.                                                             | `"Hello\tWorld"` → `Hello    World`         |
| `\\`         | Backslash. Escapes the backslash itself.                                                      | `"Path: C:\\Users"` → `Path: C:\Users`      |
| `\'` or `''` | Escapes a single quote **within** single-quoted strings.                                      | `'It\'s a test'` → `It's a test`            |
| `\"` or `""` | Escapes a double quote **within** double-quoted strings.                                      | `"She said \"Hello\""` → `She said "Hello"` |
| `\r`         | Carriage return. Moves the cursor to the beginning of <br>the line and overwrites characters. | `"123456789\rWorld"` → `World6789`          |
| `\b`         | Backspace. Removes the character before it.                                                   | `"Hello\bWorld"` → `HellWorld`              |
| `\u****`     | Unicode character with a 4-digit hex code.                                                    | `"\u2764"` → `❤`                            |
| `\U********` | Unicode character with an 8-digit hex code.                                                   | `"\U0001F600"` → 😀                         |
| `\x**`       | Character with a hex value (2 digits).                                                        | `"\x48"` → `H`                              |

Use raw strings (`r"string"`) to prevent special characters from being interpreted. For example if you do `r"line1\nstill line1"` there will not be any newline.
### Formatted String

### Tripple Quotes String

## List

## Tuple

## Set

## Dictionary


# Special Datatypes


## None

## Range

## Complex

## Bytes


## Object Oriented Programming
You can basically define and use your very own datatypes using OOP or import special datatypes created by others.

# Datatypes Internal Details

## Converting between Datatypes

## Storage Size and Value Range

## Binary

## Building Datatypes from Binary

[^1]: test