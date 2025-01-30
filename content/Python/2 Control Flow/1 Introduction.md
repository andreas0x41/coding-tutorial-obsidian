---
title: 2.1 Introduction
HTML_title: 2.1 Introduction Control Flow
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Overview
  - Python
  - ControlFlow
  - SDML
  - AECD
  - GEES
---




Control flow refers to the order in which individual statements, instructions, functions, ... are executed or evaluated in a program. Control flow is essential for making decisions and managing the program's behavior.

# Line By Line
By default, Python executes code **line by line**. Each line of code is executed in the order in which it appears, from top to bottom. 

```python
print(1)
print(2)
print(1+2)
```

```output
1
2
3
```

# Selection (Conditional Statements)
Selection allows the program to make decisions. The program choose what code to execute next based on a condition. This is usually done using a [[5 Datatype#Boolean|boolean]] that is based on a series of [[7 Operator|operators]] or pattern matching.

```python
x = 6
if(x > 5):
	print("x is greater than 5")          # executed if condition is true
else:
	print("x is less than or equal to 5") # executed if condition is false
print("End of the example")
```

```output
x is greater than 5
End of the example
```

# Iteration (Loops)
Iteration allows you to repeat a block of code multiple times. This is usually done for a fixed number of iterations or while a [[5 Datatype#Boolean|boolean]] condition is true. 

```python
for i in range(10)
	print("Iteration number ", i)
```

# Jumps
Jumps allow the program to exit the normal flow of execution and either skip over parts of code or completely exit loops and functions. There are several ways this is handled in Python:
no goto, explain break and continue in detail
- **Break**: Exits a loop entirely.
- **Continue**: Skips to the next iteration of a loop.
	- **Return**: Exits a function early and optionally returns a value.x

# Subroutines
Function calls introduce a temporary shift in control flow. When a function is called, the program jumps to that function, executes its code, and then returns to the point where the function was called. This is an essential concept for organizing and reusing code.

Example:

```python
def greet():
    print("Hello!")

greet()  # Function call
print("Done")
```

# Errors

Errors and exceptions are ways in which control flow is interrupted when something goes wrong. These can be caused by bugs in the code, such as dividing by zero, or by issues like missing files. Python provides mechanisms like **try-except** blocks to handle exceptions and prevent crashes.

- **Errors**: Typically disrupt the program's flow, leading to failure.
- **Exceptions**: Allow for controlled interruption, where the program can recover or provide feedback to the user.

Example:

```python
try:
    x = 10 / 0  # This will raise an exception
except ZeroDivisionError:
    print("Cannot divide by zero")
```

# Conclusion

Control flow in Python determines the structure and flow of a program. Whether it's **line by line** execution, making decisions with **selection**, repeating actions through **iteration**, or managing the flow with **jumps**, **subroutine control**, and **error handling**, understanding control flow is key to writing efficient and dynamic Python programs. In the following chapters, we will dive deeper into each of these control flow techniques, providing examples and detailed explanations.

```

This structure breaks down each control flow concept into distinct sections with clear explanations and examples, following your preferred style.
```