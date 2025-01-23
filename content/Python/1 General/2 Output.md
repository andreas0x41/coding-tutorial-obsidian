---
title: 2 Output
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

- **`print()`:** Outputs values of any datatype to the console.
- **Defaults:** Adds a line break; blank lines if no arguments are given.
- **Separator (`sep`)** for value separation.
- **End (`end`)** for what follows the output.

# Simple Print

Python has one primary function for console output called `print()`. In general you can give the print function any value of any [[4 Datatypes|datatype]] and it will print it to the console.

## Print Hello World

This for example will print the message "Hello World" to the console.

```python
print("Hello World") # -> Hello World
```

## Printing Multiple Datatypes

You can also print any other values of any [[4 Datatypes|datatype]] using this function.

```python
print(12) # -> 12
print(2.5) # -> 2.5
print(True) # -> True
print("Some more text") # -> Some more text
```

By default, after every printed value, there will be a Line break, so the next value will be in a new line. The code above will output the following text to the console. You can see that each output is in its own line.

```output
12
2.5
True
Some more text
```

## Print without Any Arguments

If you don't give any value to the print function, it will not print anything, but still make a new line.

```python
print(1) # -> 1
print()
print(2) # -> 2
print()
print()
print(3) # -> 3
```

Bellow you see the exact output of these print statements.

```output
1

2


3
```

# Print Multiple Values

The print function can take any number of comma separated values and print all of them. In the output, the values will be separated with spaces.

```python
print("Hello", "World", "Python") # -> Hello World Python
```

# Additional Arguments for Print

The print function can not only take the values you want to print, you can also give some other arguments for special output.

## Print Seperator

You can tell the print function which value to put between the values you are printing using the `sep` parameter. You can give it any string to put between multiple values within the print, the default is a space.

```python
print("Hello", "World", "Python", sep=" | ") # -> Hello | World | Python
print("Shopping List: Apple", "Banana", "Bread", "Milk", sep=", ")  # -> Shopping List: Apple, Banana, Bread, Milk
```

## Print End

You can tell the print function which value to put after all of the printed values using the `end` parameter. You can give any string, default is a new line ('\n').

```python
print("This doesn't end with a newline", end=" ---> ")
print("This continues on the same line.") # ->
```

```output
This doesn't end with a newline ---> This continues on the same line.
```

# Questions

- [ ] Can the `print()` function handle multiple datatypes in one call? If yes, how are they separated in the output by default?
- [ ] What will be the output of the following code?

```python
  print("Python", "is", "fun", sep="-", end="!")
  print("Let's code.")
```

- [ ] What does the `sep` parameter do in the `print()` function? Provide an example.
- [ ] If the `print()` function is called without any arguments, what will be its behavior? Provide an example output.
- [ ] How can you ensure the output of two `print()` statements appears on the same line?
