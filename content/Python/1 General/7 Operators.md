---
title: 7 Operators
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
Operators in Python are special symbols or keywords used to perform operations on variables and values. An Operator will usually take one or more variables/values called operands, preform an operation and return the result. Python supports a variety of operators categorized by their functionality. 
# Summary
- **`=`**: Assigns values to variables. Can be combined with other operations, e.g., x += 1, x /= 3.
- **Arithmetic Operators**
	- Standard operators like `+`, `-`, `*`, `/`, `//`, `%`, `**` for mathematical operations.
	- Floor Division `//` Rounds down to nearest whole number.
	- Modulo `%` Returns remainder after division.
- Relational Operators are used for comparisons, returning boolean results: `==`, `!=`, `>`, `<`, `>=`, `<=`.
- **Logical Operators** chain conditions together	
	- - **`and`**: Truthy if both conditions are Truthy.
	-  **`or`**: Truthy if at least one condition is Truthy.
	- **`not`**: Inverts the boolean value.
- Operators are evaluated based on precedence, e.g. `()`, `**`, `*` `/`, `+` `-`, comparison, logical, assignment

# Assignment Operator
The assignment operator `=` is used to [[6 Variables#Creating/Assigning|assign]] a value to a [[6 Variables|variable]] .

```python
x = 5 # assign the value 5 to the variable x
```

> [!todo]- partly exam relevant
> The following 3 subchapters show advanced usage. It is good to know about this, but not strictly exam relevant.
## Augmented Assignment
You can combine the assignment operator with an arithmetic or bitwise. This will apply the operation to the current value of a variable and then assign the resulting value to the variable again. To do this you have to put the other operator between the variable name and the assignment. 

```python
x = 1      # assign the value 1 to the variable x
x += 1     # same as 'x=x+1', add one to the value of x, result: 2
x *= 3     # same as 'x=x*3', multiply the value of x with 3, result: 6
x -= 2 * 4 # same as 'x=x-2*4', result -2, because of precedence
x **= 2    # same as 'x=x**2', result 4
x <<= 1    # same as 'x=x<<2', result 8
x //= 3    # same as 'x=x//3', result 2
```

## Multiple Value Assignment
Python allows you to assignment multiple values at once using the syntax `var1, var2, var3 = val1, val2, val3`. You can also use this with [[5 Datatypes#Iterable|iterable]] values like this `var1, var2, var3 = (val1, val2, val3)`. If there are more values than variables, you have to tell python which variable should take a list of multiple values by marking it with an asterisk`*` like this `var1, *others = (val1, val2, val3, val4)`.

```python
a, b, c = 1, True, "test"      # multiple value assignment 
print(a, b, c)                 # -> 1 True test

a, b = b, a                    # swap the values of two variables
print(a, b)                    # -> 2 1

a, *b = (1, 2, 3, 4, 5)        # a takes the first, b takes a list of all others
print(a)                       # -> 1
print(b)                       # -> [2, 3, 4, 5]

*a, b, c = 1, 2                # c takes the last, b the secound last, a takes all extra, which are in this case no elements at all
print(a)                       # -> []
print(b)                       # -> 1
print(c)                       # -> 2

a, *b, c = "This is some text" # a takes the first, c takes the last, b takes all in the middle as a list
print(a)                       # -> T
print(b)                       # -> ['h', 'i', 's', ' ', 'i', 's', ' ', 's', 'o', 'm', 'e', ' ', 't', 'e', 'x']
print(c)                       # -> t
```

## Walrus Operator
> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

The walrus operator `:=` combines assignment and returning the value for further use. This can be helpful to reduce code duplication, especially with conditions or loops. The walrus operator can also be combined with augmented assignment.

```python
# Without Walrus Operator
value = input("Enter 'exit' to stop the loop: ")
while value != "exit":
    print("Inside while loop with input:", value)
    value = input("Enter 'exit' to stop the loop: ")
print("loop finished")

# With Walrus Operator
while (value := input("Enter 'exit' to stop the loop: ")) != "exit":
# this will take input, assing it to the variable value, and also return it to also be used in for value != "exit"
    print("Inside while loop with input:", value)
print("loop finished")
```

# Arithmetic Operators

Arithmetic operators are basically the operators you already know from mathematics. With numbers types like `int`, `float` or `complex` they will work the same as you expect from mathematics. 

| Name                        | Operator | Syntax   | Example                                        |
| --------------------------- | -------- | -------- | ---------------------------------------------- |
| Addition or Concatenation   | `+`      | `a + b`  | `3 + 2 = 5`, `"Hello" + "World" = "HelloWorld` |
| Subtraction                 | `-`      | `a - b`  | `5.5 - 2 = 3.5`                                |
| Multiplication or Repeating | `*`      | `a * b`  | `-1.2 * 3 = -3.6`, `4 * "Hi" = "HiHiHiHi"`     |
| Division                    | `/`      | `a / b`  | `7 / 2 = 3.5`                                  |
| Floor Division              | `//`     | `a // b` | `7 // 2 = 3`                                   |
| Modulus/Remainder           | `%`      | `a % b`  | `7 % 2 = 1`                                    |
| Exponentiation (Power)      | `**`     | `a ** b` | `3 ** 2 = 9`                                   |
Exponentiation also works with floats, and fractional exponents can be used to calculate roots.
## Division Operators
Python actually has three different operators related to division. The true division `/` will give you an accurate division result as a float number. The floor division `//` will return the result of doing the division and then **rounding down** to the next lowest whole number. The modulo `%` will return the **remainder** when doing a whole number division. 

```python
print(f"The result of dviding 13 by 5 is {13/5}")                     # The result of dviding 13 by 5 is 2.6
print(f"This means that 5 fully fits into 12 {13//5} times")          # This means that 5 fully fits into 12 2 times
print(f"When fitting 5 into 13, there will be a remainder of {13%5}") # When fitting 5 into 13, there will be a remainder of 3
```

So mathematically this is always correct: `a % b = a - b*(a//b)`. You can also think of the modulo in terms of a circle. For example when working with mode 360`0° = 360° = 720°`...

```python
print(10%360, 370%360, 730%360)               # -> 10 10 10
print(3%10, 16%10, 211%10, 9873%10, 1357%100) # -> 3 6 1 3 57
```

## Result Datatype
The [[5 Datatypes|datatype]] of the result of an operation only depends on the datatypes or the two operands. 

Addition `+`, Subtraction `-`, Multiplication `*`, Floor Division `//`, Modulus `%` and Exponentiation `**` will return an integer if both of the operands are [[5 Datatypes#Integer|integers]]. If one of them is [[5 Datatypes#Complex|complex]] the result is complex. Otherwise, if one of them is a [[5 Datatypes#Float|float]], the result will be float. 

The true Division `/` will always return a [[5 Datatypes#Float|float]]. If one of the operands is [[5 Datatypes#Complex|complex]], it will return complex. 

```python
a = 3
b = 1.5
c = 2 - 1j
print(a + b)      # -> 4.5
print(b - c)      # -> (-0.5+1j)
print(b * c)      # -> (3-1.5j)
print(a / a)      # -> 1.0
print(2 * b // 1) # -> 3.0
```

When using operators with collections the result datatype is the same as the datatype of the collection you use.
## Collection Usage
The operators `+` and `*` can also be used with [[5 Datatypes#Collection Datatypes|sequence datatypes]]. The `+` operator is used to concatenate/combine two strings, lists or tuples of the **same** datatype.

```python
x = "Hello"
print(x + " " + "World")            # -> Hello World
print([1, 2] + [3, 4])              # -> [1, 2, 3, 4]
print((1, 2) + (3, (True, "Test"))) # -> (1, 2, 3, (True, 'Test'))
print(x + [1, 2]) # ERROR because they have different datatypes
```

> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

The `*` operator is used to repeat a string, list or tuple multiple times. For that you have to give the number of time you want to repeat as a positive integer and the sequence you want to repeat. The result datatype is the same as you start with.

```python
print(3 * "Hello") # -> HelloHelloHello
print([0] * 10)    # -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
print((1,2,3) * 2) # -> (1, 2, 3, 1, 2, 3)
```

# Relational/Comparison Operators
Relational Operators always compare two values and return a **[[5 Datatypes#Boolean|boolean]]**.

|Name|Operator|Example|Explanation|
|---|---|---|---|
|Equal|`==`|`a == b`|True if `a` and `b` have the same value.|
|Not Equal|`!=`|`a != b`|True if `a` and `b` do not have the same value.|
|Greater Than|`>`|`a > b`|True if `a` is greater than `b`.|
|Less Than|`<`|`a < b`|True if `a` is less than `b`.|
|Greater or Equal|`>=`|`a >= b`|True if `a` is greater than or equal to `b`.|
|Less or Equal|`<=`|`a <= b`|True if `a` is less than or equal to `b`.|
## (In-)Equality
Equality `==` and Inequality `!=` are exact opposites and work with all datatypes. The Equal operator checks if two values are the same. Comparing two numbers will ignore datatype differences and implicitly converted. When comparing a boolean to a number `True == 1` and `False == 0`.

```python
print(1 == 2)           # -> False
print(1 == 1.0)         # -> True
print(1 == 1.0000001)   # -> False 
print(1.5 != 2-1j)      # -> True
print(0.3 == 0.3+0j)    # -> False
print(True == 1)        # -> True
print(True != False)    # -> True
print([1, 2] == (1, 2)) # -> False
print("test" != "Test") # -> True
```

## Greater/Less Than
Check if one value is greater than `>` or smaller than `>` a different one. Primarily used to compare integer or float numbers, which are compatible with each other. If an `=` is included (`>=` or `<=`), having to equal values will also return `True`.

```python
print(1 > 1)     # -> False
print(1 >= 1)    # -> True
print(1 < 1.2)   # -> True
print(-1 > -2.5) # -> True
print(1 >= 1.0)  # -> True
print(1 <= 1.0)  # -> True
```

> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

These operators can also be used with the [[5 Datatypes#Collection Datatypes|sequence datatypes]] string, list and tuple. Both operands must be of the same datatype. This will check the operation for all pairs of elements one by one. So as soon as there is a pair of elements that do not have the same value it will result in a total result of either`True` or `False`. If they have different lengths but the element pairs are all equal, the shorter sequence is considered smaller.

```python
print([1] < [2])                  # because 1<2 -> True
print([1, 3] < [1, 2])            # because 3<2 -> False
print([1, 0.5, 9] < [1, 1, 0])    # because 0.5<1 -> True
print([1, 2, 3] < [1, 2, 3])      # because equal -> False
print([1, 2, 3] <= [1, 2, 3])     # because equal -> True
print([1, 2, 3] < [1, 2, 3, -99]) # because list 1 is shorter and the common elements are same-> True
print("a" < "b")                  # -> True
print("computer" < "comparison")  # because "u"<"a" -> False
```

## Chained Comparison
> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

Python allows you to chain comparisons together. This will behave the same way as having an `and` between the individual operations. For example `a < b == c >= d` is the same as `a<b and b==c and c>=d`. The easiest use case is to check if i number is between two others.

```python
x = 4
print(1 < x < 10)        # -> True  
print(4 < x < 10)        # -> False
print(0 < x < 10 < x**2) # -> True
```

# Logical Operators

Logical operators are used to combine multiple comparisons and Booleans to more complex logical statements.

| Operator | Example   | Explanation                                |
| -------- | --------- | ------------------------------------------ |
| `and`    | `a and b` | True if both `a` and `b` are True.         |
| `or`     | `a or b`  | True if at least one (`a` or `b`) is True. |
| `not`    | `not a`   | True if `a` is False (logical negation).   |

```python
print(False and False)            # -> False
print(False and True)             # -> False
print(True and True)              # -> True
print(False or False)             # -> False
print(False or True)              # -> True
print(True or True)               # -> True
print(not False)                  # -> True
print(not True)                   # -> False
print(2 == 1 or 2 == 2 or 2 == 3) # -> True
```

## Not Boolean Operands
> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

As long the operands are boolean, the result will also be boolean. However in Python logical operators also work with operands that are not boolean. They will keep their general behavior and `not` will always return a boolean. The `and` operator stops as soon as it encounters a Falsy value and returns it. If all values are Truthy, it returns the last operand. The `or` operator stops as soon as it encounters a Truthy value and returns it. If all values are Falsy, it returns the last operand.

```python
print(0.0 and 1)                    # -> 0.0
print(0 or 0.0 or "" or "Default")  # -> Default
print(1 and 2 and 3)                # -> 3
print((5 or 0) and ("" or "World")) # -> World
```

# Precedence
Operator precedence determines the order in which operators are evaluated. If two have the same precedence python works from left to right. This is similar to mathematical operations where you also have to keep the correct PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) order

| Operator                         | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| `()`                             | Parentheses (used to group expressions)           |
| `**`                             | Exponentiation                                    |
| `+x`, `-x`, `~x`                 | Unary plus, Unary minus, Bitwise NOT              |
| `*`, `/`, `//`, `%`              | Multiplication, Division, Floor division, Modulus |
| `+`, `-`                         | Addition, Subtraction                             |
| `<<`, `>>`                       | Bitwise left shift, Bitwise right shift           |
| `&`                              | Bitwise AND                                       |
| `^`                              | Bitwise XOR                                       |
| \|| Bitwise OR                                     |
| `==`, `!=`, `>`, `<`, `>=`, `<=` | Comparison operators                              |
| `is`, `is not`, `in`, `not in`   | Identity and membership tests                     |
| `not`                            | Logical NOT                                       |
| `and`                            | Logical AND                                       |
| `or`                             | Logical OR                                        |
| `=` , `+=`, `-=`, etc.           | Assignment and augmented assignment operators     |
| `lambda`                         | Lambda function declaration                       |

> [!quote]- Additional not exam relevant topics for later
> Contents
> # Bitwise Operators
> 
> # Set Operators
> 
> # Iterable Unpacking



# Questions
- [ ] Explain assignment in you own words.
	- [ ] Explain augmented assignment in you own words.
	- [ ] Explain multiple value assignment in you own words.
	- [ ] Explain the walrus operator in you own words.
- [ ] Explain arithmetic operators in you own words.
	- [ ] Explain the difference between `/`, `//` and `%` in detail.
	- [ ] Explain what datatype the result of an operation will be.
	- [ ] Explain the arithmetic operators with sequence datatypes in you own words.
	- [ ] Compare using contaminating vs. formatted strings to put together a multiple part string with different variables including a practical example.
- [ ] Explain comparison operators in you own words.
	- [ ] Explain `==` and `!=` in detail. What is the difference between `==` and `is`.
	- [ ] Explain greaten than and less then in detail.
	- [ ] Explain chained comparisons in you own words.
- [ ] Explain logical operators in you own words.
	- [ ] Explain logical operators with operands that are not boolean in detail?
- [ ] Explain operator precedence in detail in you own words.
	- [ ] Show operator precedence by creating and explaining practical examples.