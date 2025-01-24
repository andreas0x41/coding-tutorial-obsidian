---
title: 3 Input
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
# Summary
- **`input()`:** Waits for user input and always returns a string.
- **Saving Input:** Store the returned value in a variable for later use.
- **Prompting:** Pass a string to `input()` to display a prompt before input.
# Simple Input
Python has one primary function for console input called `input()`. It will wait for the user to input something on the console. As soon as the user presses `Enter` the function will return the value entered by the user and continue with the program. 

Input will **always** return the value as as string. So if you want the input to be a different [[5 Datatypes|Datatype]], you have to explicitly convert them, but you have to be careful. Taking input of some kind that has an unexpected datatype or value is one of the most common error cases. If you take input inform the user what you expect and then [[5 Datatypes#^893b23|check]] if he entered a valid value or at least do proper exception handling.

```python
input()
```

You can save the value returned by `input` in a [[6 Variables|variable]] to use it later/multiple time.

```python
x = input()
print("The user entered the value:", x) # -> The user has entered the value {?}
```

You can also use the value returned by `input()` directly.

```python
print("The user entered the value:", input()) # -> The user has entered the value {?}
```

# Input with Prompt
If you want, you can give the `input` function one argument. It will this value directly before taking input. This is usually used to ask and inform the user what input is expected

```python
x = input("Please input a number: ") # -> Please input a number: 
print("The user entered the number:", x) # -> The user has entered the number {?}
```

# Questions
- [ ] What does the `input()` function always return, regardless of the type of input?
- [ ] How can you store the value returned by `input()` for later use?
- [ ] What happens when you call `input()` with no prompt message? 
- [ ] What does providing an argument to `input()` do, and how is it typically used?
- [ ] How would you modify the code to prompt the user for their name and greet them with a personalized message? 

```python
  x = input()  
  print("Hello, ", x)
```