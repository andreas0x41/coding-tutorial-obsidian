---
title: 4 Datatypes
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
A datatype defines how different types of information/data are stored and behave. More detail regarding the behaviour can be found on the pages [[6 Operators|Operators]], built in methods and functions, ...

For almost every datatype in python, there is a function with the same (or similar) name that is used to create a object of that datatype or convert something from a different datatype in.

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
The datatype Integer can hold any whole number including negatives and zero. You can use the function `int()` to convert a value to an Integer, or create one with value `0` if no value is given. 
## Float
The datatype Float can hold any rational/floating point number including negatives and zero. You can use the function `float()` to convert a value to an Float, or create one with value `0.0` if no value is given.
## Boolean
The datatype Boolean can hold a truth value. There are only two possible options for this value. True/False 1/0 Yes/No On/Off. This datatype is very important for Control Flow like Conditions, because it is usually based on many "Yes/No Questions", which are answered with a Boolean value. You can use the function `bool()` to convert a value to an Boolean, or create one with value `False` if no value is given.

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
A mutable object can be modified after it is created. This means you can change, add, or remove parts or all of its content without creating a new object.

### Iterable
An iterable is any object capable of returning its elements one at a time, allowing it to be used in a loop (e.g., `for` loops). 

### Indexing
Indexing refers to accessing individual elements of a sequence using their position (index). Python uses zero-based indexing, meaning the first element has an index of `0`, second one has an index of `1`... You can also start indexing from the end of the sequence using negative numbers starting from -1, so the last element has an index of `-1`, the second last has an index of `-2`...

```python
[3, 1, 7, 4, 5, 2] # list of values
 0  1  2  3  4  5  # positive indexes
-6 -5 -4 -3 -2 -1  # negative indexes
```

## String
The datatype String can hold any text including numbers and [[4 Datatypes#Special Characters|special characters]]. You can use the function `int()` to convert a value to an Integer, or create one with value `0` if no value is given.

You might think of string as a base datatype, but it actually behaves very similar to a list (or more precisely a tuple) of individual characters. So especially in low level languages you will find `character` as a base datatype and the string is just a collection of characters. The string datatype also supports indexing and some list functions/methods. 


### Special Characters

## List

## Tuple

## Set
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








