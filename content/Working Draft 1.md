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
 
A `function` is a reusable block of code that performs a specific task. It helps organize code, avoid repetition, and improve readability.  
# Summary
- **Basic Usage**: Defined using `def` and called by its name.
- **Parameters**: Functions can accept input values.
- **Return**: Functions can return values.
- **Default Arguments**: Parameters can have default values.
- ***args / **kwargs**: Allow variable-length arguments.
- **Scope**: Variables inside a function are local unless specified otherwise.

# Basic
A function is defined using `def` followed by a name and parentheses. It can take parameters and return a result.

```python
def greet():
    print("Hello, world!")
``` 

Calling the function executes its code:

```python
greet()
```

```output
Hello, world!
```

# Parameters

Functions can accept parameters (input values) to work with.

```python
def greet(name):
    print(f"Hello, {name}!")
```

```python
greet("Alice")
```

```output
Hello, Alice!
```

# Return

A function can return a value using the `return` keyword.

```python
def add(a, b):
    return a + b
```

```python
result = add(3, 5)
print(result)
```

```output
8
```

If a function does not return anything, it returns `None` by default.

# Default Arguments

You can provide default values for parameters.

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")
```

```python
greet()  # Uses default value
greet("Bob")  # Uses provided value
```

```output
Hello, Guest!
Hello, Bob!
```

# *args And **kwargs

`*args` allows passing a variable number of positional arguments.

```python
def add_numbers(*args):
    return sum(args)
```

```python
print(add_numbers(1, 2, 3, 4))
```

```output
10
```

`**kwargs` allows passing keyword arguments as a dictionary.

```python
def show_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
```

```python
show_info(name="Alice", age=30, city="NY")
```

```output
name: Alice
age: 30
city: NY
```

# Scope

Variables inside a function are local unless declared global.

```python
x = 10

def modify():
    global x
    x += 5

modify()
print(x)
```

```output
15
```

# Global and Nonlocal in Python

In Python, the `global` and `nonlocal` keywords are used to modify the scope of variables within functions, affecting how variables are referenced or modified outside the function's local scope.

## Global Keyword
The `global` keyword is used to declare a variable as global, meaning it refers to a variable defined at the top-level of the program or module, outside any function. When you use `global` inside a function, it allows you to modify the value of the global variable rather than creating a new local variable with the same name.

### Example:

```python
x = 10  # Global variable

def update_global():
    global x
    x = 20  # Modifies the global variable 'x'

update_global()
print(x)  # Output: 20


In the example above:

- The global variable `x` is modified inside the `update_global()` function using the `global` keyword.

Without the `global` keyword, the assignment to `x` would create a new local variable `x`, leaving the global variable unchanged.

### Nonlocal Keyword

The `nonlocal` keyword is used to work with variables in the nearest enclosing scope (i.e., the scope that is not global but also not the current function). This is particularly useful when dealing with nested functions, where you want to modify a variable in the outer function's scope.

#### Example:

```python
def outer_function():
    x = 10  # Variable in the outer function

    def inner_function():
        nonlocal x
        x = 20  # Modifies 'x' in the outer function's scope

    inner_function()
    print(x)  # Output: 20

outer_function()
```

In this example:

- The variable `x` is defined in the `outer_function`'s scope.
- The `nonlocal` keyword allows the `inner_function` to modify `x` in the outer function's scope, rather than creating a new local variable.

## Key Differences:

- **Global:** Refers to the top-level scope, i.e., the module-level scope. The `global` keyword modifies variables that are accessible throughout the entire program.
- **Nonlocal:** Refers to the nearest enclosing scope that is not global. The `nonlocal` keyword allows you to modify variables from enclosing functions, useful in nested function contexts.

## Use Cases:

- **Global:** Use when you need to modify or access variables across multiple functions in a program.
- **Nonlocal:** Use in nested functions when you want to modify a variable from the outer function’s scope without affecting global variables.

## Summary

- `global` modifies variables in the global scope.
- `nonlocal` modifies variables in the nearest enclosing function scope.
# Examples

## Function with Multiple Parameters

```python
def multiply(a, b=2):
    return a * b

print(multiply(4))   # Uses default value of b
print(multiply(4, 3))  # Uses provided values
```

```output
8
12
```

## Using Functions in a Loop

```python
def square(n):
    return n * n

numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(square(num))
```

```output
1
4
9
16
25
```

## Function Returning Multiple Values

```python
def min_max(numbers):
    return min(numbers), max(numbers)

small, large = min_max([3, 1, 4, 1, 5])
print(f"Min: {small}, Max: {large}")
```

```output
Min: 1, Max: 5
```

## Recursive Function

A function can call itself (recursion), useful for problems like factorials.

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
```

```output
120
```

# Questions

- [ ]  Explain `function` in your own words.
- [ ]  Why are functions useful?
- [ ]  What is the difference between `return` and `print` inside a function?
- [ ]  What happens if a function doesn't have a `return` statement?
- [ ]  Explain the following code and its output:

```python
def add(a, b=10):
    return a + b

print(add(5))
print(add(5, 2))
```

- [ ]  What are `*args` and `**kwargs`? Provide an example.
- [ ]  Write a function that takes a list of numbers and returns their average.
- [ ]  Write a recursive function to calculate the sum of all numbers from 1 to `n`.

```

This should fit well with your other notes. Let me know if you want any changes! 🚀
```