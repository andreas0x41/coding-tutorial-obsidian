---
title: 2.1 Control Flow
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Overview
  - Python
  - ControlFlow
  - SDML
  - AECD
  - GEES
---

Control Flow refers to the order in which individual statements, instructions, functions, ... are executed or evaluated in a program. Control Flow is essential for making decisions and managing the program's behavior. Computers, and therefore also programs, are completely deterministic. This means you can always determine what will happen next when going through code.

# Summary
Control Flow determines the execution order of code in a program.
- **Line by Line**: Code executes sequentially, top to bottom.
- **Selection**: [[2 Conditionals|Conditional statements]] like`if-else` allow decisions based on conditions.
- **Iteration**: Loops like `while`/`for` repeat code while a condition is true or for a number of iterations.
- **Jumps**: `break` exits loops; `continue` skips to the next iteration,`goto` jumps to a specific line/block.
- **Subroutines**: Functions encapsulate reusable code, called with arguments and returning values.
- **Errors & Exceptions**: Interrupt the normal execution; Exceptions can be recovered using `try-except`.

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
Selection allows the program to make decisions. The program chooses what code to execute next based on a condition. The basis for the decisions is **[[2 Conditionals|if]]** a [[5 Datatype#Boolean|boolean]] is `True`, or whether a pattern matches.

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
Iteration allows you to repeat a block of code multiple times. This is usually done **[[3 While Loop|while]]** a [[5 Datatype#Boolean|boolean]] condition is true or **for** a fixed number of iterations. 

```python
x = 0
while x < 5:
    print("x is", x)
    x += 1
```

```python
for i in range(10):
	print("Iteration number ", i)
```

# Jumps
Jumps allow the program to exit the normal flow of execution and either skip over parts of code or go to a completely different position. Python allows you to exit a loop using `break` or go to the next iteration of a loop using `continue`.

```python
for i in range(99):
	if i > 20:
		break
	if i%2 == 1:
		continue
	print(i)
```

> [!todo]- not exam relevant
> This is good to know, but not directly exam relevant.

In many languages there exists some kind of `goto` statement. This allows you to jump to a specific line or block of code and continue the normal execution from there. However this is not possible in Python and is nowadays often thought of as bad coding style. You can do basically everything with other Control Flow methods than a `goto`. Still it is good to know the general idea, since a few languages heavily use it. You can even think of, or sometimes see an implementation where, `goto` and `conditional goto` are the only Control Flow, or at least the building blocks for all others.

# Subroutines
A subroutine is a reusable block of code that performs a specific task. The most common type of subroutine is a function. When a function is called, the program jumps to the definition of the function, executes the code inside, and then returns the position where it was called. Additionally you can give values to a function using arguments and receive values using return.

```python
def greet():
    print("Hello!")

greet()  # Function call
print("Done")
```

# Errors
Errors and Exceptions are ways in which Control Flow is interrupted when something goes wrong. A well written program should not contain errors on the programmers side and prevent or properly handle exceptions caused by the user.

**(Syntax-)Errors** are usually unrecoverable issues disrupting the program's flow, leading to failure. These are caused by the programmer not writing code in correct python syntax.

If something has correct syntax, but causes an error when executing it, it is called an **Exception**. These are recoverable issues that allow for controlled interruption, where the program can recover or provide feedback to the user. These can be caused both by the programmer (e.g. incorrect [[6 Variable|variable]]/function/... name; incorrect [[5 Datatype|datatype]]; incorrect import; ...) and the user (incorrect input of any kind; file not found; internet connection error; ...). In Python you can prevent exceptions or use `try-except` blocks to handle them and prevent crashes.

```python
# Error because of incorrect function name and string never closed
Print("incorrect string)
while True # Error because no colon ":"
print(1)   # Error because function block not indented
```

```python
try:
    x = 10 / 0            # Exception caused by division by zero
except ZeroDivisionError: # Exception handled using try-except block
    print("Cannot divide by zero")
```

# Questions
- [ ] What is the concept of Control Flow in programming?
- [ ] How does Python execute code by default? Explain with an example.
- [ ] Explain selection in your own words. 
- [ ] Explain iteration in your own words.
- [ ] Explain `break` and `continue` in your own words.
- [ ] Explain `goto` in your own words.
- [ ] Explain subroutines in your own words.
- [ ] Explain exceptions in your own words.
- [ ] What are the differences between an Syntax Error and an Exception? Also give examples.
- [ ] What is the difference between a "syntax error" and an "exception" in Python?
- [ ] Explain in detailed small steps how this code will be executed step by step, what it does, what output it gives and also order of operations step by step.

```python
x = 5
y = x
print(x+y*x)
y = 1
print(x**y)
print(x > y and x % (2 * y) > y)
```