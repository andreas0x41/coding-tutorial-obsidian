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

Variables are used to store data. You can think of them like a container. The shape of the container is defined by the [[5 Datatypes|Datatype]] and then you can put any fitting value inside the container. Python variables are labels that point to an objects in memory that stores a value.

# Summary

- **Definition:** Variables store references to objects in memory and are used to label and access these objects.
- **Usage:**
	- Create using `=`; Python automatically determines the datatype.
	- Reassign variables to new or different types of values.
	- Use `del` to remove variables, freeing memory when unused.
- **Naming Rules:**
	- Must start with a letter or underscore and contain only letters, numbers, or underscores.
	- Avoid reserved keywords and descriptive naming is recommended.
	- Use `snake_case` or `camelCase` for readability.
- **Mutability:**
	- Immutable objects (e.g., `int`, `str`) create new memory references on reassignment.
	- Mutable objects (e.g., `list`, `dict`) allow in-place modification, affecting all references.
- **Scope:**
	- **Global:** Accessible program-wide.
	- **Local:** Restricted to within functions.
- **Type Hinting:** Use optional annotations (e.g., `x: int = 5`) for better clarity and debugging.

# Memory Objects

> [!todo]- partly exam relevant
> This topic might seem complicated and like an unnecessarily detailed description. However, working with memory references is extremely significant for low level languages, also in Python you can not ignore it. Because if you are not aware of it you, you can not properly understand Python, will regularly make hard to find mistakes and struggle. The details of how this works/behaves are also different between languages. Please try to understand the basics, even if the details seem hard.

In Python, variables do **not** directly store the values themselves. Instead, they store references to the objects in memory. A **reference** points to a location/address in computer memory where a object is stored.

The main characteristics of an object in Python are.

- A unique **identifier** (memory address) that distinguishes it from other objects. This is returned by the `id()` function.
- The [[5 Datatypes|(data-)type]] of the object that defines what kind of object it is (e.g., `int`, `str`, `list`). This is returned by the `type()` function.
- The **value** which is the actual data contained in the object (e.g., `42`, `"Hello"`, `[1, 2, 3]`). This is returned by default when just putting the name of the variable
  Additionally, depending on the type of object, they can have Attributes and Methods.

```python
x = 5          # creating a variable with the name x
print(id(x))   # print the object identifier/location in memory -> 140735731917896
print(type(x)) # print the type of the object -> <class 'int'>
print(x)       # print the value of the object -> 5
```

You can check if two variables point to the same object in memory using the `is` keyword.
# Creating/Assigning
Use the assignment operator `=` to create and assign values to a variable. To do this you have to use the Syntax `variable_name = value`.

Variables in Python are not explicitly declared with a datatype. Instead, Python automatically picks a fitting type based on the assigned value at runtime. This also means/has the drawback that datatype errors/incompatibilities happen at runtime and can't easily be detected beforehand.

You can reassign a variable to a new value with the same syntax as creating one. You can change it to any value, even values of a different datatype.

```python
number = 10       # name: number; value 10; type: Integer
message = "Hello" # name: message; value: "Hello", type: String
is_ready = True   # name: is_ready; value: True; type: Boolean

print(number)     # -> 10
number = "test"   # reassign variable number with value "test" of type String
print(number)     # -> test
```

# Accessing

Use the variable name to access the value of a variable. Python will get the variable value from memory and put it place of the name. Tying to access a variable that does not exist will result in an error.

```python
print(number)  # -> 10
print(message) # -> Hello
```

# Deleting
You can use the [[8 Keywords|keyword]] `del` to delete a variable/the object reference it stores. If you are working with a [[5 Datatypes#Mutable|mutable]] collection of type list or dictionary you can also use indexing and slicing to remove individual items.

```python
x = 10             # creating x with value 10
del x              # deleting x

my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
del my_list[0]     # delete the first element
print(my_list)     # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
del my_list[1:7:2] # delete every secound item from the 2nd to the 8th
print(my_list)     # Output: [1, 3, 5, 7, 8, 9]
```

> [!todo]- not exam relevant
> This is good to know, but not really exam relevant. To actually understand this it is good to first read [[#Objects Value vs. Reference]].

If the reference count (how many times it is referenced for example by variables) of an object in memory gets down to zero it is no longer needed. Then Pythons automatic garbage collector will free up the storage, so that it can be used for a different purpose again. So using `del` or exiting the [[#Scope|scope]] of a variable will delete the reference and if there are no more references anywhere the object in memory will be deleted.

# Naming Rules

There are a few rules that all variable names must follow.

1. **Start with a letter or an underscore**: A variable name must begin with a letter (a-z, A-Z) or an underscore `_`.
2. **Can contain letters, numbers, and underscores**: A variable name can contain any ammount of letters, numbers and underscores, but no special characters or spaces.
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

Variable names should be descriptive. So just by reading you should have a basic understanding of what value it will hold and what it is used for. So you should use descriptive words inside a variable name, without making it too long. Avoid shadowing built-in names (e.g., don’t name your variable `float` or `list`). Avoid using single-character names except in specific contexts (e.g., `i` in loops). If there are multiple words in a variable name, you should consistently write it in snake_case of camelCase.
- in **snake case** words are separate by underscores `_` like this `this_variable_is_snake`
- in **camel case** words are separate by capitalizing them like this `thisVariableIsCamel`

Variable names are usually lowercase, except for potentially capitalizing all but the first word. Constants, which are variables that can not/never change their value, are not directly supported in Python. By convention, they are named all uppercase(`PI = 3.14159`).


# Mutability Behaviour
> [!todo]- partly exam relevant
> This topic might seem complicated and like an unnecessarily detailed description. However, working with memory references is extremely significant for low level languages, also in Python you can not ignore it. Because if you are not aware of it you, you can not properly understand Python, will regularly make hard to find mistakes and struggle. The details of how this works/behaves are also different between languages. Please try to understand the basics, even if the details seem hard.

Depending on whether a variable is storing a [[5 Datatypes#Mutable|mutable]] or immutable object the behaviour can be significantly different. When assigning one variable to another `var2 = var1`, initially both of them will point to the exactly **same** location and therefore object in memory. So they do not only have the same value, they are actually the same thing. If you just want to copy the value while creating a new object you have to explicitly use methods like `.copy()`.

The interesting part starts when you change one of the variables. If the object is not [[5 Datatypes#Mutable|mutable]], it is impossible to change its value in place. Instead a new object storing the the changed value will be created and assigned to the changed variable. So at the end both of the variables will point at different objects with different values.

```python
x = 1               # creating a variable x and assigning it the value 1
y = x               # creating a variable y and assigning to point to the same object as x
print(id(x), id(y)) # printing the memory address of x and y -> 140735731917608 140735731917608
print(x is y)       # checking if x and y point to the same object -> True
print(x, y)         # printing the values of x and y -> 1 1
y = y + 1           # creating a new object with the value of x + 1 and assigning it to y
print(id(x), id(y)) # printing the memory address of x and y -> 140735731917608 140735731917640
print(x is y)       # checking if x and y point to the same object -> False
print(x, y)         # printing the values of x and y -> 1 1
```

If you do a similar thing with an object that is [[5 Datatypes#Mutable|mutable]], you can directly change its value in place. This means that the actual value of the object is changed. Since both of the variables are pointing to the same object, both of their values will change!

```python
x = [1, 2, 3]       # creating a variable x and assigning it the value [1, 2, 3]
y = x               # creating a variable y and assigning to point to the same object as x
print(id(x), id(y)) # printing the memory address of x and y -> 1895382737088 1895382737088
print(x is y)       # checking if x and y point to the same object -> True
print(x, y)         # printing the values of x and y -> [1, 2, 3] [1, 2, 3]
y[0] = 10           # changing the value of the first element of the list y to 10
                    # since x and y point to the same object, the value of x will also change
print(id(x), id(y)) # printing the memory address of x and y -> 1895382737088 1895382737088
print(x is y)       # checking if x and y point to the same object -> True
print(x, y)         # printing the values of x and y -> [10, 2, 3] [10, 2, 3]
```

This might seem like a small difference and not intuitive at first, but is actually a very significant detail.
# Scope
Variable scope means when/where variables are defined and can be accessed. In Python you are not directly accessing locations in memory, instead you are using context dependent variables.
**Global Scope** variables are outside of functions and can be accessed everywhere (after their creation).
**Local Scope** variables are created inside a function and because of that only exist inside that function. So after running the function is finished, all the references will be deleted again.
You can find detailed example and usage of the `global` and `nonlocal` [[8 Keywords|keywords]] on the page about functions.

# Type Hinting

> [!todo]- not exam relevant
> This topic not exam relevant.

Even though Python automatically picks datatypes of variables based on their value, it supports type annotations for variables. This makes it easier to understand their intended type and can even be used by some debuggers. The syntax for variable type hinting is `varName: datatype = value`.

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

# Questions
- [ ] Explain variables and their usage in your own words.
- [ ] Explain Objects in python.
- [ ] What is the meaning/difference of variable, value, reference, object, and (data-)type in python
- [ ] Show and explain the creating, accessing, updating and deleting of variables.
- [ ] Do you have to tell Python which datatype a variable has?
- [ ] What are the rules for naming variables in Python?
- [ ] How can you make good variable names and why is this important?
- [ ] How does Python handle variable reassignment with mutable vs. immutable objects?
- [ ] How do you check whether two variables point to the same object in memory?
- [ ] Explain variable scope in your own words.
- [ ] What happens if you try to access a variable that hasn’t been defined?
- [ ] Explain type hinting in your own words.