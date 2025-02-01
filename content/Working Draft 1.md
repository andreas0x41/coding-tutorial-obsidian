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


A `for` loop is used to iterate over a sequence (like a list, tuple, or string) or a range of numbers.  
# Summary
- **Basic Usage**: Iterates over elements in a sequence or range automatically.
- **Break**: Exits the loop immediately.
- **Continue**: Skips the rest of the current iteration and moves to the next.
- **Else**: Runs only if the loop completes normally (not via `break`).

# Basic
A `for` loop is useful when you need to iterate over a sequence of items or perform an action a set number of times.

```python
for item in sequence:
    # Code to execute for each item
```

Unlike a `while` loop, a `for` loop doesn't require manual control of the condition; it iterates automatically through the sequence.

Example with a list:

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
```

```output
I like apple
I like banana
I like cherry
```

Example using `range()`:

```python
for num in range(5):
    print(f"Number: {num}")
```

```output
Number: 0
Number: 1
Number: 2
Number: 3
Number: 4
```

Here, `range(5)` generates numbers from `0` to `4`, and the loop iterates over them.

# Break

The [[8 Keyword|keyword]] `break` is used to immediately exit the loop, stopping further iterations.

```python
for num in range(10):
    if num == 5:
        break
    print(num)
```

```output
0
1
2
3
4
```

Once `num` reaches `5`, the `break` statement exits the loop.

# Continue

The [[8 Keyword|keyword]] `continue` is used to skip the rest of the current iteration and move to the next one.

```python
for num in range(5):
    if num == 2:
        continue
    print(num)
```

```output
0
1
3
4
```

The number `2` is skipped because `continue` jumps to the next iteration.

# Else

> [!todo]- not exam relevant  
> Not exam relevant, very rarely used.

A `for` loop can have an `else` block, which runs only if the loop finishes normally (without `break`).

```python
for num in range(2, 10):
    for i in range(2, num):
        if num % i == 0:
            print(f"{num} is not a prime number")
            break
    else:
        print(f"{num} is a prime number")
```

```output
2 is a prime number
3 is a prime number
4 is not a prime number
5 is a prime number
6 is not a prime number
7 is a prime number
8 is not a prime number
9 is not a prime number
```

# Examples

## Iterating Over a Dictionary

You can loop through dictionary keys, values, or both.

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

# Loop through keys
for key in person:
    print(f"Key: {key}, Value: {person[key]}")

# Loop through key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")
```

```output
Key: name, Value: Alice
Key: age, Value: 30
Key: city, Value: New York
name: Alice
age: 30
city: New York
```

## Iterating Over Multiple Lists with `zip()`

If you need to iterate through multiple lists at once, use `zip()`.

```python
names = ["Alice", "Bob", "Charlie"]
ages = [30, 25, 35]

for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

```output
Alice is 30 years old
Bob is 25 years old
Charlie is 35 years old
```

## Using `enumerate()` for Indexing

To keep track of the index while looping through a list, use `enumerate()`.

```python
colors = ["red", "green", "blue"]

for index, color in enumerate(colors):
    print(f"Color {index}: {color}")
```

```output
Color 0: red
Color 1: green
Color 2: blue
```

## Iterating Over a String

A string is also an iterable, so you can loop through its characters.

```python
word = "Python"
for letter in word:
    print(letter)
```

```output
P
y
t
h
o
n
```

## Nested Loops

A `for` loop inside another `for` loop is useful for working with 2D structures.

```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

```output
i=0, j=0
i=0, j=1
i=1, j=0
i=1, j=1
i=2, j=0
i=2, j=1
```

# Questions

- [ ]  Explain `for` in your own words.
- [ ]  What are the differences and similarities between `for` and `while` loops?
- [ ]  Explain `break` in your own words.
- [ ]  Explain `continue` in your own words.
- [ ]  What happens if a `for` loop runs on an empty sequence?
- [ ]  Explain the following code and its output:

```python
for i in range(3):
    print(i)
```

- [ ]  Explain `else` in combination with a `for` loop in your own words.
- [ ]  How can a `for` loop be used to sum all even numbers from 1 to 100? Explain and write the code.

```

This should match the style of your `while` loop notes while including useful examples. Let me know if you need any refinements! 🚀
```