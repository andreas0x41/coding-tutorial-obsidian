---
title: Untitled
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
---
# Python Built-in Functions and Methods

## Mathematical Functions

### `abs(x)`

Returns the absolute value of `x`.

```python
print(abs(-5))  # -> 5
```

### `round(number, ndigits=None)`

Rounds `number` to `ndigits` decimal places (default: 0).

```python
print(round(3.14159, 2))  # -> 3.14
print(round(4.56))  # -> 5
print(round(123456, -3))  # -> 123000
```

### `pow(base, exp, mod=None)`

Computes `base**exp`. If `mod` is provided, computes `(base**exp) % mod`.

```python
print(pow(2, 3))  # -> 8
print(pow(2, 3, 5))  # -> 3
```

### `sum(iterable, start=0)`

Returns the sum of `iterable`, starting from `start` (default: 0).

```python
print(sum([1, 2, 3]))  # -> 6
```

### `min(iterable, *, key=None, default=None)`

Returns the smallest item in `iterable` or the `default` if empty.

```python
print(min([3, 1, 4]))  # -> 1
print(min(['apple', 'banana'], key=len))  # -> 'apple'
```

### `max(iterable, *, key=None, default=None)`

Returns the largest item in `iterable` or `default` if empty.

```python
print(max([3, 1, 4]))  # -> 4
print(max(['apple', 'banana'], key=len))  # -> 'banana'
```

## Iterables & Sequences

### `len(obj)`

Returns the number of items in `obj`.

```python
print(len([1, 2, 3]))  # -> 3
```

### `sorted(iterable, *, key=None, reverse=False)`

Returns a sorted list from `iterable`. `.sort()` modifies lists in-place.

```python
print(sorted([3, 1, 2]))  # -> [1, 2, 3]
```

### `reversed(iterable)`

Returns an iterator reversing `iterable`.

```python
print(list(reversed([1, 2, 3])))  # -> [3, 2, 1]
```

### `enumerate(iterable, start=0)`

Yields `(index, value)` pairs from `iterable`.

```python
print(list(enumerate(['a', 'b'], start=1)))  # -> [(1, 'a'), (2, 'b')]
```

### `zip(*iterables)`

Combines iterables element-wise.

```python
print(list(zip([1, 2], ['a', 'b'])))  # -> [(1, 'a'), (2, 'b')]
```

### `filter(function, iterable)`

Filters elements for which `function` returns `True`.

```python
print(list(filter(lambda x: x > 0, [-1, 2, -3, 4])))  # -> [2, 4]
```

### `map(function, iterable)`

Applies `function` to each item.

```python
print(list(map(str, [1, 2, 3])))  # -> ['1', '2', '3']
```

### `all(iterable)`

Returns `True` if all elements are truthy.

```python
print(all([True, 1, 'a']))  # -> True
```

### `any(iterable)`

Returns `True` if any element is truthy.

```python
print(any([0, '', False, 1]))  # -> True
```

## String Methods

### `.lower()` / `.upper()`

Converts string to lowercase or uppercase.

```python
print('Hello'.lower())  # -> 'hello'
```

### `.strip()`

Removes whitespace from both ends.

```python
print(' hello '.strip())  # -> 'hello'
```

### `.split(sep=None, maxsplit=-1)`

Splits a string into a list.

```python
print('hello world'.split())  # -> ['hello', 'world']
```

### `.join(iterable)`

Joins elements with the string as separator.

```python
print('-'.join(['a', 'b']))  # -> 'a-b'
```

### `.replace(old, new, count=-1)`

Replaces `old` with `new`, up to `count` times.

```python
print('hello'.replace('l', 'x'))  # -> 'hexxo'
```

### `.startswith(prefix)` / `.endswith(suffix)`

Checks if a string starts or ends with a substring.

```python
print('hello'.startswith('he'))  # -> True
```

### `.find(sub, start=0, end=None)`

Returns the index of `sub`, or `-1` if not found.

```python
print('hello'.find('l'))  # -> 2
```

### `.count(sub, start=0, end=None)`

Counts occurrences of `sub`.

```python
print('banana'.count('a'))  # -> 3
```

## List Methods

### Modification Methods

#### `.append(x)`, `.extend(iterable)`, `.insert(i, x)`

Modifies the list by adding elements.

```python
l = [1]
l.append(2)  # -> [1, 2]
l.extend([3, 4])  # -> [1, 2, 3, 4]
l.insert(1, 5)  # -> [1, 5, 2, 3, 4]
```

### Removal Methods

#### `.remove(x)`, `.pop(i=-1)`, `.clear()`

Removes elements from the list.

```python
l.pop()  # -> Removes last item
```

### Search Methods

#### `.index(x)`, `.count(x)`

Finds index or counts occurrences.

```python
print([1, 2, 3, 2].count(2))  # -> 2
```

### Sorting & Reversing

#### `.sort(key=None, reverse=False)`, `.reverse()`

Sorts or reverses the list in-place.

```python
l.sort(reverse=True)
```

### Copying

#### `.copy()`

Returns a shallow copy.

## System & Debugging

### Exiting & Help

#### `exit()`

Exits the interpreter.

#### `help(obj)`

Shows help.

### Introspection

#### `repr(obj)`

Returns a string representation.

#### `callable(obj)`

Checks if `obj` is callable.

### Code Execution

#### `exec(code)`, `eval(expr)`

Executes Python code.

### Namespace Handling

#### `globals()`, `locals()`

Returns the global or local namespace.

## Dictionary Methods

### `.keys()`

Returns a view of all keys in the dictionary.

```python
d = {'a': 1, 'b': 2}
print(list(d.keys()))  # -> ['a', 'b']
```

### `.values()`

Returns a view of all values in the dictionary.

```python
print(list(d.values()))  # -> [1, 2]
```

### `.items()`

Returns a view of `(key, value)` pairs.

```python
print(list(d.items()))  # -> [('a', 1), ('b', 2)]
```