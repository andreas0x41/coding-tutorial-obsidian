---
title: 1.3 Input
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
# Summary
- **`input()`:** Waits for user input and always returns it as a [[AIAT-Exam/1 General/5 Datatype#String|string]].
- **Prompting:** Can take a [[AIAT-Exam/1 General/5 Datatype#String|string]] argument to display as a prompt before taking input.
# Standard Usage
Python uses the [[AIAT-Exam/2 Control Flow/5 Function|function]] `input()` to get console input from the user. It will wait for the user to input something on the console. As soon as the user presses `Enter` the function will [[AIAT-Exam/2 Control Flow/5 Function#Return|return]] the value entered by the user and continue with the program. 

Input will **always** return the value as [[AIAT-Exam/1 General/5 Datatype#String|string]]. If you need the input to be a different [[AIAT-Exam/1 General/5 Datatype|datatype]], you have to explicitly convert it. But you have to be careful, because taking input that has an unexpected datatype or [[AIAT-Exam/1 General/5 Datatype|datatype]] is one of the most common error cases. If you take input you should tell the user what you expect, check if the entered value is valid, and include exception handling.

```python
input()
```

You can use the value returned by `input` directly or store it in a [[AIAT-Exam/1 General/6 Variable|variable]] to use it later/multiple times.

```python
# direct usage
print("1 The user entered the value:", input()) # -> 1 The user has entered the value {?}

# store in variable and use later
x = input()
print("2 The user entered the value:", x) # -> 2 The user has entered the value {?}
```

# Prompt
The `input()` function can take one argument that will outputted directly before taking input. This is usually used to ask and inform the user what input is expected.

```python
x = input("Please input a number: ")     # -> Please input a number: 
print("The user entered the number:", x) # -> The user has entered the number {?}
```

# Questions
- [ ] Explain `input()` in your own words.
- [ ] What does the `input()` function always return, regardless of the type of input?
- [ ] How can you store the value returned by `input()` for later use?
- [ ] What argument can you give to `input()`, what does it do, and what is it usually used for? 
- [ ] Write code to ask the user for their name and greet them with a personalized message.