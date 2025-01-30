---
title: 2.2 Condition
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Python
  - ControlFlow
  - SDML
  - AECD
  - GEES
---
Conditionals allow code to make decisions. Each individual decision is based on one [[5 Datatype#Boolean|boolean]] so the only two options are "run some code" or "don't run the code". The boolean is usually created using a series of [[7 Operator#Relational/Comparison Operators|comparison]] and [[7 Operator#Logical Operators|logical]] operators. 

# If
The `if` statement checks a condition. If the condition is [[5 Datatype#Truthy and Falsy|truthy]], the code block inside is executed. If the condition is [[5 Datatype#Truthy and Falsy|falsy]], the code block inside is ignored/skipped. 

```python
if condition:
	# code inside executed if the condition is true
	# this is still inside 
# this is outside again, because of the indentation 
```

Don't forget about the colon `:` after the condition and the correct indentation of the code inside. You often see parentheses `()` around the condition, however in python they are not necessary and don't change anything. 

```python
x = 5
if(x > 10):
	print("x is greater than 10")
	print("still inside")
print("end of first if")

if x:
	print("x is truthy")
	print("still inside")
print("end of second if")
```

```output
end of first if
x is truthy
still inside
end of second if
```

# Else
The `else` statement is always immediately after the end of an `if` or `elif` statement and does not need it's own condition. It executes only when none of the `if` or `elif` statements before it is executed. The `else` statement has to be on the same indentation level as its `if`/`elif` statement.

```python
x = 12
y = 3

print("start condition 1")
if x > 10:
	print("x is greater than 10")
else:
	print("x is smaller than or equal to 10")

print("\nstart condition 2")
if y > 10:
	print("y is greater than 10")
else:
	print("y is smaller than or equal to 10")

print("\nstart condition 3")
if x < 10:
	print("x is smaller than 10")
else: 
	print("x is greater than 10")
	if x > y:
		print("x is greater than y")
	else:
		print("y is greater than or equal to x")
```

```output
start condition 1
x is greater than 10

start condition 2
y is smaller than or equal to 10

start condition 3
x is greater than 10
x is greater than y
```

# Elif
The `elif` is a short alternative to nesting an `if` inside the `else` block. Therefor an `elif` condition is only checked if all previous `if` and `elif` statements were `False`. You can have as many `elif` statements as you want, which allows you to easily check multiple conditions in sequence. The following two conditionals are exactly the same, but the version using `elif` is much easier to write and read.

```python
x = 15

print("nested if-else statements")
if x%2 == 0:
	print("x is divisibel by 2")
else:
	if x%3 == 0:
		print("x is divisibel by 3")
	else:
		if x%5 == 0:
			print("x is divisibel by 5")

print("\nelif statements")
if x%2 == 0:
	print("x is divisibel by 2")
elif x%3 == 0:
	print("x is divisibel by 3")
elif x%5 == 0:
	print("x is divisibel by 5")
```

```output
nested if-else statements
x is divisibel by 3

elif statements
x is divisibel by 3
```

# Combined Usage
A valid conditional statement consist of exactly one `if` then 0 - infinite `elif` and then 0 - 1 `else`. 



# Ternary Operator
> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

The ternary operator is a short way to write a `if-else` statement, that returns a value. The syntax for this is `valueIfTrue if boolean else valueIfFalse`. This is often used to assign a value to a [[6 Variable|variable]] based on a condition. It does not support `elif` but you can use nesting to archive the same functionality.