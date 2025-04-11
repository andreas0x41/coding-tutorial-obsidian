---
title: 2.4 For Loop
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

A `for` loop is used to iterate over a [[5 Datatype#Collection Datatypes|collection of elements]] or a [[5 Datatype#Range|range]] of numbers.  

# Summary
- **Basic Usage**: Iterates over all elements in a [[5 Datatype#Collection Datatypes|collection]] or [[5 Datatype#Range|range]] automatically.
- **Break**: Exits the loop immediately.
- **Continue**: Skips the rest of the current iteration and moves to the next iteration.
- **Else**: Runs only if the loop completes normally (not because of `break`).

# Basic
A `for` loop is useful when you need to iterate over a collection of elements or perform an action a set number of times.

```python
for element in collection:
    # Code to execute for each element
```

A `for` loop does not use a condition. Instead, it iterates through the collection using the elements one by one. So the first iteration uses, the first element, and the second iteration uses the second element, ... Below you can see a `for` loop iterating repeating 5 times using `range()` and then iterating through all elements of a [[5 Datatype#List|list]].

```python
for num in range(5):
    print(f"Number: {num}")

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
```

```output
Number: 0
Number: 1
Number: 2
Number: 3
Number: 4
I like apple
I like banana
I like cherry
```

# Break

The [[8 Keyword|keyword]] `break` works exactly the same as with a [[3 While Loop#Break|while loop]] and is used to immediately exit the loop.

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

# Continue

The [[8 Keyword|keyword]] `continue` works exactly the same as with a [[3 While Loop#Break|while loop]] and is used to skip the rest of the current iteration and move to the next one.

```python
for num in range(10):
    if num%2 == 0:
        continue
    print(num)
```

```output
1
3
5
7
9
```

# Else

> [!todo]- not exam relevant  
> Not exam relevant, very rarely used.

A `for` loop can have an `else` block, which works the same as with a [[3 While Loop#Break|while loop]]. It runs only if the loop finishes normally (without `break`).

```python
for num in range(2, 10):
    for i in range(2, num):
        if num % i == 0:
            print(f"{num} is not a prime number because it is divisible by {i}")
            break
    else:
        print(f"{num} is a prime number")
```

```output
2 is a prime number
3 is a prime number
4 is not a prime number because it is divisible by 2
5 is a prime number
6 is not a prime number because it is divisible by 2
7 is a prime number
8 is not a prime number because it is divisible by 2
9 is not a prime number because it is divisible by 3
```

# List Comprehension
List comprehensions provide a shorter and more readable way to create lists using a `for` loop in a single line. Instead of using a normal `for` loop to build a new list, list comprehension lets you do it directly. The syntax to do this is `[new_element for element in iterable]`, as you can see in the example below. When calculating the new element you can use operators, functions, ...

```python
# For loop version
squares1 = []
for n in range(5):
    squares.append(n**2)
print(squares1) # -> [0, 1, 4, 9, 16]

# List comprehension version
squares2 = [n**2 for n in range(5)]
print(squares2) # -> [0, 1, 4, 9, 16]
```

Both ways have the exactly same result, the only difference is that the second one is shorter.
## Condition

You can add a condition to include only certain elements with the syntax `[new_element for element in iterable if condition]`. An element will only be added to the list, if the condition is `True`. If the condition is `False`, it will be ignored

```python
# For loop version
evens1 = []
for i in range(10):
    if i % 2 == 0:
        evens.append(i)
print(evens1) # -> [0, 2, 4, 6, 8]

# List comprehension version
evens2 = [i for i in range(10) if i % 2 == 0]
print(evens2) # -> [0, 2, 4, 6, 8]
```

> [!info] add other datatypes later
> set, dictionary, generator expression, tuple find in Working Draft 2.


# Examples
These examples show how you can use a `for` loop in more advanced scenarios. You can find details of the functions/methods used in the other chapters or online.
## Dictionary

You can loop through dictionary keys, values, or both.

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

# Loop through keys
for key in person:
    print(f"Key: {key}, Value: {person[key]}")

# Loop through values
for value in person.values():
    print(f"Value: {value}")

# Loop through key-value pairs
for key, value in person.items():
    print(f"Key: {key}, Value: {value}")
```

```output
Key: name, Value: Alice
Key: age, Value: 30
Key: city, Value: New York
Value: Alice
Value: 30
Value: New York
Key: name, Value: Alice
Key: age, Value: 30
Key: city, Value: New York
```

## Multiple Lists

If you need to iterate through multiple lists at once, use `zip()`.

```python
names = ["Alice", "Bob", "Charlie"]
ages = [30, 25, 35]
print(list(zip(names, ages)))

for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

```output
[('Alice', 30), ('Bob', 25), ('Charlie', 35)]
Alice is 30 years old
Bob is 25 years old
Charlie is 35 years old
```

## Enumerate List

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

## String

A string is also iterable, so you can loop through its characters.

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

You can nest loops, for example when working with 2D structures.

```python
grid = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

for row in grid:
    for x in row:
        print(f"value {x}", end=", ")
    print(f"from row {row}")

for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```

```output
value 1, value 2, value 3, from row (1, 2, 3)
value 4, value 5, value 6, from row (4, 5, 6)
value 7, value 8, value 9, from row (7, 8, 9)
i=0, j=0
i=0, j=1
i=1, j=0
i=1, j=1
i=2, j=0
i=2, j=1
```

# Questions
- [ ] Explain `for` in your own words.
- [ ] What are the differences and similarities between `for` and `while` loops? When should you use which kind?
- [ ] Explain `break` and `continue` in your own words.
- [ ] Are `break` and `continue` potentially more or less useful within a `for` loop than in a `while` loop? Explain why with reasons and examples.
- [ ]  What happens if a `for` loop runs on an empty collection?
- [ ] Is it possible that a `for` loop is infinite? Why? Give reasons and examples.
- [ ] Explain the following code and its output:

```python
for a, b in enumerate("Test"):
    print(a, b)
```

- [ ] Explain `else` in combination with a `for` loop in your own words.
- [ ] How can a `for` loop be used to sum all even numbers from 1 to 100? Explain and write the code.
