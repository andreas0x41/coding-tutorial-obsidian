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

> [!todo]- partly exam relevant
> Only some of these Functions and Methods ae actually exam relevant.
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

## `.index(sub, start=0, stop=None)`

Returns the index of the first occurrence of `sub` in the collection. Throws a `Value Error` if `value` is not in the list. You can use `start` and `stop` to only search in a slice of the collection.

```python
print([4, 2, 7, 3, 1, 3].index(3)) # -> 3
```

## `sorted(iterable, *, key=None, reverse=False)`

Returns a new sorted list from `iterable`. Default is ascending (smallest to largest), but you can `reverse` it. The `key` can take a [[content/Theory Exam/2 Control Flow/5 Function|function]] that will be executed for each element to determine the value that will be used for sorting. You can also sort a existing list in place with the method `.sort()`.

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

## `zip(*iterables, strict=False)`

Combines iterables element-wise. The number of combined objects will be the same as the number of objects in the smallest iterable. If `strict`, then raise a `ValueError` if not all iterables have the same length.

```python
print(list(zip([1, 2], ["a", "b"])))  # -> [(1, 'a'), (2, 'b')]
print(list(zip([1,2,3], (1j,2j,3j,4j), "abcdef")))  # -> [(1, 1j, 'a'), (2, 2j, 'b'), (3, 3j, 'c')]
```

## `filter(function, iterable)`

Filters so that only elements for which`function` returns `True` are remaining.

```python
print(list(filter(lambda x: x>0, [-1, 2, -3, 4])))  # -> [2, 4]
```

## `map(function, iterable)`

Applies `function` to each item.

```python
print(list(map(lambda x: 10*x, [1, 2, 3])))  # -> [10, 20, 30]
print(list(map(str, [1, 2, 3])))             # -> ['1', '2', '3']
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