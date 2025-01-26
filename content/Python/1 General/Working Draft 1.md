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


# `nonlocal` Keyword in Python

## Introduction
The `nonlocal` keyword in Python is used to declare a variable in an **enclosing non-global scope**. It allows you to modify variables that are defined in the nearest enclosing function scope, excluding the global scope.

---

## Why Do We Need `nonlocal`?
In Python, variables in nested functions have their own local scope by default. If you want to modify a variable from the enclosing function scope within a nested function, you need to use the `nonlocal` keyword. Without it, Python treats the variable as a new local variable in the nested function.

---

## How `nonlocal` Works

### 1. Enclosing Scope
The `nonlocal` keyword is used when:
- A function is nested inside another function.
- You want to modify a variable in the outer (enclosing) function scope.

### 2. `nonlocal` Vs `global`
- `nonlocal` modifies a variable in the nearest enclosing function scope.
- `global` modifies a variable in the global (module-level) scope.

---

## Syntax

```python
def outer_function():
    variable = "Outer"

    def inner_function():
        nonlocal variable
        variable = "Modified by inner"
    
    inner_function()
    print(variable)
```

### Output:

```

Modified by inner

```

---

## Example Breakdown

### Example 1: Without `nonlocal`

If you try modifying a variable in the enclosing scope without `nonlocal`, Python treats it as a new local variable and throws an error if you try to use it before assignment.

```python
def outer_function():
    variable = "Outer"
    
    def inner_function():
        variable = "Inner"  # This creates a new local variable in inner_function
    
    inner_function()
    print(variable)  # Output: Outer
```

In this case, the `variable` in the inner function does not affect the `variable` in the outer function.

---

### Example 2: With `nonlocal`

Using `nonlocal` ensures that the `variable` in the inner function refers to the one in the enclosing scope.

```python
def outer_function():
    variable = "Outer"
    
    def inner_function():
        nonlocal variable
        variable = "Modified by inner"
    
    inner_function()
    print(variable)

outer_function()
```

### Output:

```
Modified by inner
```

---

### Example 3: Modifying Multiple Variables

You can use `nonlocal` to modify multiple variables in the enclosing scope.

```python
def outer_function():
    a = 5
    b = 10

    def inner_function():
        nonlocal a, b
        a += 1
        b *= 2

    inner_function()
    print(a, b)

outer_function()
```

### Output:

```
6 20
```

---

## Limitations of `nonlocal`

1. **Only Works in Nested Functions**: The `nonlocal` keyword works only when the variable is in the nearest enclosing function. If no such variable exists, Python raises a `SyntaxError`.

	```python
    def inner_function():
        nonlocal x  # SyntaxError: no binding for 'x' found in the enclosing function
    ```

2. **Cannot Modify Global Variables**: Use `global` for global variables instead of `nonlocal`.
	

---

## Common Use Cases

1. **Counters in Nested Functions**

	```python
    def counter():
        count = 0
    
        def increment():
            nonlocal count
            count += 1
            return count
    
        return increment
    
    c = counter()
    print(c())  # Output: 1
    print(c())  # Output: 2
    ```

2. **State Maintenance in Closures**

	```python
    def multiplier(factor):
        result = factor
    
        def multiply_by(x):
            nonlocal result
            result *= x
            return result
    
        return multiply_by
    
    double = multiplier(2)
    print(double(3))  # Output: 6
    print(double(4))  # Output: 24
    ```

---

## Summary

- The `nonlocal` keyword allows you to modify variables in the nearest enclosing function scope.
- It is used in nested functions when you need to retain and modify the state of variables from the enclosing function.
- If no variable exists in the enclosing scope, Python raises a `SyntaxError`.

---

## Comparison Table: `local`, `nonlocal`, `global`

|**Keyword**|**Scope Modified**|**Example Usage**|
|---|---|---|
|`local`|Inside the current function|Defined by default without any keyword.|
|`nonlocal`|Nearest enclosing function|Used in nested functions.|
|`global`|Module-level scope|Used to modify global variables.|

```python
# Example of all three
x = 10  # Global

def outer_function():
    x = 20  # Enclosing scope

    def inner_function():
        nonlocal x
        x += 1
        print("Inner x:", x)

    inner_function()
    print("Outer x:", x)

outer_function()
print("Global x:", x)
```

Output:

```
Inner x: 21
Outer x: 21
Global x: 10
```

---




