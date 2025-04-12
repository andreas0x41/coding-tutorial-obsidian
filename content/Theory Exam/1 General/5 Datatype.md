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

A datatype defines how different types of information/data are stored and behave. Examples of the behavior can be found on the pages [[content/Theory Exam/1 General/7 Operator|Operators]], [[content/Theory Exam/2 Control Flow/6 Built-in Functions & Methods|Built-in Functions & Methods]], ...


For almost every datatype in Python, there is a function with the same (or similar) name that is used to create an object of that datatype or convert something from a different datatype.

| Name                                                                | Function  | Example                       | Explanation                                                                                      |
| ------------------------------------------------------------------- | --------- | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| [[content/Theory Exam/1 General/5 Datatype#Integer\|Integer]]       | int()     | `0`, `11`, `-3`               | whole number                                                                                     |
| [[content/Theory Exam/1 General/5 Datatype#Float\|Float]]           | float()   | `1.5`, `-0.321`               | rational/floating-point number                                                                   |
| [[content/Theory Exam/1 General/5 Datatype#Boolean\|Boolean]]       | bool()    | `True`, `False`               | truth value, can only be True or False                                                           |
| [[content/Theory Exam/1 General/5 Datatype#String\|String]]         | str()     | `'abc'`, `f"x:\n{x}"`         | text, can include, numbers, special characters, ...                                              |
| [[content/Theory Exam/1 General/5 Datatype#List\|List]]             | list()    | `[1, 1, 2, 3]`                | [[#Mutable\|mutable]] collection of any datatype                                                 |
| [[content/Theory Exam/1 General/5 Datatype#Tuple\|Tuple]]           | tuple()   | `(1, 1, 2, 3`)                | [[#Mutable\|unmutable]] collection of any datatype                                               |
| [[content/Theory Exam/1 General/5 Datatype#Dictionary\|Dictionary]] | dict()    | `{"a": 1, "c": "5"}`          | 1 to 1 mapping of not [[#Mutable\|mutable]] keys to [[#Mutable\|mutable]] values of any datatype |
| [[content/Theory Exam/1 General/5 Datatype#None\|None]]             |           | `None`                        | None means that there is no value                                                                |
| [[content/Theory Exam/1 General/5 Datatype#Complex\|Complex]]       | complex() | `1j`, `1.2-0.5j`              | complex number with real and imaginary part                                                      |
| [[content/Theory Exam/1 General/5 Datatype#Range\|Range]]           | range()   | `range(8)`, `range(2, 99, 3)` | range of numbers                                                                                 |
# Basic Datatypes

## Integer

The datatype Integer can hold any whole number including negatives and zero. You can use the function `int()` to convert a value to an Integer, or create one with the value `0` if no argument is given.

```python
1 4 -2 0 -4 962 -123456789 int("2")
```

## Float

The datatype Float can hold any rational/floating-point number including negatives and zero. You can use the function `float()` to convert a value to a Float or create one with the value `0.0` if no argument is given.

```python
1.5 -0.5 0.0 3.3333 1e-4 2.5e3 -5e6 float("1.3")
```

## Boolean

The datatype Boolean can hold a truth value. There are only two possible options for this value True or False (can also be thought of as 1/0 Yes/No On/Off). This datatype is very important for Control Flow like [[content/Theory Exam/2 Control Flow/2 Conditions|Conditions]] because it is usually based on many "Yes/No Questions", which are answered with a Boolean value. You can use the function `bool()` to convert a value to a Boolean, or create one with value `False` if no argument is given.

```python
True False bool(1)
```

# Collection Datatypes
Collection datatypes are a combination of multiple basic datatypes.
## General

Below are some key properties of the collection datatypes available in Python.

| Name                                                                | Mutable | Iterable               | Indexing | Slicing | Common Use Case                                     |
| ------------------------------------------------------------------- | ------- | ---------------------- | -------- | ------- | --------------------------------------------------- |
| [[content/Theory Exam/1 General/5 Datatype#String\|String]]         | No      | Yes                    | Yes      | Yes     | Text processing and manipulation                    |
| [[content/Theory Exam/1 General/5 Datatype#List\|List]]             | Yes     | Yes                    | Yes      | Yes     | Storing and manipulating mutable sequences          |
| [[content/Theory Exam/1 General/5 Datatype#Tuple\|Tuple]]           | No      | Yes                    | Yes      | Yes     | Fixed/Constant collections of items                 |
| [[content/Theory Exam/1 General/5 Datatype#Set\|Set]]               | Yes     | Yes (but no order)     | No       | No      | Ensuring unique elements in a collection, Set Logic |
| [[content/Theory Exam/1 General/5 Datatype#Dictionary\|Dictionary]] | Yes     | keys, values, or pairs | Keys     | No      | Key-value pair storage and lookups                  |
| [[content/Theory Exam/1 General/5 Datatype#Range\|Range]]           | No      | Yes                    | Yes      | Yes     | Generating sequences of numbers                     |
### Mutable
A mutable object can be modified after it is created, a immutable object can not. This means you can change, add, or remove parts or all of its content without creating a new [[content/Theory Exam/1 General/6 Variable#Memory Objects|object]]. For example, you can change the value of the second item in a list, but you can not change the value of the second item in a tuple or string. All basic datatypes are immutable. So when it seems like the value changes, it is actually a completely new [[content/Theory Exam/1 General/6 Variable#Memory Objects|object]]. You can find the difference in behavior between mutable and immutable variables [[content/Theory Exam/1 General/6 Variable#Mutability Behaviour|here]].

### Iterable
An iterable is an object that can return its elements one at a time, allowing it to be used in a loop (e.g., `for` loops).

### Indexing
Indexing refers to accessing individual elements of a sequence using their position (index). Python uses zero-based indexing, meaning the first element has an index of `0`, the second one has an index of `1`... You can also start indexing from the end of the sequence using negative numbers starting from -1, so the last element has an index of `-1`, the second last has an index of `-2`...

```python
[3, 1, 7, 4, 5, 2] # list of values
 0  1  2  3  4  5  # positive indexes
-6 -5 -4 -3 -2 -1  # negative indexes
```

Indexing can be used to get the value of an element or also to set/change it. To use it you first put the sequence and then the index inside square brackets `sequence[index]`.

```python
listName = [3, 1, 7, 4, 5, 2] # Create list and save in variable listName
print(listName[2]) # get and print the third element of the list -> 7
listName[0] = -1 # Set the first element of the list to -1
print(listName) # print the whole list -> [-1, 1, 7, 4, 5, 2]
```

A [[content/Theory Exam/1 General/5 Datatype#Dictionary|dictionary]] does not have classic ordered indexing with numbers. Instead, each element is a combination of key and value, and you use the key instead of an index
### Slicing

Slicing is used to select a subsequence/portion of a sequence, instead of only one element. You can specify a start, stop, and step.

```python
sequence[start:stop:step]
```

- `start`: The starting index (**inclusive**). Defaults to `0` (first element) if omitted. Negative values work the same way as with indexing.
- `stop`: The ending index (**exclusive**). Because it is exclusive, the element with this index is not included, to include the last element you have to use one more than its index. Defaults to the last element if omitted. Negative values work the same way as with indexing.
- `step`: The interval between elements. Defaults to `1` (every element without skipping). Negative values reverse the order of the sequence.

If you get elements of a sequence using slicing, it will create a shallow copy of the sequence and give it to you.

```python
listName = [3, 1, 7, 4, 5, 2, 9]  # Create a list and save it in variable listName
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

print("abcde"[::-1])              # all elements in reverse order -> edcba
```

## String

The datatype String can hold any text including numbers and [[#Special Characters|special characters]]. In Python, all strings have to be within quotes single `'string'` or double `"string"` quotes, using [[#Multiple Line String|triple quotes]] has a special behavior. You can use the function `str()` to convert a value to a String or create one with the value `""` if no argument is given. Strings also supports [[#Indexing|indexing]], [[#Slicing|slicing]] and some list functions/methods. But it is impossible to change individual elements/characters of a string because it is [[#Mutable|immutable]].

```python
"text" 'string' "some long message" "line 1\nline 2" """triple quotes string"""
```

You might think of a string as a base datatype, but it actually behaves very similar to a [[#Tuple|tuple]] of individual characters. So especially in low-level languages you will find `character` as a base datatype and the string is just a collection of characters.

### Special Characters

Python strings support many special characters. To use a special character first write a backslash `\` to escape the string and inform Python that what follows is a special character. After the backslash, you can put one of the supported special characters.

| Character    | Description                                                                               | Example                                     |
| ------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------- |
| `\n`         | Newline character. Moves the cursor to the next line.                                     | `"Hello\nWorld"` → `Hello` <br>`World`      |
| `\t`         | Horizontal tab. Adds a tab space.                                                         | `"Hello\tWorld"` → `Hello    World`         |
| `\\`         | Backslash. Escapes the backslash itself.                                                  | `"Path: C:\\Users"` → `Path: C:\Users`      |
| `\'` or `''` | Escapes a single quote **within** single-quoted strings.                                  | `'It\'s a test'` → `It's a test`            |
| `\"` or `""` | Escapes a double quote **within** double-quoted strings.                                  | `"She said ""Hello\""` → `She said "Hello"` |

### Formatted String

Formatted strings in Python provide an easy way to insert values into a string. To make a formatted string put an `f` in front of the the starting string quotes. Inside a formatted string, all the values within curly brackets `{value}` will be inserted into the string. The datatype will automatically be converted and there is also support for operators, functions, and special formatting. If you want to print a curly bracket within an f-string, you have to put a double curly bracket `{{`.

```python
b = 5
pi = 3.14159
name = "Andreas"
print(f"My name is {name} and I am {19} years old.") # -> My name is Andreas and I am 19 years old.
print(f"The sum of {a} and {b} is {a+b}")            # -> The sum of 1 and 5 is 6
print(f"The user inputted: {input()}")               # -> The user inputted: {?}
```

## List

The datatype List can hold a sequence of any datatypes. It is also possible to put collection datatypes inside a list. All list elements are within square brackets `[]` and separated by commas `,`. You can use the function `list()` to convert an [[#Iterable]] value to a list or create an empty list `[]` if no arguments are given. Lists also support [[#Indexing|indexing]], [[#Slicing|slicing]], and many built-in functions/methods. You can add, change or remove elements, because it is [[#Mutable|mutable]].

```python
[1, 1, 2, 3] [] [1, "hello", 3.14, True] [[1,2,3], (-1,-2,-3), {10,20}, {"a": 1, "c": "5"}]
```

## Tuple

You can think of a tuple like a [[#List]] where it is impossible to add, change or remove elements. The reason for this is, that a tuple is [[#Mutable||immutable]]. The tuple elements are within parentheses/round brackets `()` and separated by commas `,`. You can use the function `tuple()` to convert an [[#Iterable]] value to a tuple or create an empty tuple `()` if no arguments are given.

```python
(1, 1, 2, 3) () (1, "hello", 3.14, True) ([1,2,3], (-1,-2,-3), {10,20}, {"a": 1, "c": "5"})
```

## Dictionary

The datatype Dictionary creates a 1 to 1 mapping between keys and values. So instead of using an index, the values are uniquely identified by their key. A value can be any datatype. A key has to be unique (every key can only exist once) and [[#Mutable|immutable]]. The dictionary elements are within curly brackets `{}` and separated by commas `,`. One element is a combination of a key and a value separated by a colon `:` like this `key:value`.

```python
{"a": 1, "c": "5"} {} {1: "test", "1": 123, "a": 1, (1,2): 1}
```

You can use the function `dict()` to convert values to a dictionary or create an empty dictionary `{}` if no arguments are given. You can use `dict()` with no [[content/Theory Exam/2 Control Flow/5 Function#Parameters|arguments]], an [[#Iterable]] of key and value pairs, or keyword arguments.

```python
print(dict())                                                 # empty dictionary -> {}
print(dict([("name", "Tom"), ("age", 25), ("city", "Linz")])) # dictionary from pairs -> {'name': 'Tom', 'age': 25, 'city': 'Linz'}
print(dict(name="John", age=30, country="USA"))               # dictionary from keyword arguments -> {'name': 'John', 'age': 30, 'country': 'USA'}
```

You can get and set the value of a key the same way you would use normal [[#Indexing|indexing]]. You can add, change or remove elements, because it is [[#Mutable|mutable]]. If you want to add a value you can use assignment to the new key with the syntax `dictName[newKey] = newValue`. If the key already exists it will change the value of the existing key.

```python
person = {"name": "Tom", "age": 25, "city": "Linz"}
print(person["age"]) # print age of person -> 25
person["country"] = "Austria" # add a new element with key "country" and value "Austria"
person["age"] = 19 # change the value of age to 19
print(person) # -> {'name': 'Tom', 'age': 19, 'city': 'Linz', 'country': 'Austria'}
```

# Special Datatypes

## None

The datatype None represents the absence of a value or a "null" value. It is often used to indicate that a variable or function does not have any value. None can be used as a placeholder, for example when defining a variable before its actual value is known. Having `None` is not an error it is just saying that there is no value/the value is nothing.

For example, if you try to get a variable value or list element that does not exist, you will get an error message. But storing/printing the value returned from a function that returns nothing is not an error, it just has the value `None`.

```python
x = print() # The print function does not return anything
print(x)    # -> None
```

## Complex

The datatype Complex represents a complex number. It has a real and an imaginary part, represented as `a + bj`, where `a` is the real part and `b` is the imaginary part. If you have a number with an imaginary part in Python, it will treat/save it as a complex number. You can use the function `complex()` to convert a value to a Complex, or create one with value `0j` if no argument is given. This function can take two numbers, the real part `a` and the complex part `b`, as arguments `complex(a, b)`.

```python
1+3j 1j -3+1j 0.1-1.5j 1-20000j 1-2e4j -0.001-1j -1e-3-1j
```

You can access the real or imaginary part of a complex number individually using the attributes `.real` and `.imag`.

```python
z = 3 + 4j
print(z.real)  # -> 3.0
print(z.imag)  # -> 4.0
```

## Range

The datatype Range is created with the `range()` function and generates a sequence of numbers. It does not safe all values in memory. Instead, they are generated only when they are actually used. Instead, they are generated only when they are actually used. It is commonly used in loops and is a memory-efficient [[#Iterable]]. You can not add, remove, or change elements of a range because it is [[#Mutable||immutable]].

The `range()` function generates a range of numbers. The arguments are similar to slicing and you can use `range(stop)`, `range(start, stop)`, or `range(start, stop, step)`
- `start`: The starting number (**inclusive**), default is `0`.
- `stop`: The ending value (**exclusive**). Because it is exclusive, this value is not included, to include the last value you have to use one more than it. 
- `step`: The interval between elements. Defaults is `1` (every number without skipping). Negative values are also possible, but then `start` should be bigger than `stop`.

```python
print(list(range(5)))          # -> [0, 1, 2, 3, 4]
print(list(range(1, 10)))      # -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list(range(-10, 10, 2))) # -> [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8]
print(list(range(100, 0, -9))) # -> [100, 91, 82, 73, 64, 55, 46, 37, 28, 19, 10, 1]
```

## OOP
You can basically define and use your very own datatypes using Object Oriented Programming. You can also import special datatypes created by others. First, you have to define all the attributes (=data) and methods (=behavior) in a class. Then you can create objects based on the class.

# Internal Details
## Truthy and Falsy
In Python, any value can be evaluated (e.g. in a [[content/Theory Exam/1 General/7 Operator#Logical Operators|logical operator]], [[content/Theory Exam/2 Control Flow/2 Conditions|condition]], ...) like a boolean. Python will treat it as truthy (`True`) or falsy (`False`) based on its type and value.
- **Falsy Values**: `False`, `0`, `0.0`, `0j`, `""`, `[]`, `()`, `set()`, `{}`, `None`, `range(0)`
- **Truthy Values**: Everything else so not empty collections and not zero numeric values

```python
print(bool(0-1j))     # True
print(bool([]))       # False
print(bool(range(0))) # False
print(bool(0.000001)) # True
print(bool(""))       # False
print(bool(" "))      # True
```

# Questions
- [ ] What is a datatype and what is its purpose?
- [ ] Explain Integer in your own words.
	- [ ] What is the difference between an Integer and a Float?
- [ ] Explain Float in your own words.
	- [ ] Explain the scientific notation in Python.
- [ ] 3 Explain Boolean in your own words.
	- [ ] What is the Boolean type in Python used for?
- [ ] Explain String in your own words.
	- [ ] Explain special characters in your own words.
	- [ ] Explain Formatted String in your own words.
	- [ ] Explain Raw and Multiline String in your own words.
- [ ] Explain List in your own words.
	- [ ] Explain Mutable in your own words with examples.
	- [ ] Explain Iterable in your own words with examples.	
	- [ ] Explain Indexing and Slicing in your own words with examples.
	- [ ] Can Lists store different data types in Python?
	- [ ] Give a practical example of list inside a list and how you can index the inner list.
- [ ] Explain Tuple in your own words.
	- [ ] What makes a Tuple different from a List?
	- [ ] What are some use cases where you would prefer a Tuple compared to a List?
- [ ] Explain Dictionary in your own words.
	- [ ] How can you access values in a Dictionary?
	- [ ] What datatypes can you use a Dictionary key?
	- [ ] What datatypes can you use a Dictionary value?
- [ ] Explain None in your own words.
	- [ ] Give examples where you will get or use a None value.
- [ ] Explain Complex in your own words.
	- [ ] What is a Complex number in Mathematics and Python?
	- [ ] How can you get the real and imaginary parts individually?
- [ ] Explain Range in your own words.
	- [ ] How does a Range differ from other types like a List?
- [ ] Explain truthy and falsy in your own words.
