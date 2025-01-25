---
title: 6 Variables
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
  - General
---
Variables are used to store data. You can think of them like a container. The shape of the container is defined by the [[5 Datatypes|Datatype]] and then you can put any value inside the container. 

# Definition and Usage



# Characteristics of Variables
- **Dynamic Typing**: Variables in Python are not explicitly declared with a datatype. Instead, Python it (the interpreter) automatically picks a fitting type based on the assigned value.

```python
   x = 10      # x is an integer
   y = 3.14    # y is a float
   z = "Hello" # z is a string
```

- **Case Sensitivity**: Variable names are case-sensitive.

	```python
    name = "John"
    Name = "Doe"  # These are two different variables
    ```

- **Dynamic Reassignment**: You can reassign variables to values of different types.

	```python
    a = 42
    a = "Now I'm a string"
    ```

# Naming Rules
1. **Start with a letter or an underscore**: A variable name must begin with a letter (a-z, A-Z) or an underscore `_`.
2. **Can contain letters, numbers, and underscores**: No special characters or spaces.
3. **Cannot be a reserved keyword**: Avoid Python’s built-in keywords like `if`, `for`, `class`, ...

Example of valid variable names:

```python
x = 2.5
_valid_name = "Python"
variable123 = 45
```

Example of invalid variable names:

```python
2ndVariable = "Error" # Starts with a number
class = "Error"       # Uses a reserved keyword
```

## Naming Conventions



# Scope

# Naming

# Type Hinting




---


# Python Variables
## Variable Scope

Variables can have different scopes:

1. **Local Scope**: Defined inside a function and only accessible there.

	```python
    def example():
        local_var = 10
        print(local_var)
    example()
    ```

2. **Global Scope**: Defined outside functions and accessible anywhere in the module.

	```python
    global_var = 20
    def print_global():
        print(global_var)
    print_global()
    ```

3. **Nonlocal Scope**: Used within nested functions to modify variables in an enclosing non-global scope.

	```python
    def outer_function():
        enclosing_var = "Hello"
        def inner_function():
            nonlocal enclosing_var
            enclosing_var = "Modified"
        inner_function()
        print(enclosing_var)
    outer_function()
    ```

---

## Constants

Python does not have built-in support for constants. By convention, variables in all uppercase are treated as constants.

```python
PI = 3.14159
MAX_USERS = 100
```

---

## Type Hinting

Python allows type annotations for variables, making it easier to understand their intended type.

```python
age: int = 25
name: str = "John"
height: float = 5.9
```

---

## Variable Deletion

Use `del` to delete variables.

```python
x = 10
del x  # x is no longer defined
```

---

## Best Practices

1. Use descriptive names:

	```python
    counter = 0
    total_sum = 100
    ```

2. Follow **PEP 8** naming conventions: [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)
	- Use snake_case for variables.
	- Avoid using single-character names except in specific contexts (e.g., `i` in loops).
3. Avoid shadowing built-in names (e.g., don’t name your variable `list` or `str`).

---

## Examples

### Example 1: Using Variables

```python
name = "Alice"
age = 30
is_student = False

print(f"Name: {name}, Age: {age}, Student: {is_student}")
```

### Example 2: Dynamic Typing

```python
x = 42      # int
x = "Now a string"  # str
print(x)
```

### Example 3: Global and Local Variables

```python
x = "Global"

def test_scope():
    x = "Local"
    print("Inside function:", x)

test_scope()
print("Outside function:", x)
```
