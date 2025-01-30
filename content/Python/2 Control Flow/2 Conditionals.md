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


# Elif


# Combined Usage




# Ternary Operator
> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

The ternary operator is a short way to write a `if-else` statement, that returns a value. The syntax for this is `valueIfTrue if boolean else valueIfFalse`. This is often used to assign a value to a [[6 Variable|variable]] based on a condition. It does not support `elif` but you can use nesting to archive the same functionality.