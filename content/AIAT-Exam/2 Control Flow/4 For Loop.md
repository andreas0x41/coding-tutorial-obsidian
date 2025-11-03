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

A `for` loop is used to iterate over a [[AIAT-Exam/1 General/5 Datatype#Collection Datatypes|collection of elements]] or a [[AIAT-Exam/1 General/5 Datatype#Range|range]] of numbers.  

# Summary
- **Basic Usage**: Iterates over all elements in a [[AIAT-Exam/1 General/5 Datatype#Collection Datatypes|collection]] or [[AIAT-Exam/1 General/5 Datatype#Range|range]] automatically.
- **Break**: Exits the loop immediately.
- **Continue**: Skips the rest of the current iteration and moves to the next iteration.

# Basic
A `for` loop is useful when you need to iterate over a collection of elements or perform an action a set number of times.

```python
for element in collection:
    # Code to execute for each element
```

A `for` loop does not use a condition. Instead, it iterates through the collection using the elements one by one. So the first iteration uses, the first element, and the second iteration uses the second element, ... Below you can see a `for` loop iterating repeating 5 times using `range()` and then iterating through all elements of a [[AIAT-Exam/1 General/5 Datatype#List|list]].

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

The [[AIAT-Exam/1 General/8 Keyword|keyword]] `break` works exactly the same as with a [[AIAT-Exam/2 Control Flow/3 While Loop#Break|while loop]] and is used to immediately exit the loop.

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

The [[AIAT-Exam/1 General/8 Keyword|keyword]] `continue` works exactly the same as with a [[AIAT-Exam/2 Control Flow/3 While Loop#Break|while loop]] and is used to skip the rest of the current iteration and move to the next one.

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

# Questions
- [ ] Explain `for` in your own words.
- [ ] What are the differences and similarities between `for` and `while` loops? When should you use which kind?
- [ ] Explain `break` and `continue` in your own words.
- [ ] Are `break` and `continue` potentially more or less useful within a `for` loop than in a `while` loop? Explain why with reasons and examples.
- [ ]  What happens if a `for` loop runs on an empty collection?
- [ ] Is it possible that a `for` loop is infinite? Why? Give reasons and examples.
- [ ] How can a `for` loop be used to sum all even numbers from 1 to 100? Explain and write the code.
