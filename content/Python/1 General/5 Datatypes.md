---
title: 1.5 Datatypes
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - General
  - SDML
  - AECD
  - GEES
---

A datatype defines how different types of information/data are stored and behave. More details regarding the behaviour can be found on the pages [[7 Operators|Operators]], built in methods and functions, ...

For almost every datatype in Python, there is a function with the same (or similar) name that is used to create an object of that datatype or convert something from a different datatype.

| Name                                   | Function   | Example                       | Explanation                                                               |
| -------------------------------------- | ---------- | ----------------------------- | ------------------------------------------------------------------------- |
| [[5 Datatypes#Integer\|Integer]]       | int()      | `0`, `11`, `-3`               | whole number                                                              |
| [[5 Datatypes#Float\|Float]]           | float()    | `1.5`, `1e-4`                 | rational/floating point number                                            |
| [[5 Datatypes#Boolean\|Boolean]]       | bool()     | `True`, `False`               | truth value, can only be True(1) or False(0)                              |
| [[5 Datatypes#String\|String]]         | str()      | `'abc'`, `f"x:\n{x}"`         | text, can include, numbers, special characters, ...                       |
| [[5 Datatypes#List\|List]]             | list()     | `[1, 1, 2, 3]`                | mutable collection of any datatype                                        |
| [[5 Datatypes#Tuple\|Tuple]]           | tuple()    | `(1, 1, 2, 3`)                | unmutable collection of any datatype                                      |
| [[5 Datatypes#Set\|Set]]               | set()      | `{2, 1, 3}`                   | mutable collection of any datatype without order, indexing or duplicates  |
| [[5 Datatypes#Dictionary\|Dictionary]] | dict()     | `{"a": 1, "c": "5"}`          | mutable mapping of key and value pairs of any datatype                    |
| [[5 Datatypes#None\|None]]             |            | `None`                        | None means that there is no value                                         |
| [[5 Datatypes#Complex\|Complex]]       | complex()  | `1j`, `1.2-0.5j`              | complex number with real and imaginary part                               |
| [[5 Datatypes#Range\|Range]]           | range()    | `range(8)`, `range(2, 99, 3)` | range of numbers                                                          |
| [[5 Datatypes#Generator\|Generator]]   |            |                               | iterator over a dataset, created by the programmer                        |

> [!todo]- not exam relevant
> These functions/methods are mostly not exam relevant.

There are a few built in functions/methods to check if something is a specific type of data. These are helpful to check input, potentially before converting it.

- **String Methods:** `.isdigit()`, `.isalpha()`, `.isalnum()`, `.isdecimal()`, `.isnumeric()`, `.isspace()`.
- **Type Checking:** `isinstance(obj, type)`, `type(obj)`, `callable(obj)`.
- **Regular Expressions**

# Basic Datatypes

## Integer

The datatype Integer can hold any whole number including negatives and zero. You can use the function `int()` to convert a value to an Integer, or create one with value `0` if no argument is given.

```python
1 4 -2 0 -4 962 -123456789
```

## Float

The datatype Float can hold any rational/floating point number including negatives and zero. You can use the function `float()` to convert a value to a Float, or create one with value `0.0` if no argument is given.

```python
1.5 -0.5 0.0 3.3333 1e-4 2.5e3 -5e6
```

### Scientific Number Notation

> [!todo]- not exam relevant
> This topic is not exam relevant.

Python supports the scientific notation of writing numbers as a power of 10 for integers and floats. To do this you can give numbers in the format "`number`e`power`". So for example `1e3 == 1 * 10**3 == 1000` or `-1.5e-2 == -1.5 * 10**-2 == -0.015`.

## Boolean

The datatype Boolean can hold a truth value. There are only two possible options for this value True or False (can also be thought of as 1/0 Yes/No On/Off). This datatype is very important for Control Flow like Conditions, because it is usually based on many "Yes/No Questions", which are answered with a Boolean value. You can use the function `bool()` to convert a value to a Boolean, or create one with value `False` if no argument is given.

# Collection Datatypes

## General

Bellow you find a table of some key properties of the collection datatypes available in Python.

| Name                                   | Mutable | Iterable                    | Indexing | Slicing | Common Use Case                            |
| -------------------------------------- | ------- | --------------------------- | -------- | ------- | ------------------------------------------ |
| [[5 Datatypes#String\|String]]         | No      | Yes                         | Yes      | Yes     | Text processing and manipulation           |
| [[5 Datatypes#List\|List]]             | Yes     | Yes                         | Yes      | Yes     | Storing and manipulating mutable sequences |
| [[5 Datatypes#Tuple\|Tuple]]           | No      | Yes                         | Yes      | Yes     | Fixed-size collections of items            |
| [[5 Datatypes#Set\|Set]]               | Yes     | Yes (but no order)          | No       | No      | Ensuring unique elements in a collection   |
| [[5 Datatypes#Dictionary\|Dictionary]] | Yes     | Yes (keys, values, or both) | Keys     | No      | Key-value pair storage and lookups         |
| [[5 Datatypes#Range\|Range]]           | No      | Yes                         | Yes      | Yes     | Generating sequences of numbers            |
| [[5 Datatypes#Generator\|Generator]]   | No      | Yes                         | No       | No      | Efficient iteration over large datasets    |

### Mutable

A mutable object can be modified after it is created. This means you can change, add, or remove parts or all of its content without creating a new object. For example, you can change the value of the second item in a list, but you can not change the value of the second item in a tuple or string. All basic datatypes are actually immutable. You can find the difference in behaviour between a mutable and immutable variable [[6 Variables#Mutability Behaviour|here]].

### Iterable

An iterable is any object that can return its elements one at a time, allowing it to be used in a loop (e.g., `for` loops).

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

> [!todo]- partly exam relevant
> Basics are relevant, more advanced usage is not necessary.

Slicing is used to select a subsequence/portion of a sequence, instead of only on element. You can specifying a start, stop, and step.

```python
sequence[start:stop:step]
```

I you leave one of these blank, it will have a default value

- `start`: The starting index (**inclusive**). Defaults to `0` (first element) if omitted. Negative values work the same way as with indexing.
- `stop`: The ending index (**exclusive**). Because it is exclusive, the element with this index is not included, to include the last element you have to use one more then its index or -1. Defaults to `-1` (last element) if omitted. Negative values work the same way as with indexing.
- `step`: The interval between elements. Defaults to `1` (every element without skipping). Negative values reverse the order of the sequence.

If you get elements of a sequence using slicing, it will create a shallow copy of the sequence and give it to you.

```python
listName = [3, 1, 7, 4, 5, 2, 9]  # create list and save in variable listName
# Index     0  1  2  3  4  5  6
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

> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

```python
listName = [3, 1, 7, 4, 5, 2, 9]  # create list and save in variable listName
listName[1:4] = [10, 20, 30]  # replace elements from the 2nd to the 5th -> [3, 10, 20, 30, 5, 2, 9]
listName[-2:] = [400, 500]  # replace elements from the 2nd last to the last -> [3, 10, 20, 30, 5, 400, 500]
listName[::2] = [1, 2, 3, 4]  # replace every secound element -> [1, 10, 2, 30, 3, 400, 4]
listName[:0] = [-1, -2]  # insert two new elements at the start of the sequence -> [-1, -2, 1, 10, 2, 30, 3, 400, 4]
listName[2:5] = []  # remove the elements from the 3rd to the 6th -> [-1, -2, 30, 3, 400, 4]
```

## String

The datatype String can hold any text including numbers and [[#Special Characters|special characters]]. In Python, all strings have to be within quotes single `'string'` or double `"string"` quotes, using [[#Tripple Quotes String|tripple quotes]] has a special behaviour. You can use the function `str()` to convert a value to a String, or create one with value `""` if no argument is given. Strings also supports [[#Indexing|indexing]], [[#Slicing|slicing]] and some list functions/methods. But it is impossible to change individual elements/characters of a string, because it is not [[#Mutable|mutable]].

```python
"text" 'string' "some long message" "line 1\nline 2" """tripple quotes string"""
```

You might think of string as a base datatype, but it actually behaves very similar to a [[#List|list]] (or more precisely a [[#Tuple|tuple]]) of individual characters. So especially in low level languages you will find `character` as a base datatype and the string is just a collection of characters.

### Special Characters

> [!todo]- partly exam relevant
> Basics are relevant, more advanced usage is not necessary. First 5 rows of the table are relevant, the others not.

Python strings support many special characters. To use a special character first write a backslash `\` to escape the string and tell Python that the next thing is a special character. After the backslash you can put one of the supported special characters.

| Character    | Description                                                                                  | Example                                     |
| ------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `\n`         | Newline character. Moves the cursor to the next line.                                        | `"Hello\nWorld"` → `Hello` <br>`World`      |
| `\t`         | Horizontal tab. Adds a tab space.                                                            | `"Hello\tWorld"` → `Hello    World`         |
| `\\`         | Backslash. Escapes the backslash itself.                                                     | `"Path: C:\\Users"` → `Path: C:\Users`      |
| `\'` or `''` | Escapes a single quote **within** single-quoted strings.                                     | `'It\'s a test'` → `It's a test`            |
| `\"` or `""` | Escapes a double quote **within** double-quoted strings.                                     | `"She said \"Hello\""` → `She said "Hello"` |
| `\r`         | Carriage return. Moves the cursor to the beginning<br>of the line and overwrites characters. | `"123456789\rWorld"` → `World6789`          |
| `\b`         | Backspace. Removes the character before it.                                                  | `"Hello\bWorld"` → `HellWorld`              |
| `\x**`       | Character with a hex value (2 digits).                                                       | `"\x48"` → `H`                              |
| `\u****`     | Unicode character with a 4-digit hex code.                                                   | `"\u2764"` → `❤`                           |
| `\U********` | Unicode character with an 8-digit hex code.                                                  | `"\U0001F600"` → 😀                         |

If you want to prevent special characters from being interpreted you can use raw strings `r"string"`. For example if you do `r"line1\nstill line1"` there will not be any newline.

### Formatted String

Formatted strings in Python provide an easy way to insert values into a string. To make a formatted string put an `f` in front of the the starting string quotes. Inside a formatted string, all the values within curly brackets `{value}` will be inserted into the string. The datatype will automatically be converted and there is also support for operators, functions and special formatting. If you want to print a curly bracket within a f-string, you have to put a double curly bracket `{{`.

```python
b = 5
pi = 3.14159
name = "Andreas"
print(f"My name is {name} and I am {19} years old.") # -> My name is Andreas and I am 19 years old.
print(f"The sum of {a} and {b} is {a+b}")            # -> The sum of 1 and 5 is 6
print(f"The user inputted: {input()}")               # -> The user inputted: {?}
print(f"Pi with two decimal places: {pi:.2f}")       # -> Pi with two decimal places: 3.14
print(f"Documenting operations: {1 + 3 * 2 = }")      # -> Documenting operations: 1 + 3 * 2 = 7
```

### Multiple Line String

> [!todo]- less exam relevant
> Less exam relevant, but still good/helpful to know.

Instead of using single or double quotes at start end end of a string, you can also use them three times (`'''` or `"""`) to create a multiline string. So within tripple quotes you can have multiple lines of text and it will keep the format, linebreaks and spacing. You can also combine this with [[#Formatted String]].

```python
print("""This is a
multiline string
    indentation is also
		as in the code""")
print(f"""Below you can see an operation
      {1 + 1 = }""")
```

```output
This is a
multiline string
    indentation is also
        as in the code
Below you can see an operation
      1 + 1 = 2
```

## List

The datatype List can hold a sequence of any datatypes, it is even possible to put collection datatypes inside a list. All list elements have to be within square brackets `[]`and separated by commas `,`. You can use the function `list()` to convert an [[#Iterable]] value to a list, or create an empty list `[]` if no argument are given. Strings also supports [[#Indexing|indexing]], [[#Slicing|slicing]] and many built in functions/methods. You can add, change or remove elements, because it is [[#Mutable|mutable]].

```python
[1, 1, 2, 3] [] [1, "hello", 3.14, True] [[[1,2,3], [-1,-2,-3]],[[10,20], [-10,-20]]]
```

## Tuple

You can think of a tuple like a [[#List]] where it is impossible to add, change or remove elements. The reason for this is, that a tuple is not [[#Mutable||mutable]]. All tuple elements have to be within parentheses/round brackets `()`and separated by commas `,`. You can use the function `tuple()` to convert an [[#Iterable]] value to a tuple, or create an empty tuple `()` if no argument are given.

```python
(1, 1, 2, 3) () (1, "hello", 3.14, True) ([[1, 2, 3], [-1, -2, -3]], [[10, 20], [-10, -20]])
```

## Set

> [!todo]- not exam relevant
> This topic is not exam relevant, but it is still good to know that this datatype exist and its ideas/behaviour.

A set is similar to a [[#List]] but the elements are stored in a specific ordered. Because of this, [[#Indexing]] is not possible. [[#Iterable|Iterating]] is possible, but there is no order defined for the elements. All set elements have to be within curly brackets `{}`and separated by commas `,`. You can use the function `set()` to convert an [[#Iterable]] value to a set or create an empty set if no argument are given. You only create an empty set using the function, because [[#Dictionary]] does also use curly brackets. You can add or remove elements, because it is [[#Mutable|mutable]]. A set can only store not [[#Mutable|mutable]] elements. A set does not allow for any duplicate elements, if you have duplicates only one of them will be stored. Only a few of the list operators, functions and methods will work, but there are also some special ones for sets.

```python
{1, 2, 3} set() {1, 3.14, 'hello'} {'hello', True, 2, 3.14}
print({1, 2, 1, 1, 3, 2, 3, 4, 5}) # duplicates removed, no specific order -> {3, 5, 1, 4, 2}
```

## Dictionary

The datatype Dictionary creates a mapping between keys and a values. A value can be any datatype. A key has to be unique (every key only exists) and not [[#Mutable|mutable]]. All dictionary elements have to be within curly brackets `{}`and separated by commas `,`. One element is a combination of a key and a value separated by a colon `:` like this `key:value`.

```python
{"a": 1, "c": "5"} {} {1: (1,2,3), "a": 1, (1,2): 1}
```

You can use the function `dict()` to convert values to a dictionary, or create an empty dictionary `{}` if no argument are given. You can use the function `dict()` by giving no arguments, an [[#Iterable]] of key and value pairs or keyword arguments.

```python
print(dict())                                                 # empty dictionary -> {}
print(dict([('name', 'Tom'), ('age', 25), ('city', 'Linz')])) # dictionary from pairs -> {'name': 'Tom', 'age': 25, 'city': 'Linz'}
print(dict(name='John', age=30, country='USA'))               # dictionary from keyword arguments -> {'name': 'John', 'age': 30, 'country': 'USA'}
```

You can get the value of a key the same way you would use normal [[#Indexing|indexing]]. You can add, change or remove elements, because it is [[#Mutable|mutable]]. If you want to add a value you can use assignment with the new key with the syntax `dictName[newKey] = newValue`, if the key already exists it will change the value of the existing key.

```python
person = {'name': 'Tom', 'age': 25, 'city': 'Linz'}
print(person["age"]) # print age of person -> 25
person["country"] = "Austria" # add new element with key "country" and value "Austria"
person["age"] = 19 # change the value of age to 19
print(person) # -> {'name': 'Tom', 'age': 19, 'city': 'Linz', 'country': 'Austria'}
```

# Special Datatypes

## None

The datatype None represents the absence of a value or a "null" value. It is often used to indicate that a variable or function does not have any (meaningful) value. None can be used as a placeholder, for example when defining a variable before its actual value is known. Having `None` is not an error it is just saying that there is no value/the value is nothing.

For example, if you try to get a variable value or list element that does not exist, you will get a error message. But storing/printing the value returned from a function that returns nothing is not an error, it just has the value `None`.

## Complex

> [!todo]- less exam relevant
> Less exam relevant, rarely used.

The datatype Complex represents a complex numbers. It has a real and an imaginary part, represented as `a + bj`, where `a` is the real part and `b` is the imaginary part. If you have a number with an imaginary part in Python, it will treat/save it as a complex number. You can use the function `complex()` to convert a value to a Complex, or create one with value `0j` if no argument is given. This function takes two numbers, the real part `a` and the complex part `b`, as arguments `complex(a, b)`.

```python
1+3j 1j -3+1j 0.1-1.5j 1-20000j 1-2e4j -0.001-1j -1e-3-1j
```

You can access the real or imaginary part of a complex number individually using the `.real` or `.imag` attributes.

```
z = 3 + 4j
print(z.real)  # -> 3.0
print(z.imag)  # -> 4.0
```

## Range

> [!todo]- partly exam relevant
> Only understand that this is different from list, because it does not store all elements in memory and instead generates them on demand. More advanced usage is not necessary.

The datatype Range is created with the range function and generates a sequence of numbers. It might seem very similar to a list, but the key difference is that not all elements are saved in memory, instead they are generated only when they are actually used. It is commonly used in loops and is a memory-efficient [[#Iterable]]. Interestingly you can even [[#Indexing|index]] and [[#Slicing|slice]] range objects and will either a number or a new slice as a result. You can not add, remove or change elements of a range, because it is not [[#Mutable||mutable]].

## Generator

> [!todo]- not exam relevant
> This topic is not exam relevant. It is a bit advanced and rarely used.

The datatype Generator is very similar to [[#Range]] in supporting memory efficient one by one [[#Iterable|iterating]] of elements. The key difference is that it supports all datatypes and you can define your own sequence generators. But they do not support [[#Indexing|indexing]] or [[#Slicing|slicing]] and it is not [[#Mutable||mutable]].

## Bytes

## Object Oriented Programming

> [!todo]- only SDML and AECD
> This topic is an advanced topic that is only relevant for the SDM and AECD department. There will be a note only for this at the end.

You can basically define and use your very own datatypes using OOP or import special datatypes created by others. First you have to define it with all its values and behaviour in a class, then you can create objects based on this class.

> [!quote]- Additional not exam relevant topics for later
> Contents
> 
> # Datatypes Internal Details
> 
> ## Truthy and Falsy
> 
> ## Converting between Datatypes
> 
> ## Storage Size and Value Range
> 
> ## Binary
> 
> ## Building Datatypes from Binary

# Questions
- [ ] What is a datatype and what is its purpose?
- [ ] Explain Integer in your own words.
	- [ ] How do you define an Integer in Python?
- [ ] Explain Float in your own words.
	- [ ] What is the difference between an Integer and a Float?
	- [ ] Explain the scientific notation in python.
- [ ] 3 Explain Boolean in your own words.
	- [ ] What is the Boolean type in Python used for?
- [ ] Explain String in your own words.
	- [ ] Explain special characters in your own words.
	- [ ] Explain Formatted String in your own words.
	- [ ] Explain Multiline String in your own words.
- [ ] Explain List in your own words.
	- [ ] What is the difference between a List and a Tuple in Python?
	- [ ] Can Lists store different data types in Python?
	- [ ] Explain Mutable in your own words.
	- [ ] Explain Iterable in your own words.	
	- [ ] Explain Indexing and Slicing in your own words.
	- [ ] Give an example of list inside a list and how you can index the inner list.
- [ ] Explain Tuple in your own words.
	- [ ] What makes a Tuple different from a List in Python?
	- [ ] Can you modify the items in a Tuple?
	- [ ] What are some use cases where you would prefer a Tuple over a List?
- [ ] Explain Set in your own words.
	- [ ] What are the main characteristics of a Set in Python?
	- [ ] How does a Set differ from a List or Tuple?
	- [ ] What values can you store in s set and what is special about this?
- [ ] Explain Dictionary in your own words.
	- [ ] How can you access values in a Dictionary?
	- [ ] What datatypes can you use a Dictionary key?
	- [ ] What datatypes can you use a Dictionary value?
- [ ] Explain None in your own words.
	- [ ] Give examples where you will get or use a None value.
- [ ] Explain Complex in your own words.
	- [ ] What is a Complex number in Mathematics and Python?
	- [ ] How can you get the real and imaginary part individually?
- [ ] Explain Range in your own words.
	- [ ] How does a Range differ from other types like a List?
- [ ] Explain Generator in your own words.
	- [ ] How does a Generator differ from other types like a List?
