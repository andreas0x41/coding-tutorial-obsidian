---
title: 6 Variables
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
  - General
---
Variables are used to store data. You can think of them like a container. The shape of the container is defined by the [[5 Datatypes|Datatype]] and then you can put any fitting value inside the container. 

# Definition and Usage
## Creating/Accessing
Use the assignment operator `=` to create and assign values to a variable. To do this you have to use the Syntax `variable_name = value`. Variables in Python are not explicitly declared with a datatype. Instead, Python (the interpreter) automatically picks a fitting type based on the assigned value. You can reassign a variable to a new value with the same syntax as creating one. You can change it to any value, even values of a different datatype.

```python
number = 10       # name: number; value 10; type: Integer
message = "Hello" # name: message; value: "Hello", type: String
is_ready = True   # name: is_ready; value: True; type: Boolean

print(number)     # -> 10
number = "test"   # reassign variable number with value "test" of type String
print(number)     # -> test
```

## Accessing
Use the variable name to access the value of a variable. Python will get the variable value from memory and put it place of the name.

```python
print(number)  # -> 10
print(message) # -> Hello
```

## Deleting
You can use the [[8 Keywords|keyword]] `del` to delete variables. This will free up the space in storage. After deleting the variable does no longer exist.

```python
x = 10 # creating x with value 10
del x  # deleting x 
```

# Naming Rules
There are a few rules that all variable names must follow.
1. **Start with a letter or an underscore**: A variable name must begin with a letter (a-z, A-Z) or an underscore `_`.
2. **Can contain letters, numbers, and underscores**: A variable name can contain any numer of letters, numbers and underscores, but no special characters or spaces.
3. **Cannot be a reserved [[8 Keywords|keyword]]**: Avoid Python’s built-in keywords like `if`, `for`, `class`, ... 

Example of correct variable names: `x`,`_valid_name`, `variable123`, `_123_`, ...

Example of incorrect variable names:

```python
2ndVariable = "Error"  # Starts with a number
special!char = "Error" # Includes special character
space var = "Error"    # Includes space in variable name
class = "Error"        # Uses a reserved keyword
```

## Naming Conventions
Naming conventions are not mandatory, but it is good to follow them. Good naming will create much easier to read, more consistent and better formatted code. 

Variable names should be descriptive. So just by reading you should have a basic understanding of what value it will hold and what it is used for. So you should use descriptive words inside a variable name, without making it to long. Avoid shadowing built-in names (e.g., don’t name your variable `float` or `list`). Avoid using single-character names except in specific contexts (e.g., `i` in loops). If there are multiple words in a variable name, you should consistently write it in snake_case of camelCase.
- in **snake case** words are separate by underscores `_` like this `this_variable_is_snake`
- in **camel case** words are separate by capitalizing them like this `thisVariableIsCamel`

Variable names are usually lowercase, except for potentially capitalizing all but the first word. Constants, which are variables that can not/never change their value, are not directly supported in python. By convention, they are named all uppercase(`PI = 3.14159`).

# Scope
Variable scope means when/where variables are defined and can be accessed. In python you are not directly accessing locations in memory, instead you are using context dependent variables.
**Global Scope** variables are outside of functions and can be accessed everywhere (after their declaration). 
**Local Scope** variables are created inside a function and because of that only exist inside that function.
# Type Hinting
> [!todo]- not exam relevant
> This topic not exam relevant.

Even though python automatically picks datatypes of variables based on their value, it supports type annotations for variables. This makes it easier to understand their intended type and can even be used by some debuggers. The syntax for variable type hinting is `varName: datatype = value`. 

```python
age: int = 25
name: str = "John"
height: float = 5.9
```

This simple type hinting works with most datatypes. With many collection datatypes you can also define the inside elements datatypes.

| Name                                  | Type Hint                        | Syntax Example                                                            |
| ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| **List**                              | `list[<type>]`                   | `numbers: list[int] = [1, 2, 3]`                                          |
| **Tuple**                             | `tuple[<type1>, <type2>, ...]`   | `coords: tuple[int, float] = (1, 0.5)`                                    |
| **Set**                               | `set[<type>]`                    | `unique_nums: set[float] = {0.1, 2.5, 0.3}`                               |
| **Dictionary**                        | `dict[<key_type>, <value_type>]` | `person: dict[str, int] = {"age": 30}`                                    |
| **Multidimensional List**             | `list[list[<type>]]`             | `matrix: list[list[int]] = [[1, 2], [3, 4]]`                              |
| **List of Tuples (String and Range)** | `list[tuple[str, range]]`        | `data: list[tuple[str, range]] = [("A", range(3)), ("B", range(1,99,3))]` |
|                                       |                                  |                                                                           |
