---
title: 2.5 Function
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Python
  - ControlFlow
  - SDML
  - AECD
  - GEES
---








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