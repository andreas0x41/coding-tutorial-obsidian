---
title: 4 Comments
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
Comments are for the Programmers and are completely ignored by the computer. They are usually used to document and explain code. But writing one none relevant comment per line as as bad no documentation/comments at all, so you have to find a balance. Explain important logical steps, code blocks and decisions. Do not only write comments if you need them right now, also write comments if someone else needs them to understand you code, or you need them when looking at code a year later.

# Singleline Comments
Everything in a line after a hash `#` is part of the single line comment and will be ignored by the program.

```python
# This is some example code
print("Hello") # this line will print the message "hello"
# print(1)     this will not do anything because the print is after the comment
print(1) # new line so print is working again and printing 1
```

```output
Hello
1
```

# Multiline Comments
If you want to have a bigger commented documentation and don't want to put a `#` in front of every single line, you can use a multiline comment. Everything between three double quotes `"""` is interpreted as a comment, even if it is over multiple lines.

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

## Function/Method Docstring
Multiline comments are often used to document the definition of a function, method or class. You can put an explanation of what the class is doing, what arguments it can take, ... directly under the define/class keyword. Most IDEs will even display this explanation to the programmer when using the function/method/class.

```python
def hello(name):
    """
    Prints a greeting message with the given name.

    Args:
        name (str): The name to include in the greeting.
    """
    print(f"Hello {name}")

hello("Andreas")
```

[[FunctionDocstringExample.jpeg|Open: FunctionDocstringExample.png]]
![[FunctionDocstringExample.jpeg]]