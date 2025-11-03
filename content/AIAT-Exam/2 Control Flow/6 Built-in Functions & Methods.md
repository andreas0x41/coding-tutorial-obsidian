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
Python has many built-in [[Python/2 Control Flow/5 Function|functions]] and methods. Below or online you can find a overview of these functions and methods. The relevant ones are either already explained in other chapters, or after the table.
# Overview

| Category                  | Function/Method                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| **Type & Casting**        | `type()`, `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, `dict()`, `complex()` |
| **Mathematical**          | `abs()`, `round()`, `sum()`, `min()`, `max()`                                               |
| **Iterables & Sequences** | `len()`, `sorted()`, `reversed()`, `enumerate()`                                            |
| **String Handling**       | `.lower()`, `.upper()`, `.strip()`, `.split()`, `.join()`, `.replace()`,  `.count()`        |
| **List Methods**          | `.append()`, `.extend()`, `.insert()`, `.remove()`, `.pop()`                                |
| **Dictionary Methods**    | `.keys()`, `.values()`, `.items()`                                                          |


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

Returns the sum of `iterable` of numbers.

```python
print(sum([1, 2, 3]))                # -> 6
```

## `min/max(iterable, key=None)`

Returns the smallest/largest item in `iterable` or the `default` if empty. The `key` can take a [[Python/2 Control Flow/5 Function|function]] that will be executed for each element to determine its value.

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

## `sorted(iterable, key=None, reverse=False)`

Returns a new sorted list from `iterable`. Default is ascending (smallest to largest), but you can `reverse` it. The `key` can take a [[Python/2 Control Flow/5 Function|function]] that will be executed for each element to determine the value that will be used for sorting. You can also sort a existing list in place with the method `.sort()`.

```python
print(sorted([3, 1, 2]))  # -> [1, 2, 3]
people = [{"name": "Andreas", "size": 181}, {"name": "Tom", "size": 168}]
print(sorted(people, key=lambda x: x["size"])) # -> [{'name': 'Tom', 'size': 168}, {'name': 'Andreas', 'size': 181}]
```

## `reversed(iterable)`

Returns an iterator thats the reversed order of the initial `iterable`. You can also reverse a existing list in place with the method `.reverse()`.

```python
print(list(reversed([1, 2, 3])))  # -> [3, 2, 1]
```

## `enumerate(iterable, start=0)`

Returns an iterator with `(index, value)` pairs from `iterable`. You can set a `start` value for indexing (default: 0)

```python
print(list(enumerate([33, 66, 99])))     # -> [(0, 33), (1, 66), (2, 99)]
print(list(enumerate("abc", start=10)))  # -> [(10, 'a'), (11, 'b'), (12, 'c')]
```

# String Methods

## `.lower()` / `.upper()`

Returns string in all lower-/uppercase characters.

```python
print("Hello".lower())  # -> hello
print("Hello".upper())  # -> HELLO
```

## `.strip(character="")`

Returns a string without all `characters` at the start end end of the initial string. By default removes all whitespace type characters. Everything between the two outer most characters that are not in the `characters` to remove will be kept. You can use `.lstrip()`/`.rstrip()` to only remove from the start/end.

```python
print("  \n test message \n".strip())                      # -> test message
print("  \n test message \n".lstrip())                     # -> test message \n
print("  \n test message \n".rstrip())                     # ->   \n test message
print("  \n, ,,;; test, message,, ,;; \n".strip(" \n,;"))  # -> test message
```

## `.split(sep=" ")`

Splits a string into a list. Whenever `sep` occurs, a new element will start. Default `sep` is a space " ". 

```python
print("hello world text".split())                      # -> ['hello', 'world', 'text']
print("some | random | string".split(sep=" | "))       # -> ['some', 'random', 'string']
```

## `.join(iterable)`

Joins string elements from an iterable with the string as separator.

```python
print("".join(["a", "b", "c"]))   # -> abc
print("-".join(["a", "b", "c"]))  # -> a-b-c
```

## `.replace(old, new)`

Replaces the `old` string with a `new` string.

```python
print("hello".replace("l", "x"))        # -> hexxo
print("hellllllo".replace("lll", "l"))  # -> hello
```

## `.count(sub)`

Counts how often `sub` occurs.

```python
print("banana".count("a"))  # -> 3
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
`.remove()` first element with specific `value`, `.pop()` (remove and return) element at `index`, or `.clear()` the whole list.

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
