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
Python has many built-in [[5 Function|functions]] and methods. Below or online you can find a overview of these functions and methods. The relevant ones are either already explained in other chapters, or after the table.
# Overview

| Category                    | Function/Method                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type & Casting**          | `type()`, `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `dict()`, `set()`, `frozenset()`, `complex()`, `bytes()`, `bytearray()`, `memoryview()`, `ord()`, `chr()`, `ascii()` |
| **Mathematical**            | `abs()`, `round()`, `pow()`, `divmod()`, `sum()`, `min()`, `max()`                                                                                                                         |
| **Iterables & Sequences**   | `len()`, `sorted()`, `reversed()`, `enumerate()`, `zip()`, `filter()`, `map()`, `all()`, `any()`                                                                                           |
| **String Handling**         | `.lower()`, `.upper()`, `.strip()`, `.split()`, `.join()`, `.replace()`, `.startswith()`, `.endswith()`, `.find()`, `.count()`                                                             |
| **List Methods**            | `.append()`, `.extend()`, `.insert()`, `.remove()`, `.pop()`, `.index()`, `.count()`, `.sort()`, `.reverse()`, `.copy()`, `.clear()`                                                       |
| **Set Methods**             | `.add()`, `.remove()`, `.discard()`, `.pop()`, `.union()`, `.intersection()`, `.difference()`, `.symmetric_difference()`, `.issubset()`, `.issuperset()`, `.copy()`, `.clear()`            |
| **Dictionary Methods**      | `.keys()`, `.values()`, `.items()`, `.get()`, `.pop()`, `.update()`, `.copy()`, `.clear()`                                                                                                 |
| **File Handling**           | `open()`, `.read()`, `.readline()`, `.readlines()`, `.write()`, `.writelines()`, `.close()`                                                                                                |
| **Object & Class Handling** | `isinstance()`, `issubclass()`, `getattr()`, `setattr()`, `hasattr()`, `delattr()`, `dir()`, `vars()`, `super()`                                                                           |
| **System & Debugging**      | `print()`, `input()`, `exit()`, `id()`, `hash()`, `help()`, `repr()`, `callable()`, `exec()`, `eval()`, `globals()`, `locals()`                                                            |


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
print(round(3.14159, 2))  # -> 3.14
print(round(4.56))        # -> 5
print(round(123456, -3))  # -> 123000
```

## `sum(iterable, start=0)`

Returns the sum of `iterable`, starting from `start` (default: 0).

```python
print(sum([1, 2, 3]))                # -> 6
print(sum({2, -2, 3, -4}, start=2))  # -> 1
```

## `min/max(iterable, *, key=None, default=None)`

Returns the smallest/largest item in `iterable` or the `default` if empty. The `key` can take a [[5 Function|function]] that will be executed for each element to determine its size.

```python
print(min([3, 1, 4]))                       # -> 1
print(max([3, 1, 4]))                       # -> 4
print(min(['apple', 'banana'], key=len))    # -> 'apple'
print(max(['apple', 'banana'], key=len))    # -> 'banana'
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
```

## `sorted(iterable, *, key=None, reverse=False)`

Returns a new sorted list from `iterable`. Default is ascending (smallest to largest), but you can `reverse` it. The `key` can take a [[5 Function|function]] that will be executed for each element pair to determine their order. The `key` can take a [[5 Function|function]] that will be executed for each element to determine the value that will be used for sorting. You can also sort a existing list in place with the method `.sort()`.

```python
print(sorted([3, 1, 2]))  # -> [1, 2, 3]
people = [{"name": "Andreas", "size": 181}, {"name": "Tom", "size": 168}]
print(sorted(people, key=lambda x: x["size"])) # -> [{'name': 'Tom', 'size': 168}, {'name': 'Andreas', 'size': 181}]
```

## `reversed(iterable)`

Returns an iterator reversing `iterable`. You can also reverse a existing list in place with the method `.reverse()`.

```python
print(list(reversed([1, 2, 3])))  # -> [3, 2, 1]
```

## `enumerate(iterable, start=0)`

Yields `(index, value)` pairs from `iterable`.

```python
print(list(enumerate([33, 66, 99], start=1)))  # -> [(0, 33), (1, 66), (2, 99)]
print(list(enumerate("abc", start=10)))  # -> [(10, 'a'), (11, 'b'), (12, 'c')]
```

## `zip(*iterables, strict=False)`

Combines iterables element-wise. The number of combined objects will be the same as the number of objects in the smallest iterable. If `strict`, then raise a `ValueError` if not all iterables have the same length.

```python
print(list(zip([1, 2], ['a', 'b'])))  # -> [(1, 'a'), (2, 'b')]
print(list(zip([1,2,3], (1j,2j,3j,4j), "abcdef")))  # -> [(1, 1j, 'a'), (2, 2j, 'b'), (3, 3j, 'c')]
```

## `filter(function, iterable)`

Filters elements for which `function` returns `True`.

```python
print(list(filter(lambda x: x > 0, [-1, 2, -3, 4])))  # -> [2, 4]
```

## `map(function, iterable)`

Applies `function` to each item.

```python
print(list(map(str, [1, 2, 3])))  # -> ['1', '2', '3']
```

# String Methods

## `.lower()` / `.upper()`

Converts string to all lower-/uppercase.

```python
print('Hello'.lower())  # -> 'hello'
print('Hello'.upper())  # -> 'HELLO'
```

## `.strip()`

Removes all whitespace from both ends.

```python
print('\n hello \n'.strip())  # -> 'hello'
```

## `.split(sep=" ", maxsplit=-1)`

Splits a string into a list whenever `sep` occurs. `maxsplit` is the maximum number of splits, or -1 for unlimited.

```python
print("hello world text".split())           # -> ['hello', 'world', 'text']
print("some|random|string".split(sep="|"))  # -> ['some', 'random', 'string']
```

## `.join(iterable)`

Joins elements with the string as separator.

```python
print('-'.join(['a', 'b', 'c']))  # -> 'a-b-c'
```

## `.replace(old, new, count=-1)`

Replaces `old` with `new`, up to `count` times.

```python
print('hello'.replace('l', 'x'))  # -> 'hexxo'
```

## `.startswith(prefix)` / `.endswith(suffix)`

Checks if a string starts or ends with a substring.

```python
print('hello'.startswith('he'))  # -> True
print('hello'.startswith('lo'))  # -> False
print('hello'.endswith('lo'))    # -> True
```

## `.find(sub, start=0, end=None)`

Returns the index of `sub`, or `-1` if not found. 

```python
print('hello'.find('l'))  # -> 2
```

## `.count(sub, start=0, end=None)`

Counts how often `sub` occurs.

```python
print('banana'.count('a'))  # -> 3
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

## `.remove(x)`, `.pop(i=-1)`, `.clear()`

`.remove()` first element with specific value, `.pop()` (remove and return) element at index, or `.clear()` the whole list.

```python
l.remove(2)
print(l)       # -> [1, 5, 3, 4, 2]
print(l.pop()) # -> 2
print(l)       # -> [1, 5, 3, 4]
```

## `.copy()`

Returns a shallow copy.

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
# Object & Class Handling

## `isinstance(obj, classinfo)`, `issubclass(cls, classinfo)`

Check instance or subclass relations.

## `getattr(obj, name, default)`, `setattr(obj, name, value)`, `hasattr(obj, name)`, `delattr(obj, name)`

Get, set, check, or delete attributes dynamically.

# System & Debugging

## `exit()`, `help(obj)`, `repr(obj)`, `callable(obj)`, `exec(code)`, `eval(expr)`, `globals()`, `locals()`

Various system utilities.