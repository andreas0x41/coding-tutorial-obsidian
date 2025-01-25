---
title: Python Cheatsheet
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
description: 
aliases: 
tags:
  - Python
  - Cheatsheet
---

https://docs.python.org/3/
https://docs.python.org/3/library/functions.html
https://learnxinyminutes.com/docs/python/
https://teclado.com/30-days-of-python/
https://www.w3schools.com/python/default.asp
https://www.pythoncheatsheet.org/
https://realpython.com/
https://pythonbasics.org/
https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#python

```cmd
python --version   # get python version
```

```python
print("Hello World")
```


[^1] dsfasd fasd s
# In- and Output

```python
input(strPrompt)
```

```python
print(strOut1, strOutn, end=strAtEnd, sep=strArgSeperator)
```

```python
print("Welcome " + input("Please enter your name: "))
```


# Comments
```python
# Single line comments start with a number symbol.

""" 
Multiline strings and comments can be written
using 3 ", and are often used as documentation.
"""
```

# Datatypes

| Name       | Syntax Example          | Conversion |
| ---------- | ----------------------- | ---------- |
| Boolean    | True, False             | bool()     |
| Integer    | 0, 13, -3               | int()      |
| Float      | 1.5, 1e-4               | float()    |
| String     | 'abc', "abc", """abc""" | str()      |
| Complex    | 1j, 2+0.5j              | complex()  |
| List       | [1, 1, 2, 3]            | list()     |
| Tuple      | (1, 1, 2, 3)            | tuple()    |
| Set        | {1, 2, 3}               | set()      |
| Dictionary | {"a": 1, {b}: "5"}      | dict()     |

# Variables 
Dynamically-typed, assignment operator "=", global or local scope depending on definition position, when accessing current scope is searched first, nested scope can not be accessing from outside.
## Type Hinting
Optional type hinting, not strictly enforced by the interpreter, "typing" module can be useful for more complex type hinting
```python
name: str = "John"
age: int = 25

def output(a: str, b: int) -> bool:
	print(a, b)
    return True
```

# Operators
Assignment with =, can be combined with arithmetic and bitwise operators e.g. x<<:=1.
Walrus operator :=, additionally returns the assigned value, but can't be combined with operators.

## Arithmetic Operators

| OPERATOR | DESCRIPTION    | SYNTAX | FUNCTION       | MAGIC METHOD                |
| -------- | -------------- | ------ | -------------- | --------------------------- |
| +        | Addition       | a + b  | add(a, b)      | `__add__(self, other)`      |
| -        | Subtraction    | a - b  | sub(a, b)      | `__sub__(self, other)`      |
| *        | Multiplication | a * b  | mul(a, b)      | `__mul__(self, other)`      |
| /        | True Division  | a / b  | truediv(a, b)  | `__truediv__(self, other)`  |
| //       | Floor Division | a // b | floordiv(a, b) | `__floordiv__(self, other)` |
| %        | Modulo         | a % b  | mod(a, b)      | `__mod__(self, other)`      |
| **       | Power          | a ** b | pow(a, b)      | `__pow__(self, other)`      |

## Relational Operators

| Operator | Description      | Syntax | Function | Magic Method          |
|----------|------------------|--------|----------|-----------------------|
| >        | Greater than     | a > b  | gt(a, b) | `__gt__(self, other)` |
| >=       | Greater or equal | a >= b | ge(a, b) | `__ge__(self, other)` |
| <        | Less than        | a < b  | lt(a, b) | `__lt__(self, other)` |
| <=       | Less or equal    | a <= b | le(a, b) | `__le__(self, other)` |
| ==       | Equal to         | a == b | eq(a, b) | `__eq__(self, other)` |
| !=       | Not equal to     | a != b | ne(a, b) | `__ne__(self, other)` |


## Logical Operators
AND as well as OR don't just return a bool, but instead one of the operands.

| OPERATOR | DESCRIPTION                 |
|----------|-----------------------------|
| not      | Negate a boolean            |
| and      | Truthy if both are truthy    |
| or       | Truthy if at least one truthy|

## Bitwise Operators

|OPERATOR|DESCRIPTION|SYNTAX|FUNCTION|MAGIC METHOD|
|---|---|---|---|---|
|&|Bitwise AND|a & b|and_(a, b)|`__and__(self, other)`|
|\||Bitwise OR|a \| b|or_(a, b)|`__or__(self, other)`|
|^|Bitwise XOR|a ^ b|xor(a, b)|`__xor__(self, other)`|
|~|Bitwise NOT|~a|invert(a)|`__invert__(self)`|
|>>|Bitwise R shift|a >> b|rshift(a, b)|`__irshift__(self, other)`|
|<<|Bitwise L shift|a << b|lshift(a, b)|`__lshift__(self, other)`|

## Precedence

|Operators|Description|
|---|---|
|\*\*|Exponentiation|
|+x, -x, ~x|Unary Operators|
|\*, /, //, %|Arithmetic Operators|
|+, -|Addition/Subtraction|
|<<, >>|Bitwise Shift Operators|
|&, ^, \||Bitwise Operators|
|\==, !=, >, >=, <, <=, is, is not, in, not in|Comparison Operators|
|not, and, or|Logical Operators|

# Lists, Tuples, Sets, Dictionaries
## Indexing

```python
list = [1, 2, 3, 4]
list[start:end:step]              # Slicing: Extracts a portion of the list, tuple, or string based on the given start, end, and step
list[0]                           # Accessing the first element of the list => 1
list[-1]                          # Accessing the last element of the list => 4
list[1:3]                         # Extracting a sublist from index 1 to 3 (exclusive) => [2, 3]
list[::-1]                        # Reversing the list => [4, 3, 2, 1]
list[::2] = [10, 30]              # Modifying elements using indexing => list = [10, 2, 30, 4]

dictionary = {"name": "John", "age": 25, "city": "New York"}
dictionary[index]                 # Accessing the value associated with the key "name" in the dictionary => "John"
dictionary[index] = value         # Adding a new key-value pair to the dictionary
```

## Operators
```python
[1, 2] + [3, 4]                   # Concatenate lists => [1, 2, 3, 4]
3 * [1, 2, 3]                     # Repeat list 3 times => [1, 2, 3, 1, 2, 3, 1, 2, 3]
del list[index]                   # Delete an item at the given index
item in list                      # Check if item is in a list, tuple, set, or dictionary
```

## Methods
```python
list.get(key, ?default)           # Dictionary method: Retrieves the value at the specified key, or returns the default value if the key is not found
list.append(value)                # List method: Appends the value to the end of the list
list.insert(index, value)         # List method: Inserts the value at the specified index
list.extend(iterable)             # List method: Appends all elements of the iterable to the list
list.remove(value)                # List method: Removes the first occurrence of the value from the list
list.pop(index)                   # List method: Removes and returns the element at the specified index (defaults to the last element)
list.index(value, start, end)     # List method: Returns the index of the first occurrence of the value within the specified range
list.count(value)                 # List method: Returns the number of occurrences of the value in the list
list.reverse()                    # List method: Reverses the order of elements in-place (no return value)
list.sort(?key, ?reverse)         # List method: Sorts the list in-place
list.copy()                       # List method: Creates a shallow copy of the list
list.clear()                      # List method: Removes all elements from the list
dictionary.keys()                 # Dictionary method: Returns a view object of the keys in the dictionary
dictionary.values()               # Dictionary method: Returns a view object of the values in the dictionary
dictionary.items()                # Dictionary method: Returns a view object of the (key, value) pairs in the dictionary
```
## Functions
```python
zip(*iterables)                   # Built-in function: Creates an iterator of tuples by pairing elements from multiple iterables
filter(function, iterable)        # Built-in function: Creates an iterator containing elements for which the function returns True
map(function, iterable)           # Built-in function: Creates an iterator with the result of the function for each element
sorted(iterable, ?key, ?reverse)  # Built-in function: Returns a sorted list from the iterable
sum(iterable, ?start)             # Built-in function: Returns the sum of all elements in the iterable
min(iterable)                     # Built-in function: Returns the minimum element in the iterable
max(iterable)                     # Built-in function: Returns the maximum element in the iterable
len(iterable)                     # Built-in function: Returns the number of elements in the iterable
enumerate(iterable, ?start)       # Built-in function: Returns an iterator of tuples with indices and values of the iterable
reversed(sequence)                # Built-in function: Returns an iterator with elements in reverse order
any(iterable)                     # Built-in function: Returns True if any element in the iterable is True, otherwise False
all(iterable)                     # Built-in function: Returns True if all elements in the iterable are True, otherwise False
```

^ce54bd

## Set comparison
```python
set1 == set2                      # Equality - Checks if two sets contain the same elements
set1 != set2                      # Inequality - Checks if two sets do not contain the same elements
set1 < set2                       # Subset - Check if set1 is a subset of set2 (including equal with <=)
set1 > set2                       # Superset - Check if set1 is a superset of set2 (including equal with >=)
```
## Range
```python
range_(start, stop, step)         # Generates an iterable from start to stop (exclusive) with the given step
list(range(10, -2, -3))           # list from range => [10, 7, 4, 1]
```
## Comprehension
```python
list = [x for x in iterable if condition]
tuple = tuple(x for x in iterable if condition)
set = {x for x in iterable if condition}
dict = {key: value for key, value in iterable if condition}
```
## Unpacking
```python
a, *b, c = 1, 2, 3, 4             # Unpacking a tuple into variables: a = 1, b = [2, 3], c = 4
a, b = b, a                       # Swapping values of a and b
*[1, 2, 3, 4, 5]                  # Unpacking a list into separate values: 1, 2, 3, 4, 5
**dictionary                      # Unpacking a dictionary
```

# Strings
[W3School String Methods](https://www.w3schools.com/python/python_ref_string.asp)
[W3School .format()](https://www.w3schools.com/python/ref_string_format.asp)
[RealPython string formatting](https://realpython.com/python-f-strings/#f-strings-a-new-and-improved-way-to-format-strings-in-python)
[Cheatsheet string formatting](https://www.pythoncheatsheet.org/cheatsheet/string-formatting)

```python
name, age = "Andreas", 17

print("My name is " + name + ", I'm " + str(age))

print("My name is %s, I'm %s" % (name, age))

print("My name is {}, I'm {}".format(name, age))
print("My name is {0}, I'm {1}".format(name, age))
print("My name is {fname}, I'm {age}".format(fname = name, age = age))

print(f"My name is {name}, I'm {age}")
print(f"""My name is {name}, 
I'm {age}""")
print(f"\"{{{70 + 4 = }}}\"")
print(f"{name} starts with {name[0]} and is {len(name)} chars long.")
```
Indexing, Methods and functions partly like lists, additionally
```python
seperator.join(iterable)          # => Concate iterable elements separated into single string
string.strip(chars)               # => remove leading and tailing chars, default=" "
string.split(separator, maxsplit) # => split string into list, default=" " and all
string.splitlines(keepends)       # => split string into a list of lines, default no end \n
```

# Conditions
## if - else if - else
```python
if condition1:
    # code block 1, condition1 True
elif condition2:
    # code block 2, condition1 False and condition2 True
else: 
    # code block 3, condition1 and condition2 False
```
## Ternary Operator
```python
value_if_true if condition else value_if_false
```
## match case
https://www.geeksforgeeks.org/python-match-case-statement/
https://learnpython.com/blog/python-match-case-statement/
```python
match parameter:   
    case first:
	    # case first   
    case second:
	     # case second
    case n :
		 # case n
    case _:
	     # default case

match list:
	case["a"]:
		# list only contains a
	case["a", *other_items]:
		# a is the first item and {other_items} are the other elements
	case[*first_items, "d"] | (*first_items, "d"):
		# d is the last item and {first_items} are elements before it
	case _:
		# default case

match dictionary:
	case{"name": "Om"}:
		# matches only for one key if the key exists with the pair value
	case{"framework": "Django", "language": "Python"}:
		# this matches multiple keys and values
	case{"name": name, "language": language, "framework": framework}:
		# name is {name}, language is {language} and framework is {framework}
	case _:
		# default case
```

# Loops
## while 
```python
while condition:
	# code block executed while condition True
else:
	# code block executed when for finished without break
```
## for
```python
for item in iterator
	# code block executed for each item in iterator
else:
	# code block executed when for finished without break

for key, value in dictionary.items() # example iterate over dictionary
```
## Control Statements
```python
break                             # jump out of (inner) loop
continue                          # jump to next repetition of (inner) loop
```

# File Handling
## Standard File Handling
```python
file = open(path, mode, encoding) # open file at path with mode and encoding e.g. utf-8
content = file.read()             # read content from file as string
file.write(content)               # write string to file
file.close()                      # close file
```
## Open Modes
```python
"r"      reading, error if it doesn't exist
"w"      writing, new file if it doesn't exist
"a"      append, new file if it doesn't exist
"x"      exclusive creation, error if it doesn't exist

"t"      text, default, for text data
"b"      binary, for binary data (e.g. images)
"+"      r and w, e.g. rb+
```

## Context Manager
ensure proper automatic `___enter___` (open) and `___exit___` (close) even in case of an exception
```python
with open(path, mode) as file:
	file.read(), file.write(content), ...
```

# Exception Handling
```python
try:
	# code block
	raise ExceptionType("Error message") # raise/throw exception
except ExceptionType1:
	# exception handling for ExceptionType1
except (ExceptionType2, ExceptionType3):
	# exception handling for ExceptionType2 and ExceptionType3
except Exception as e:
	# exception handling for other exceptions
else:
	# if none exception
finally:
	#always
```

# Functions
## Standard Functions
```python
def funcName(par1, par2=default, *args, **kwargs): # function with par1, par2
	# *args takes all remaining unnamed arguments as tuple
	# **kwargs takes all all remaining named arguments as dictionary
	global outerVar # include variable from global scope to change it
	def innerFuncName(): # define inner function
		# code block
	# code block
	return returnValues
```
## Iterator Generator
```python
def custom_iterator():
    while True: 
        # Generate the next value
        yield value # yield value but stay in function

for item in custom_iterator():
    # Process each item one by one, you can get net item with next(iterator)
```
## lambda
```python
lambda arguments: expression # inline function, e.g. lambda x, y: x + y
```
## Decorators
decorate/wrap a function
```python
def decorator(func):
    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")
    return wrapper

@decorator
def function():
    print("Hello, world!")
```

# Packages and Import
## Install Packages with pip
https://docs.python.org/3/installing/index.html
https://pip.pypa.io/en/stable/
```cmd
python -m pip --version   # get pip version
```
```cmd
python -m pip install SomePackage   # install SomePackage
```
```cmd
python -m pip install -r requirements.txt   # install Packages listed in requirements.txt
```
```cmd
python -m pip install SomePackage==1.0.4    # install SomePackage with specific version
```
```cmd
python -m pip install "SomePackage>=1.0.4"  # install SomePackage with minimum version
```
```cmd
python -m pip install --upgrade SomePackage   # upgrade SomePackage
```
```cmd
python -m pip uninstall SomePackage   # uninstall SomePackage
```
```cmd
python -m pip list   # get list of installed Packages
```
## import
you can import installed packages as well as your own python files
```python
import module_name
from module_name import object_name
from module_name import object1, object2, ...
from module_name import *
import module_name as alias
import package_name.module_name
```

## Common Modules
https://pypi.org/
# OOP
## Standard Class
```python
class className:
	classAttribute = 0            # classAttribute shared among instances
    def __init__(self, par1, par2, par3):
        # Constructor - Initializes the object
        self.publicVar = par1
        self._protectedVar = par2 # primarely hinting
        self.__privateVar = par3  # no strict privacy in python	
	
    def methodName(self, par):    # methods like functions, self as instance reference
        return returnValues
	
    @classmethod
    def methodName(cls, par):     # cls as class reference, shared among instances
        return returnValues
    
    @staticmethod
    def methodName(par):          # method without class or instance reference
        return returnValues
	
    @property
    def attributeName(self):      # getter, defines get for attributeName
        return self.attributeName
	
    @attributeName.setter
    def attributeName(self, val): # defines set for attributeName
        self.attributeName = val
	
    @attributeName.deleter
    def attributeName(self):      # defines del for attributeName
        del self.attributeName

objName = className(a, b, c)      # calls __init__ and returns the object
objName.publicVar      objName._protectedVar      objName._className__privateVar
objName.methodName(par)
objName.methodName     objName.methodName=0       del objName.methodName  
```
## Magic Methods
Provide additional functionality with built in operators, methods, ...
```python
__repr__(self)                    # return string representation of object
__len__(self)                     # called when using len()
__getitem__(self, key)            # get item using [] indexing
__setitem__(self, key, value)     # set item using [] indexing
__delitem__(self, key)            # del item using [] indexing
__iter__(self)                    # call when object used as iterator
__next__(self)                    # invoked by iterator to get next element, used with iter
__enter__(self)                   # setup and entry for context manger
__exit__(self, ...)               # release and exit for context manager
```
## Inheritance
```python
class baseClass:
    def __init__(self, par):      # base class initialization logic        
	
    def baseMethod1(self, par):   # base class method1
    
    def baseMethod2(self, par):   # base class method1

class derivedClass(baseClass):
    def __init__(self, par):      # if not defined base __init__ is used
        super().__init__(par)     # call base class __init__	
        # derivedClass initialization logic
	
    def baseMethod1(self, par):   # override base class method        
	
    def derivedMethod(self, par): # derived class method
```

[^1]: test Footnote 1