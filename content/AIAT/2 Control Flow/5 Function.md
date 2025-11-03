---
title: 2.5 Function
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - ControlFlow
  - SDML
  - AECD
  - GEES
---
A `function` is a reusable block of code that performs a specific task. It splits code into independent logical blocks and helps to organize it, avoid repetition, and improve readability.  
# Summary
- **Basic Usage**: Defined using `def` and called by its name with brackets.
- **Parameters and Return**: Functions can accept input values and return values.
- **Default Arguments**: Parameters can have default values.
- **\*args/\*\*kwargs**: Allow a flexible number of arguments.
- **Scope**: Variables inside a function are local unless specified otherwise.

# Basic
A function is defined using `def` followed by the function name and in the following code block the function body. After defining it, you can call the function using `functionName()` whenever and as often as you want. Python will go to the function definition, run the code inside the function body, and then go back to the position of the function call.

```python
def functionName():
	# function body
	# there can be any code inside 

functionName()
```

```python
def greet():
    print("Hello, world!")

greet()
greet()
``` 

So in this example, the following lines will be executed for the output.

```output
                  # read and store the definition: 1, 2
Hello, world!     # first function call: 4, 1, 2, return to after 4
Hello, world!     # second function call: 5, 1, 2, return to after 5
```

# Parameters
Functions can accept parameters to work with, which are special [[content/AIAT/1 General/6 Variable#Scope|local variables]]. A parameter is a variable listed in a function's definition. An argument is the actual value passed to that parameter when the function is called. You have to list all the parameter names in the function definition. When calling a function you have to give the same amount of arguments, as there are parameters. 

```python
def functionName(parName1, parName2, parName3):
	# function body

functionName(arg1, arg2, arg3)
```

For example we can modify the code from above to greet a specific person.

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
greet("Andreas")
greet("")
# greet() or greet("A", "B") would throw an error because the number of parameters and arguments is not the same.
```

 ```output
Hello, Alice!
Hello, Andreas!
Hello, !
```

## Parameter Mutability
Using a variable as an argument will create a new pointer to the same [[content/AIAT/1 General/6 Variable#Memory Objects|memory object]]. So you have to be careful with the [[content/AIAT/1 General/6 Variable#Mutability Behaviour|mutability behavior]]. 

```python
def mutabilityExample(immutable, mutable):
	print(id(immutable), id(mutable))
	immutable += 2
	mutable[1] = 20
	print(id(immutable), id(mutable))
a = 1
b = [1, 2, 3, 4]
print(a, b)
mutabilityExample(a, b)
print(a, b)
```

```output
1 [1, 2, 3, 4]
140714660586280 2470666856576
140714660586344 2470666856576
1 [1, 20, 3, 4]
```

You can see that changing the value of [[content/AIAT/1 General/6 Variable#Mutability Behaviour|mutable variables]] applies to the [[content/AIAT/1 General/6 Variable#Memory Objects|memory object]] itself and therefore also outside the function.
# Return
A function can return a value using the `return` keyword. The return value will be put exactly where the function call happened. 

```python
def add(a, b, c):
    return a + b + c

result = add(3, 5, -1) # we store the return value of add in the variable result
print(result)          
print(add(1, 2, 8))    # we use the return value directly
print(add("1", "a", "23"))
```

```output
7
11
1a23
```

The function execution ends as soon as it hits a `return`, everything after that will not be executed. You can see in the following code example, that the [[content/AIAT/2 Control Flow/2 Conditions#Else|else]] keywords are not necessary here, because the execution will only continue if the condition before was `False`.

```python
def greater_number(a, b):
    if a > b:
        return "a is greater than b"
    if a == b:
        return "a and b are equal"
    return "b is greater than a"

a = 2
for b in range(5):
    print(f"{a}, {b}: {greater_number(a, b)}")
```

```output
2, 0: a is greater than b
2, 1: a is greater than b
2, 2: a and b are equal
2, 3: b is greater than a
2, 4: b is greater than a
```

If a function does not return anything, it returns [[content/AIAT/1 General/5 Datatype#None|None]] by default.

```python
print(print())   # print the return value of print -> None
```

## Return Multiple Values
You can return multiple comma-separated values, which will be interpreted like a [[content/AIAT/1 General/5 Datatype#Tuple|tuple]]. You can extract the individual values using [[content/AIAT/1 General/5 Datatype#Indexing|indexing]] or [[content/AIAT/1 General/7 Operator#Multiple Value Assignment|multiple value assignment]].

```python
def example():
	return 1, "a", 0.4
values = example()
print(values)                          # -> (1, 'a', 0.4)
a, b, c = example()
print(f"[0]: {a}, [1]: {b}, [2]: {c}") # -> [0]: 1, [1]: a, [2]: 0.4
```

# Scope
The general principle of scope is explained on the [[content/AIAT/1 General/6 Variable#Scope|variables]] page. You can refer to a global variable from inside a function using the `global`[[content/AIAT/1 General/8 Keyword|keyword]].

```python
x = 5
print(f"variable value at the start: {x} {id(x)}")

def usingLocal():
    x = 9
    print(f"variable value inside usingLocal(): {x} {id(x)}")

usingLocal()
print(f"variable value after usingLocal(): {x} {id(x)}")

def usingGlobal():
    global x # importing the global x
    print(f"variable value inside usingGlobal(): {x} {id(x)}")
    x = 9

usingGlobal()
print(f"variable value after usingGlobal(): {x} {id(x)}")
```

```output
variable value at the start: 5 10709616
variable value inside usingLocal(): 9 10709776
variable value after usingLocal(): 5 10709616
variable value inside usingGlobal(): 5 10709616
variable value after usingGlobal(): 9 10709776
```

> [!todo]- not exam relevant
> Nonlocal is rarely used and not exam relevant.

You can refer to a variable one layer outside of the current function using the `nonlocal`[[content/AIAT/1 General/8 Keyword|keyword]].

```python
def outer_function():
    x = 10 
	print(f"1: {x} {id(x)}")

    def inner_function():
        nonlocal x
        print(f"2: {x} {id(x)}")
        x = 20
		print(f"3: {x} {id(x)}")

    inner_function()
    print(f"4: {x} {id(x)}")

outer_function()
```

```output
1: 10 140714660586568
2: 10 140714660586568
3: 20 140714660586888
4: 20 140714660586888
```

# Methods
A method is a function that belongs to an object/class. Because of this it can directly access and change the value of the object/class. You can find details about creating your own classes, objects, and methods under [[content/AIAT/3 Advanced/2 OOP|Object Oriented Programming]].

```python
l1 = [2, 1, 5, 3, 2, 7, 0]
returnValue = sorted(l1) # sorting with function, give list as argument, get new sorted list returned
print(returnValue, l1)   # -> [0, 1, 2, 2, 3, 5, 7] [2, 1, 5, 3, 2, 7, 0]
l1 = returnValue 

l2 = [2, 1, 5, 3, 2, 7, 0]
returnValue = l2.sort()  # sorting with method, method belongs to the list, no retrun value, changes directly applied
print(returnValue, l2) # -> None [0, 1, 2, 2, 3, 5, 7]
```

> [!quote]- Additional not exam relevant topics for later
> Type Hinting
> Default Arguments
> lambda
> \*args And \*\*kwargs
> Decorators
> Recursion
> Generator

# Questions

- [ ] Explain in your own words what a function is, and why it is useful.
- [ ] Explain function definition and function call in your own words.
- [ ] Explain parameters in your own words.
- [ ] Explain `return` in your own words.
- [ ] What is the difference between `return` and `print` inside a function?
- [ ] What exactly happens if a function doesn't have a `return` statement?
- [ ] Write a function that takes a list of numbers and returns their average.
- [ ] Explain method in your own words.