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

| Category               | Function/Method                                                                |
| ---------------------- | ------------------------------------------------------------------------------ |
| **Type & Casting**     | `type()`, `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `dict()` |
| **Mathematical**       | `abs()`, `round()`, `sum()`, `min()`, `max()`                                  |
| **Collections**        | `len()`                                                                        |
| **String Handling**    | `.lower()`, `.upper()`, `.count()`, `.replace()`                               |
| **List Methods**       | `.append()`, `.extend()`, `.insert()`, `.remove()`                             |
| **Dictionary Methods** | `.keys()`, `.values()`, `.items()`                                             |

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

## `sum(iterable)`

Returns the sum of the numbers in `iterable`.

```python
print(sum([1, 2, 3]))                # -> 6
print(sum((), start=5))              # -> 5
print(sum({2, -2, 3, -4}, start=2))  # -> 1
```

## `min/max(iterable)`

Returns the smallest/largest item in `iterable`.

```python
print(min([3, 1, 4])) # -> 1
print(max([3, 1, 4])) # -> 4
```

# Collections
## `len(obj)`

Returns the number of elements in a collection `obj`.

```python
print(len([1, 2, 3]))   # -> 3
print(len("some text")) # -> 9
print(len("a b\n"))     # -> 4
print(len([1, (2, 3)])) # -> 2
```

# String Methods

## `.lower()` / `.upper()`

Returns string in all lower-/uppercase characters.

```python
print("Hello".lower())  # -> hello
print("Hello".upper())  # -> HELLO
```

## `.count(sub)`

Counts how often `sub` occurs in the string.

```python
print("banana".count("a"))  # -> 3
```

## `.replace(old, new)`

Replaces the `old` string with a `new` string.

```python
print("hello".replace("l", "x"))        # -> hexxo
print("hellllllo".replace("lll", "l"))  # -> hello
```

# List Methods

## Add Elements

Add elements by`.append(value)` element with `value` at the end of the list, `extend(iterable)` at the end with multiple values from `iterable`, or`.insert(index, value)` element with `value` at `index`.

```python
l = [1]
l.append(2)
print(l)            # -> [1, 2]
l.extend([3, 4, 2])
print(l)            # -> [1, 2, 3, 4, 2]
l.insert(1, 5)
print(l)            # -> [1, 5, 2, 3, 4, 2]
```

## Remove Elements

Remove the first element with specific value using `.remove()` or remove element at index using the keyword [[content/Theory Exam/1 General/6 Variable#Deleting|del]].

```python
l = [1, 5, 2, 3, 4, 2]
print(l.remove(2)) # -> None
print(l)           # -> [1, 5, 3, 4, 2]
print(l.pop())     # -> 2
print(l)           # -> [1, 5, 3, 4]
print(l.clear())   # -> None
print(l)           # -> [1, 5, 3, 4]
```

# Dictionary Methods

`.keys()` returns a view of all keys in the dictionary. `.values()` returns a view of all values in the dictionary. `.items()` returns a view of (key, value) pairs.

```python
d = {'a': 1, 'b': 2}
print(list(d.keys()))  # -> ['a', 'b']
print(list(d.values()))  # -> [1, 2]
print(list(d.items()))  # -> [('a', 1), ('b', 2)]
```