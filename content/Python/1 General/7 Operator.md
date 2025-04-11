---
title: 1.7 Operators
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
Operators in Python are special symbols or keywords used to perform operations on variables and values. An Operator will usually take one or more values called operands, perform an operation/action, and return the result. Python supports a variety of operators categorized by their functionality. 
# Summary
- **`=`**: Assigns values to variables. Can be combined with other operations, e.g., x += 1, x /= 3.
- **Arithmetic Operators**
	- Standard operators like `+`, `-`, `*`, `/`, `//`, `%`, `**` for mathematical operations.
	- Floor Division `//` rounds down to nearest whole number.
	- Modulo `%` returns the remainder of a division.
	- String concatenation done using `+` operator
- **Relational Operators** are used for comparisons, returning boolean results: `==`, `!=`, `>`, `<`, `>=`, `<=`.
- **Logical Operators** chain conditions together	
	-  **`and`**: [[5 Datatype#Truthy and Falsy|Truthy]] if both conditions are Truthy.
	-  **`or`**: [[5 Datatype#Truthy and Falsy|Truthy]] if at least one condition is Truthy.
	- **`not`**: Inverts the boolean value.
- Operators are evaluated based on precedence, e.g. `()`, `**`, `*` `/`, `+` `-`, comparison, logical, assignment

# Assignment Operator
The assignment operator `=` is used to [[6 Variable#Creating/Assigning|assign]] a value to a [[6 Variable|variable]] .

```python
x = 5 # assign the value 5 to the variable x
```

> [!todo]- less/not exam relevant
> The following 3 subchapters show more advanced usage. It can be helpful to know about this, but especially the last two are not exam relevant.
## Augmented Assignment
You can combine the assignment operator with an arithmetic or bitwise operator. This will apply the operation to the current value of the variable and then assign the resulting value to the variable again. This is done by putting the other operator between the variable name and the assignment with the syntax `var_name operator= value`.

```python
x = 1      # assign the value 1 to the variable x
x += 1     # same as "x=x+1", add one to the value of x, result: 2
x *= 3     # same as "x=x*3", multiply the value of x with 3, result: 6
x -= 2 * 4 # same as "x=x-2*4", result -2, because of precedence
x **= 2    # same as "x=x**2", result 4
x <<= 1    # same as "x=x<<2", result 8
x //= 3    # same as "x=x//3", result 2
```

## Multiple Value Assignment
Python allows you to assign multiple values at once using the syntax `var1, var2, var3 = val1, val2, val3`. You can also use this with an [[5 Datatype#Iterable|iterable]] with the syntax `var1, var2, var3 = (val1, val2, val3)`. If there are more values than variables, you have to tell Python which variable should take a list of multiple values by marking it with an asterisk`*` like this `var1, *others = (val1, val2, val3, val4)`.

```python
a, b, c = 1, True, "test"      # multiple value assignment 
print(a, b, c)                 # -> 1 True 'test'

a, b = b, a                    # swap the values of two variables
print(a, b)                    # -> True 1

a, *b = (1, 2, 3, 4, 5)        # a takes the first, b takes a list of all others
print(a)                       # -> 1
print(b)                       # -> [2, 3, 4, 5]

*a, b, c = 1, 2                # c takes the last, b the second last, a takes all extra, which are in this case no elements at all
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

The walrus operator `:=` does the assignment and returns the value for further use. This can be helpful to reduce code duplication, especially with conditions or loops. The walrus operator can also be combined with augmented assignment.

```python
# Without Walrus Operator
value = input("Enter x to stop the loop: ")
while value != "x":
    print("Inside while loop with input:", value)
    value = input("Enter x to stop the loop: ")
print("loop finished")

# With Walrus Operator
while (value := input("Enter x to stop the loop: ")) != "x":
# this will take input, assign it to the variable value, and also return it to also be used in for value != "x"
    print("Inside while loop with input:", value)
print("loop finished")
```

# Arithmetic Operators

You probably already know most arithmetic operators from mathematics. With number datatypes like `int`, `float`, or `complex` they will work the same as you expect from mathematics. 

| Name                        | Operator | Syntax   | Example                                        |
| --------------------------- | -------- | -------- | ---------------------------------------------- |
| Addition or Concatenation   | `+`      | `a + b`  | `3 + 2 = 5`, `"Hello" + "World" = "HelloWorld` |
| Subtraction                 | `-`      | `a - b`  | `5.5 - 2 = 3.5`                                |
| Multiplication or Repeating | `*`      | `a * b`  | `-1.2 * 3 = -3.6`, `4 * "Hi" = "HiHiHiHi"`     |
| Division                    | `/`      | `a / b`  | `7 / 2 = 3.5`                                  |
| Floor Division              | `//`     | `a // b` | `7 // 2 = 3`                                   |
| Modulus/Remainder           | `%`      | `a % b`  | `7 % 2 = 1`                                    |
| Exponentiation (Power)      | `**`     | `a ** b` | `3 ** 2 = 9`                                   |

Exponentiation also works with floats, and fractional exponents can be used to calculate roots. So same as in mathematics a square root is
$\sqrt{a} = a^{\frac{1}{2}}$ or in general $\sqrt[n]{a^m} = a^{\frac{m}{n}}$.
## Division Operators
Python actually has three different operators related to division. The true division `/` will give you an accurate division result that is always a float number. The floor division `//` will return the result of doing the division and then **rounding down** to the next lowest whole number. The modulo `%` will return the **remainder** when doing a whole number division. 

```python
print(f"The result of dividing 13 by 5 is {13/5}")                     # The result of dividing 13 by 5 is 2.6
print(f"This means that 5 fully fits into 12 {13//5} times")          # This means that 5 fully fits into 12 2 times
print(f"When fitting 5 into 13, there will be a remainder of {13%5}") # When fitting 5 into 13, there will be a remainder of 3
```

> [!todo]- less exam relevant
> Less exam relevant, but still good/helpful to know.

One common use case for the Modulus is to check divisibility by checking if the remainder is 0. It can also be used to separate parts of a number. You can also think of the modulo in terms of a circle. For example, working with modulo 360 means `0° = 360° = 720°`...

```python
print(0%2, 1%2, 2%2, 3%2, 4%2, 5%2, 6%2, 7%2) # -> 0 1 0 1 0 1 0 1
print(12%7, 73%7, 49%7, 111%7, 14%7, 71414%7) # -> 5 3 0 6 0 0
print(3%10, 16%10, 211%10, 9873%10, 1357%100) # -> 3 6 1 3 57
print((1357//100)%10, (123456789//1000)%1000) # -> 3 456
print(10%360, 370%360, 730%360, 3610%360)     # -> 10 10 10 10
```

Mathematically speaking you can also calculate/understand the modulo as `a % b = a - b*(a//b)`. 

## Result Datatype
The [[5 Datatype|datatype]] of the result of an operation only depends on the datatypes or the two operands. 

Addition `+`, Subtraction `-`, Multiplication `*`, Floor Division `//`, Modulus `%` and Exponentiation `**` will return an integer if both of the operands are [[5 Datatype#Integer|integers]]. If one of them is [[5 Datatype#Complex|complex]] the result is complex. Otherwise, if one of them is a [[5 Datatype#Float|float]], the result will be float. 

The true Division `/` will always return a [[5 Datatype#Float|float]]. If one of the operands is [[5 Datatype#Complex|complex]], it will return complex. 

```python
a = 3
b = 1.5
c = 2 - 1j
print(a + b)      # -> 4.5
print(b - c)      # -> (-0.5+1j)
print(b * c)      # -> (3-1.5j)
print(a / a)      # -> 1.0
print(5.9 // 2)   # -> 2.0
```

When using operators with collections the result datatype is the same as the datatype of the collection you use.
## Collection Usage
The operators `+` and `*` can also be used with [[5 Datatype#Collection Datatypes|sequence datatypes]]. The `+` operator is used to concatenate / combine two strings, lists, or tuples of the **same** datatype.

```python
print("Hello" + " " + "World")      # -> Hello World
print([1, 2] + [3, 4])              # -> [1, 2, 3, 4]
print((1, 2) + (3, (True, "Test"))) # -> (1, 2, 3, (True, 'Test'))
print("Hello" + [1, 2])             # ERROR because they have different datatypes
```

> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

The `*` operator is used to repeat a string, list, or tuple multiple times. You have to give the sequence you want to repeat and how often you want to repeat as a positive integer.

```python
print(3 * "Hello") # -> HelloHelloHello
print([0] * 10)    # -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
print((1,2,3) * 2) # -> (1, 2, 3, 1, 2, 3)
```

# Relational/Comparison Operators
Relational Operators always compare two values and return a [[5 Datatype#Boolean|boolean]].

| Name             | Operator | Example  | Explanation                                     | Opposite |
| ---------------- | -------- | -------- | ----------------------------------------------- | -------- |
| Equal            | `==`     | `a == b` | True if `a` and `b` have the same value.        | `!=`     |
| Not Equal        | `!=`     | `a != b` | True if `a` and `b` do not have the same value. | `==`     |
| Greater Than     | `>`      | `a > b`  | True if `a` is greater than `b`.                | `<=`     |
| Less Than        | `<`      | `a < b`  | True if `a` is less than `b`.                   | `>=`     |
| Greater or Equal | `>=`     | `a >= b` | True if `a` is greater than or equal to `b`.    | `<`      |
| Less or Equal    | `<=`     | `a <= b` | True if `a` is less than or equal to `b`.       | `>`      |
If you look at the logic, you can see that there is an exact opposite (`not` operator) version of each comparison.

## (In-)Equality
Equality `==` and Inequality `!=` are exact opposites and work with all datatypes. The Equal operator checks if two values are the same. Comparing two number datatypes will ignore datatype differences and implicitly convert. When comparing a boolean to a number `True == 1` and `False == 0`.

```python
print(1 == 2)           # -> False
print(1 == 1.0)         # -> True
print(1 == 1.0000001)   # -> False
print(0 == 0j)          # -> True
print(2 == 2-1j)        # -> False
print(0.3 == 0.3+0j)    # -> True
print(True == 1.0)      # -> True
print(True != False)    # -> True
print([1, 2] == (1, 2)) # -> False
print("test" != "Test") # -> True
```

## Greater/Less Than
Check if one value is greater than `>` or smaller than `>` a different one. Primarily used to compare integer or float numbers, which are compatible with each other. If an `=` is included (`>=` or `<=`), having two equal values will also return `True`. 

```python
print(1 > 1)     # -> False
print(1 >= 1)    # -> True
print(1 < 1.2)   # -> True
print(-1 > -2.5) # -> True
print(1 >= 1.0)  # -> True
print(1 <= 1.0)  # -> True
```

> [!todo]- not exam relevant
> Not exam relevant, advanced and rarely used.

These operators can also be used with the [[5 Datatype#Collection Datatypes|sequence datatypes]] string, list, and tuple. Both operands must be of the same datatype. This will check the operation for all pairs of elements one by one. So as soon as there is a pair of elements that do not have the same value it will result in a total result of either `True` or `False`. If they have different lengths but the element pairs are all equal, the shorter sequence is considered smaller.

```python
print([1] < [2])                  # because 1<2 -> True
print([1, 3] < [1, 2])            # because 3<2 -> False
print([1, 0.5, 9] < [1, 1, 0])    # because 0.5<1 -> True
print([1, 2, 3] < [1, 2, 3])      # because equal -> False
print([1, 2, 3] <= [1, 2, 3])     # because equal -> True
print([1, 2, 3] < [1, 2, 3, -99]) # because list 1 is shorter and the common elements are the same -> True
print("a" < "b")                  # -> True
print("computer" < "compare")     # because "....u..." < "....a..." -> False
```

## Chained Comparison
> [!todo]- not exam relevant
> Not exam relevant, basic usage is good to know, advanced versions are rarely used.

Python allows you to chain comparisons together. This will behave the same way as having an `and` between the individual operations. For example `a < b == c >= d` is the same as `a<b and b==c and c>=d`. The easiest use case is to check if a number is between two others.

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

As long the operands are boolean, the result will also be boolean. However in Python logical operators also work with operands that are not boolean. They will keep their general behavior and `not` will always return a boolean. The `and` operator stops as soon as it encounters a [[5 Datatype#Truthy and Falsy|Falsy]] value and returns it. If all values are [[5 Datatype#Truthy and Falsy|Truthy]], it returns the last operand. The `or` operator stops as soon as it encounters a Truthy value and returns it. If all values are Falsy, it returns the last operand.

```python
print(0.0 and 1)                    # -> 0.0
print(0 or 0.0 or "" or "Default")  # -> Default
print(input() or "Default")
print(1 and 2 and 3)                # -> 3
print((5 or 0) and ("" or "World")) # -> World
```

# Collection Operators
[[5 Datatype#Indexing|Indexing]] and [[5 Datatype#Slicing|Slicing]] are explained in detail on the datatypes page.

## Membership Checking
The operator `in` is used to check if a value/element exists in a collection. It always returns a [[5 Datatype#Boolean|boolean]] and uses the syntax `value in collection`. So basically it checks if any of the elements in the collection is [[#(In-)Equality|equal]] to the value.

```python
print(1 in [0, 1, 2])                  # -> True
print(3 in (0, 1, 2))                  # -> False
print("good" in {"bad", "ok", "good"}) # -> True
print(0.0 in [0, 1, 2, 3])             # -> True
print(0.0+0j in [0, 1, 2, 3])          # -> True
print(False in [0, 1, 2, 3])           # -> True
print((1, 2) in (1, 2, 3 , 4))         # -> False
print(3 in [(1,2), (3,4), (5,6)])      # -> False
print([3,4] in [(1,2), (3,4), (5,6)])  # -> False
print((3,4) in [(1,2), (3,4), (5,6)])  # -> True
```

This operator can be used with a [[5 Datatype#Dictionary|dictionary]] to check if a specific **key** exists in the dictionary. If you want to check if a value exists in a dictionary you have to use the built-in method `.values()`.

```python
data = {"name": "Alice", "age": 25, "city": "New York", 1: "test"}
print("name" in data)           # -> True
print(1 in data)                # -> True
print("Alice" in data)          # -> False
print("Alice" in data.values()) # -> True
```

When using this operator with a [[5 Datatype#String|string]] it checks if the value is a substring of the whole string.

```python
print("d" in "andreas")                 # -> True
print("word" in "check for whole word") # -> True
print("ork" in "This also works")       # -> True
print("IT" in "capitalization matters") # -> False
print("IT" in "CAPITALIZATION MATTERS") # -> True
```

You can also check if a value is not in a collection using the syntax `not (value in collection)` or `value not in collection`.


> [!quote]- Additional not exam relevant topics for later
> 
> Set Operators 
> 
> Dictionary Operators 
> 
> Collection Unpacking 
> 
> Bitwise Operators


# Precedence
Operator precedence determines the order in which operators are evaluated. If two have the same precedence python works from left to right. This is a generalization of the mathematical order of operations PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction).

| Operator                         | Description                                           |
| -------------------------------- | ----------------------------------------------------- |
| `()`                             | Parentheses (used to group expressions)               |
| `**`                             | Exponentiation                                        |
| `+x`, `-x`, `~x`                 | Unary plus, Unary minus, Bitwise NOT                  |
| `*`, `/`, `//`, `%`              | Multiplication, Division, Floor division, Modulus     |
| `+`, `-`                         | Addition, Subtraction                                 |
| `<<`, `>>`                       | Bitwise left shift, Bitwise right shift               |
| `&`                              | Bitwise AND                                           |
| `^`                              | Bitwise XOR                                           |
| \|                               | Bitwise OR                                            |
| `==`, `!=`, `>`, `<`, `>=`, `<=` | Comparison operators                                  |
| `is`, `is not`, `in`, `not in`   | Identity and membership tests                         |
| `not`                            | Logical NOT                                           |
| `and`                            | Logical AND                                           |
| `or`                             | Logical OR                                            |
| `if` ... `else`                  | [[2 Conditions#Ternary Operator\|Ternary Operator]] |
| `=` , `+=`, `-=`, etc.           | Assignment and augmented assignment operators         |
| `lambda`                         | Lambda function declaration                           |



# Questions
- [ ] Explain assignment in your own words.
	- [ ] Explain augmented assignment in your own words.
	- [ ] Explain multiple value assignments in your own words.
	- [ ] Explain the walrus operator in your own words.
- [ ] Explain arithmetic operators in your own words.
	- [ ] Explain the difference between `/`, `//`, and `%` in detail.
	- [ ] Explain what datatype the result of an operation will be.
	- [ ] Explain the arithmetic operators with sequence datatypes in your own words.
	- [ ] Compare using concatenation vs. formatted strings to put together a multiple part string with different variables including a practical example.
- [ ] Explain comparison operators in your own words.
	- [ ] Explain `==` and `!=` in detail. What is the difference between `==` and `is`?
	- [ ] Explain greater than and less than in detail.
	- [ ] Explain chained comparisons in your own words.
- [ ] Explain logical operators in your own words.
	- [ ] Explain logical operators with operands that are not boolean in detail 
- [ ] The membership operator `in` in your own words.
	- [ ] What is special when using the membership operator `in` with a `string`?
- [ ] Explain operator precedence in detail in your own words.
	- [ ] Show operator precedence by creating and explaining practical examples.