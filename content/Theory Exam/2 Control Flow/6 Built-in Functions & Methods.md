---
title: 2.6 Built-in Functions & Methods
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - ControlFlow
  - SDML
  - AECD
  - GEES
---
Python has many built-in [[content/Theory Exam/2 Control Flow/5 Function|functions]] and methods. Below or online you can find a overview of these functions and methods. The relevant ones are either already explained in other chapters, or after the table.

# Overview

| Category                    | Function/Method                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Type & Casting**          | `type()`, `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `dict()`                                                  |
| **Mathematical**            | `abs()`, `round()`, `sum()`, `min()`, `max()`                                                                                   |
| **Iterables & Sequences**   | `len()`, `sorted()`                                                                                                             |
| **String Handling**         | `.lower()`, `.upper()`, `.split()`, `.join()`, `.replace()`, `.find()`, `.count()`                                              |
| **List Methods**            | `.append()`, `.extend()`, `.insert()`, `.remove()`, `.index()`                                                                  |
| **Dictionary Methods**      | `.keys()`, `.values()`, `.items()`                                                                                              |



# Mathematical Functions

## `abs(x)`

Returns the absolute value of `x`.

```python
print(abs(-2))     # -> 2
print(abs(3 + 4j)) # -> 5
```

## `round(number, ndigits=None)`

Rounds `number` to `ndigits` decimal places (default: 0).

```python
print(round(4.56))        # -> 5
print(round(3.14159, 2))  # -> 3.14
print(round(123456, -3))  # -> 123000
```

## `sum(iterable, start=0)`

Returns the sum of `iterable`, plus a `start` value (default: 0).

```python
print(sum([1, 2, 3]))                # -> 6
print(sum((), start=5))              # -> 5
print(sum({2, -2, 3, -4}, start=2))  # -> 1
```

## `min/max(iterable, *, key=None, default=None)`

Returns the smallest/largest item in `iterable` or the `default` if empty. The `key` can take a [[content/Theory Exam/2 Control Flow/5 Function|function]] that will be executed for each element to determine its value.

```python
print(min([3, 1, 4]))                       # -> 1
print(max([3, 1, 4]))                       # -> 4
print(min(["apple", "banana"], key=len))    # -> apple
print(max(["apple", "banana"], key=len))    # -> banana
people = [{"name": "Andreas", "size": 181}, {"name": "Tom", "size": 168}]
print(min(people, key=lambda x: x["size"])) # -> {'name': 'Tom', 'size': 168}
print(max(people, key=lambda x: x["size"])) # -> {'name': 'Andreas', 'size': 181}
```

# Collections
## `len(obj)`

Returns the number of items in a collection `obj`.

```python
print(len([1, 2, 3]))   # -> 3
print(len("some text")) # -> 9
print(len("a b\n"))     # -> 4
print(len([1, (2, 3)])) # -> 2
```

## `sorted(iterable, *, key=None, reverse=False)`

Returns a new sorted list from `iterable`. Default is ascending (smallest to largest), but you can `reverse` it. The `key` can take a [[content/Theory Exam/2 Control Flow/5 Function|function]] that will be executed for each element to determine the value that will be used for sorting. You can also sort a existing list in place with the method `.sort()`.

```python
print(sorted([3, 1, 2]))  # -> [1, 2, 3]
people = [{"name": "Andreas", "size": 181}, {"name": "Tom", "size": 168}]
print(sorted(people, key=lambda x: x["size"])) # -> [{'name': 'Tom', 'size': 168}, {'name': 'Andreas', 'size': 181}]
```

# String Methods

## `.lower()` / `.upper()`

Returns string in all lower-/uppercase characters.

```python
print("Hello".lower())  # -> hello
print("Hello".upper())  # -> HELLO
```

## `.split(sep=" ", maxsplit=-1)`

Splits a string into a list. Whenever `sep` occurs, a new element will start. Default `sep` is a space " ". `maxsplit` is the maximum number of splits, or -1 for unlimited. 

```python
print("hello world text".split())                      # -> ['hello', 'world', 'text']
print("some | random | string".split(sep=" | "))       # -> ['some', 'random', 'string']
print("some long hello world text".split(maxsplit=2))  # -> ['some', 'long', 'hello world text']
```

## `.join(iterable)`

Joins string elements from an iterable with the string as separator.

```python
print("".join(["a", "b", "c"]))   # -> abc
print("-".join(["a", "b", "c"]))  # -> a-b-c
```

## `.find(sub, start=0, stop=None)`

Returns the index of the first occurrence of `sub`, or `-1` if not found. You can use `start` and `stop` to only search in a slice of the string.

```python
print("hello".find("l"))  # -> 2
```

## `.count(sub, start=0, end=None)`

Counts how often `sub` occurs. You can use `start` and `end` to only search in a slice of the string

```python
print("banana".count("a"))  # -> 3
```

## `.replace(old, new, count=-1)`

Replaces the `old` string with a `new` string. It will replace a maximum of `count` times, or -1 for unlimited.

```python
print("hello".replace("l", "x"))        # -> hexxo
print("hellllllo".replace("l", "x", 2)) # -> hexxllllo
print("hellllllo".replace("lll", "l"))  # -> hello
```

## `.startswith(string)` / `.endswith(string)`

Checks if a string starts or ends with a substring.

```python
print("hello".startswith("he"))  # -> True
print("hello".startswith("lo"))  # -> False
print("hello".endswith("lo"))    # -> True
```

# List Methods

## `.append(x)`, `.extend(iterable)`, `.insert(i, x)`

Add elements by`.append()` element at the end of the list, `extend()` at the end with multiple values from iterable, or`.insert()` element at index.

```python
l = [1]
l.append(2)
print(l)            # -> [1, 2]
l.extend([3, 4, 2])
print(l)            # -> [1, 2, 3, 4, 2]
l.insert(1, 5)
print(l)            # -> [1, 5, 2, 3, 4, 2]
```

## `.remove(x)`, `.pop(index=-1)`, `.clear()`

`.remove()` first element with specific value, `.pop()` (remove and return) element at index, or `.clear()` the whole list.

```python
l = [1, 5, 2, 3, 4, 2]
print(l.remove(2)) # -> None
print(l)           # -> [1, 5, 3, 4, 2]
print(l.pop())     # -> 2
print(l)           # -> [1, 5, 3, 4]
print(l.clear())   # -> None
print(l)           # -> [1, 5, 3, 4]
```

## `.copy()`

Returns a shallow copy.

# Object & Class Handling

## `isinstance(obj, classinfo)`, `issubclass(cls, classinfo)`

Check instance or subclass relations.

## `getattr(obj, name, default)`, `setattr(obj, name, value)`, `hasattr(obj, name)`, `delattr(obj, name)`

Get, set, check, or delete attributes dynamically.

# System & Debugging


## `exit()`

Exits the interpreter.

## `help(obj)`

Shows help.


## `repr(obj)`

Returns a string representation.

## `callable(obj)`

Checks if `obj` is callable.


## `exec(code)`, `eval(expr)`

Executes Python code.


## `globals()`, `locals()`

Returns the global or local namespace.