---
title: 1.2 Output
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

- **`print()`:** Outputs values of any [[AIAT/1 General/5 Datatype|datatype]] to the console.
- Use `end` to define what follows the output. Default is a [[AIAT/1 General/5 Datatype#Special Characters|newline]].
- Use `sep` to define what separates the values.

# Simple Print

You can output to the console with the [[AIAT/2 Control Flow/5 Function|function]] `print()`. You can give `print()` any values of any [[AIAT/1 General/5 Datatype|datatype]] as [[AIAT/2 Control Flow/5 Function#Parameters|arguments]] and it will print it to the console.

## Hello World

In this example, we give the `print()` function the [[AIAT/1 General/5 Datatype#String|string]] "Hello World". This text will be outputted to the console.

```python
print("Hello World") # -> Hello World
```

## Multiple Datatypes

You can also print any other values of any [[AIAT/1 General/5 Datatype|datatype]] using this function.

```python
print(12)               # -> 12
print(2.5)              # -> 2.5
print(True)             # -> True
print("Some more text") # -> Some more text
```

By default, after every printed value, there will be a [[AIAT/1 General/5 Datatype#Special Characters|line break]]. So the next value will be at the start of a new line. The code above will output the following text to the console. You can see that each output is in its own line.

```output
12
2.5
True
Some more text
```

## Without Any Arguments

If call the print function without any arguments, it will only output the [[AIAT/1 General/5 Datatype#Special Characters|newline]].

```python
print(1)
print()
print(2)
print()
print()
print(3)
```

Below you see the exact output of these print statements.

```output
1

2


3
```

# Multiple Values
> [!todo]- less exam relevant
> Less exam relevant, but still good/helpful to know.

The `print()` function can take multiple comma-separated [[AIAT/2 Control Flow/5 Function#Parameters|arguments]] and output them. By default, these values will be separated with spaces.

```python
print("Hello", "World", "Python") # -> Hello World Python
```

# End Parameter
> [!todo]- less exam relevant
> Less exam relevant, but still good/helpful to know.

The parameter `end` defines what will be outputted after all of the printed values. You can use any [[AIAT/1 General/5 Datatype#string|string]], default is a [[AIAT/1 General/5 Datatype#Special Characters|newline]].

```python
print("This doesn't end with a newline", end=" ---> ")
print("This continues", end=" ")
print("on the same line.")
```

```text
This doesn't end with a newline ---> This continues on the same line.
```

# Sep Parameter
> [!todo]- less exam relevant
> Less exam relevant, but still good/helpful to know.

The parameter `sep` defines how multiple printed values should be separated. You can use any [[AIAT/1 General/5 Datatype#string|string]], default is a space.

```python
print("Hello", "World", "Python", sep=" | ") # -> Hello | World | Python
print("Shopping List: Apple", "Banana", "Bread", "Milk", sep=", ")  # -> Shopping List: Apple, Banana, Bread, Milk
```

# Questions

- [ ] Explain `print()` in your own words.
- [ ] If the `print()` function is called without any arguments, what will happen? Give and explain an example with multiple `print()` functions.
- [ ] Explain the parameter `end` in your own words including an example.
- [ ] Explain the parameter `sep` in your own words including an example.
- [ ] What will be the output of the following code?

```python
  print("Python", "is", "fun", sep="-", end="! ")
  print("Let's code.")
```
