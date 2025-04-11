---
title: 1.6 Variables
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - General
  - SDML
  - AECD
  - GEES
---

Variables are used to store data. You can think of them like a container. The shape of the container is defined by the [[content/Theory Exam/1 General/5 Datatype|Datatype]] and then you can put any fitting value inside the container. Python variables are labels that point to an object in memory that stores a value.

# Summary

- **Definition:** Variables store references to objects in memory and are used to label and access these objects.
- **Usage:**
	- Create using `=`; Python automatically determines the datatype.
	- You can Reassign variables to new or different types of values.
	- Use `del` to remove variables, freeing memory when unused.
- **Naming Rules:**
	- Must start with a letter or underscore and contain only letters, numbers, and underscores.
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
Python variables store references to the objects in memory. A **reference** points to a location/address in computer memory where an object is stored.

The main characteristics of a memory object in Python are.

- A unique **identifier** (memory address/location) that distinguishes it from other objects. This is returned by the `id()` function.
- The [[content/Theory Exam/1 General/5 Datatype|(data-)type]] of the object that defines what kind of object it is (e.g., `int`, `str`, `list`). This is returned by the `type()` function.
- The **value** which is the actual data contained in the object (e.g., `42`, `"Hello"`, `[1, 2, 3]`). This is returned by default when just putting the name of the variable
- Depending on the type of object, they can have additional Attributes and Methods.

```python
x = 5          # creating a variable with the name x
print(id(x))   # print the object identifier/location in memory -> 140735731917896
print(type(x)) # print the type of the object -> <class 'int'>
print(x)       # print the value of the object -> 5
```

You can check if two variables point to the same object in memory (have the same identifier) using the `is` [[content/Theory Exam/1 General/8 Keyword|keyword]].
# Creating/Assigning
Use the assignment operator `=`, with the Syntax `variable_name = value`, to create and assign values to a variable.

Variables in Python are not explicitly declared with a datatype. Instead, Python automatically picks a fitting type based on the assigned value at runtime. This also has the drawback that datatype errors/incompatibilities happen at runtime and can't easily be detected before.

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

Use the variable name to access the value of a variable. Python will get the variable value from memory and put it in place of the name. Trying to access a variable that does not exist will result in an error.

```python
message = "Hello" # name: message; value: "Hello", type: String
is_ready = True   # name: is_ready; value: True; type: Boolean
print(message)  # -> Hello
print(is_ready) # -> True
```

# Deleting
You can use the [[content/Theory Exam/1 General/8 Keyword|keyword]] `del` to delete a variable/the object reference it stores. With list or dictionary you can also use indexing and slicing to remove individual items.

```python
x = 10             # creating x with value 10
del x              # deleting x

my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
del my_list[0]     # delete the first element
print(my_list)     # -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
del my_list[1:7:2] # delete every second item from the 2nd to the 8th
print(my_list)     # -> [1, 3, 5, 7, 8, 9]
```

# Naming Rules
There are a few rules that all variable names must follow. The same rules apply to functions, classes, attributes and methods.
1. **Start with a letter or an underscore**: A variable name must begin with a letter (a-z, A-Z) or an underscore `_`.
2. **Can contain letters, numbers, and underscores**: A variable name can contain any amount of letters, numbers, and underscores, but no special characters or spaces.
3. **Cannot be a reserved [[content/Theory Exam/1 General/8 Keyword|keyword]]**: Avoid Python’s built-in keywords like `if`, `for`, `class`, `del`, ...

Example of correct variable names: `x`,`_valid_name`, `variable123`, `_123_`, ...

Example of incorrect variable names:

```python
2ndVariable = "Error"  # Starts with a number
special!char = "Error" # Includes special character
space var = "Error"    # Includes space in variable name
class = "Error"        # Uses a reserved keyword
```

## Naming Conventions
Naming conventions are not mandatory, but it is good to follow them. Good naming will create much easier to read, more consistent, and better formatted code.

Variable names should be descriptive. So just by reading you should have a basic understanding of what value it will hold and what it is used for. So you should use descriptive words inside a variable name, without making it too long. Avoid shadowing built-in names (e.g., don’t name your variable `float` or `list`). Avoid using single-character names except in specific contexts (e.g., `i` in loops is ok). If there are multiple words in a variable name, you should consistently write it in snake_case of camelCase.
- in **snake case** words are lowercase and separate by underscores `_` like this: `this_variable_is_snake`
- in **camel case** words are separated by capitalizing them like this: `thisVariableIsCamel`

Python is case sensitive, so it makes a difference if a character is upper or lower case. Variable names are usually lowercase (except for camel case). 
# Scope
Variable scope means when/where variables are defined and can be accessed. In Python you are not directly accessing locations in memory, instead, you are using context dependent variables. 
- **Global Scope** variables are outside of functions and can be accessed everywhere (after their creation).
- **Local Scope** variables are created inside a function and because of that only exist inside that function. So after running the function is finished, all the references will be deleted again.
You can find detailed examples and usage of the `global` and `nonlocal` [[content/Theory Exam/1 General/8 Keyword|keywords]] on the page about [[content/Theory Exam/2 Control Flow/5 Function#Variable Scope|functions]].

# Questions
- [ ] Explain variables and their usage in your own words.
- [ ] Explain Memory Objects in Python.
- [ ] What is the meaning/difference of variable, value, reference, object, and (data-)type in python
- [ ] Show and explain the creating, accessing, updating and deleting of variables.
- [ ] Do you have to tell Python which datatype a variable has?
- [ ] What are the rules for naming variables in Python?
- [ ] How can you make good variable names and why is this important?
- [ ] How do you check whether two variables point to the same object in memory?
- [ ] Explain variable scope in your own words.
- [ ] What happens if you try to access a variable that hasn’t been defined?