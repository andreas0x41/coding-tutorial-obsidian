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
[[#Result Data Types of Arithmetic Operators]]


[[Working Draft 1#Result Data Types of Arithmetic Operators|Test 2]] 

# Python Operators Tutorial

## Introduction

Operators in Python are special symbols or keywords used to perform operations on variables and values. Python supports a variety of operators categorized by their functionality. This guide covers **everything** about Python operators, including basic and advanced usage.

---

## Categories of Operators

1. [Assignment Operators](#assignment-operators)
2. [Arithmetic Operators](#arithmetic-operators)
3. [Relational (Comparison) Operators](#relational-comparison-operators)
4. [Logical Operators](#logical-operators)
5. [Bitwise Operators](#bitwise-operators)
6. [Membership Operators](#membership-operators)
7. [Identity Operators](#identity-operators)
8. [Special Uses of Operators](#special-uses-of-operators)
9. [Operator Precedence](#operator-precedence)
10. [Multiple Value Assignment](#multiple-value-assignment)
11. [Walrus Operator](#walrus-operator)

---

## Assignment Operators

Assignment operators are used to assign values to variables.

|Operator|Example|Explanation|
|---|---|---|
|`=`|`a = 10`|Assigns 10 to `a`.|
|`+=`|`a += 5`|Adds 5 to `a` (a = a + 5).|
|`-=`|`a -= 5`|Subtracts 5 from `a`.|
|`*=`|`a *= 3`|Multiplies `a` by 3.|
|`/=`|`a /= 2`|Divides `a` by 2.|
|`//=`|`a //= 2`|Floor-divides `a` by 2.|
|`%=`|`a %= 3`|Modulus operation on `a`.|
|`**=`|`a **= 2`|Raises `a` to the power of 2.|

### Example

```python
x = 10
x += 3  # x = x + 3, x becomes 13
x //= 2  # x = x // 2, x becomes 6
```

---

## Arithmetic Operators

Arithmetic operators are used for basic mathematical operations.

|Operator|Example|Explanation|
|---|---|---|
|`+`|`a + b`|Addition|
|`-`|`a - b`|Subtraction|
|`*`|`a * b`|Multiplication|
|`/`|`a / b`|Division|
|`//`|`a // b`|Floor Division|
|`%`|`a % b`|Modulus|
|`**`|`a ** b`|Exponentiation (Power)|

### Advanced Use Case: `*` and `+` with Sequences

- `*` can be used to repeat sequences:

	```python
    lst = [1, 2, 3]
    print(lst * 3)  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
    ```

- `+` concatenates sequences:

	```python
    print([1, 2] + [3, 4])  # [1, 2, 3, 4]
    ```

### Non-Standard Datatypes

- Strings:

	```python
    s1 = "Hello"
    s2 = "World"
    print(s1 + " " + s2)  # "Hello World"
    print(s1 * 3)  # "HelloHelloHello"
    ```

- Tuples:

	```python
    t1 = (1, 2)
    t2 = (3, 4)
    print(t1 + t2)  # (1, 2, 3, 4)
    print(t1 * 2)  # (1, 2, 1, 2)
    ```

---

## Relational (Comparison) Operators

These operators compare two values and return a boolean result.

| Operator | Example  | Explanation                      |
| -------- | -------- | -------------------------------- |
| `==`     | `a == b` | True if `a` equals `b`.          |
| `!=`     | `a != b` | True if `a` does not equal `b`.  |
| `>`      | `a > b`  | True if `a` is greater than `b`. |
| `<`      | `a < b`  | True if `a` is less than `b`.    |
| `>=`     | `a >= b` | True if `a` >= `b`.              |
| `<=`     | `a <= b` | True if `a` <= `b`.              |

### Non-Standard Datatypes

- Strings (Lexicographical comparison):

	```python
    print("abc" > "abd")  # False
    print("abc" < "abd")  # True
    ```

---

## Logical Operators

Logical operators are used to combine conditional statements.

|Operator|Example|Explanation|
|---|---|---|
|`and`|`a and b`|True if both `a` and `b` are true.|
|`or`|`a or b`|True if either `a` or `b` is true.|
|`not`|`not a`|True if `a` is false (logical negation).|

### Example

```python
x = 5
y = 10
if x > 3 and y < 15:
    print("Both conditions are True")
```

### Non-Standard Datatypes

- Strings:

	```python
    print("" and "Hello")  # ""
    print("Hi" or "Bye")  # "Hi"
    ```

- Lists:

	```python
    print([] or [1, 2])  # [1, 2]
    print([0] and [3, 4])  # [3, 4]
    ```

---

## Bitwise Operators

Bitwise operators work with binary representations of numbers.

|Operator|Example|Explanation|
|---|---|---|
|`&`|`a & b`|Bitwise AND|
|`|`|`a|
|`^`|`a ^ b`|Bitwise XOR|
|`~`|`~a`|Bitwise NOT (inverts all bits).|
|`<<`|`a << 2`|Left shift (shifts bits left by 2 places).|
|`>>`|`a >> 2`|Right shift (shifts bits right by 2 places).|

### Example

```python
x = 5  # Binary: 0101
y = 3  # Binary: 0011
print(x & y)  # Output: 1 (Binary: 0001)
```

---

## Membership Operators

Membership operators check for membership in sequences such as lists, strings, or tuples.

|Operator|Example|Explanation|
|---|---|---|
|`in`|`x in y`|True if `x` is a member of `y`.|
|`not in`|`x not in y`|True if `x` is not a member of `y`.|

### Example

```python
lst = [1, 2, 3]
print(2 in lst)  # True
print(4 not in lst)  # True
```

### Non-Standard Datatypes

- Strings:

	```python
    print("a" in "abc")  # True
    print("x" not in "xyz")  # False
    ```

---

## Identity Operators

Identity operators compare the memory locations of two objects.

|Operator|Example|Explanation|
|---|---|---|
|`is`|`x is y`|True if `x` and `y` refer to the same object.|
|`is not`|`x is not y`|True if `x` and `y` do not refer to the same object.|

### Example

```python
a = [1, 2, 3]
b = a
c = [1, 2, 3]
print(a is b)  # True
print(a is c)  # False
```

### Non-Standard Datatypes

- Strings:

	```python
    s1 = "hello"
    s2 = "hello"
    print(s1 is s2)  # True (string interning)
    ```

---

## Special Uses of Operators

### `*` For Argument Unpacking

```python
def add(a, b, c):
    return a + b + c
args = (1, 2, 3)
print(add(*args))  # Output: 6
```

### `**` For Keyword Argument Unpacking

```python
def greet(name, age):
    print(f"Hello {name}, you are {age} years old!")
data = {"name": "Alice", "age": 25}
greet(**data)  # Hello Alice, you are 25 years old!
```

---

## Multiple Value Assignment

Python allows assigning multiple values to multiple variables in one line.

### Example

```python
a, b, c = 1, 2, 3
print(a, b, c)  # Output: 1 2 3

# Swapping variables without a temporary variable
a, b = b, a
print(a, b)  # Values of a and b are swapped
```

### Use Case with Unpacking

```python
lst = [1, 2, 3]
x, y, z = lst
print(x, y, z)  # Output: 1 2 3
```

---

## Walrus Operator

The **walrus operator (`:=`)** allows assignment within expressions. Introduced in Python 3.8, it is useful for reducing code duplication.

### Example

```python
# Without Walrus Operator
value = input("Enter 'exit' to stop the loop: ")
while value != "exit":
	print("Inside while loop")
    value = input("Enter 'exit' to stop the loop: ")

# With Walrus Operator
while (value = input("Enter 'exit' to stop the loop: ")) != "exit":
	print("Inside while loop")
```

### Use Case in Loops

```python
# Reading lines from a file
while (line := file.readline().strip()):
    print(line)
```

---

## Operator Precedence

Operator precedence determines the order of evaluation in expressions.

### Precedence Table (Highest to Lowest)

1. `()` - Parentheses
2. `**` - Exponentiation
3. `+x, -x, ~x` - Unary plus, minus, and bitwise NOT
4. `*, /, //, %` - Multiplication, division, floor division, modulus
5. `+, -` - Addition, subtraction
6. `<<, >>` - Bitwise shifts
7. `&` - Bitwise AND
8. `^` - Bitwise XOR
9. `|` - Bitwise OR
10. `==, !=, >, <, >=, <=` - Comparisons
11. `not` - Logical NOT
12. `and` - Logical AND
13. `or` - Logical OR

### Example

```python
x = 3 + 5 * 2  # Multiplication is evaluated first, result: 13
x = (3 + 5) * 2  # Parentheses change precedence, result: 16
```

# Result Datatypes


## Result Data Types of Arithmetic Operators

### 1. **Addition (`+`)**
- `int + int`: `int`
- `int + float`, `float + int`: `float`
- `int + complex`, `complex + int`: `complex`
- `float + float`: `float`
- `float + complex`, `complex + float`: `complex`
- `complex + complex`: `complex`

### 2. **Subtraction (`-`)**
- `int - int`: `int`
- `int - float`, `float - int`: `float`
- `int - complex`, `complex - int`: `complex`
- `float - float`: `float`
- `float - complex`, `complex - float`: `complex`
- `complex - complex`: `complex`

### 3. **Multiplication (`*`)**
- `int * int`: `int`
- `int * float`, `float * int`: `float`
- `int * complex`, `complex * int`: `complex`
- `float * float`: `float`
- `float * complex`, `complex * float`: `complex`
- `complex * complex`: `complex`

### 4. **Division (`/`)**
- `int / int`: `float`
- `int / float`, `float / int`: `float`
- `int / complex`, `complex / int`: `complex`
- `float / float`: `float`
- `float / complex`, `complex / float`: `complex`
- `complex / complex`: `complex`

### 5. **Floor Division (`//`)**
- `int // int`: `int`
- `int // float`, `float // int`: `float`
- `int // complex`, `complex // int`: `complex`
- `float // float`: `float`
- `float // complex`, `complex // float`: `complex`
- `complex // complex`: `complex`

### 6. **Modulus (`%`)**
- `int % int`: `int`
- `int % float`, `float % int`: `float`
- `int % complex`, `complex % int`: `complex`
- `float % float`: `float`
- `float % complex`, `complex % float`: `complex`
- `complex % complex`: `complex`

### 7. **Exponentiation (`**`)**
- `int ** int`: `int`
- `int ** float`, `float ** int`: `float`
- `int ** complex`, `complex ** int`: `complex`
- `float ** float`: `float`
- `float ** complex`, `complex ** float`: `complex`
- `complex ** complex`: `complex`
---

# Summary

This tutorial covers all aspects of Python operators, including their syntax, usage, and advanced cases. Understanding these operators will allow you to write more efficient and readable Python code.