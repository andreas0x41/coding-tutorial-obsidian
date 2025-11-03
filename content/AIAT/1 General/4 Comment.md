---
title: 1.4 Comments
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
Comments are for the Programmers and are completely ignored by the computer. They are usually used to document and explain code. 

You should explain important logical steps, code blocks, and decisions. Writing one irrelevant comment per line is just as bad as having no comments at all, so you have to find a balance. Do not only write comments if you need them right now, but also write comments if someone else needs them, or you need them when looking at code a year later.

# Singleline Comments
Everything in a line after a hash `#` is part of the single-line comment and will be ignored by the program.

```python
# This is some example code
print("Hello") # This line will print the message 'Hello'
# print(1) This will not do anything because the print is after the comment
print(1)       # new line, so print is working again and outputs 1
```

```output
Hello
1
```

# Docstrings/Multiline Comments
If you want to have a bigger commented documentation and don't want to put a `#` in front of every single line, you can use a docstring. Everything between three double quotes `"""` will be interpreted as a docstring, so basically a multiline comment.

```python
print(1)
"""Here is the start
this is still part of the comment
print(2) is still in the comment"""
print(3)
```

```output
1
3
```

## Documenting Functions/Methods

> [!todo]- less exam relevant
> Less exam relevant, but still good/helpful to know.

Docstrings are often used to document the definition of a [[content/AIAT/2 Control Flow/5 Function|function]], method, or class. You can put an explanation of what the function is doing, its parameters, return values, ... directly under the def/class keyword. Most IDEs will even display this explanation to the programmer when using the function/method/class.

```python
def hello(name):
    """
    Prints a greeting message with the given name.

    Args:
        name (str): The name to include in the greeting.
    Returns: 
        None
    """
    print(f"Hello {name}")

hello("Andreas")
```

[[content/AIAT/1 General/_assets/4 Comments/FunctionDocstringExample.jpg|Open: FunctionDocstringExample.jpg]]
![[content/AIAT/1 General/_assets/4 Comments/FunctionDocstringExample.jpg]]


# Questions
- [ ] Explain comments in your own words.
- [ ] What is the purpose of comments?
- [ ] When should you write a comment?
- [ ] Explain single line comments.
- [ ] Explain docstrings/multiline comments including their usage for function documentation.