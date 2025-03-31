---
title: 2.2 Conditionals
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
Conditions allow code to make decisions. Each individual decision is based on one [[5 Datatype#Boolean|boolean]] so the only two options are "run some code" or "don't run the code". The boolean is usually created using a series of [[7 Operator#Relational/Comparison Operators|comparison]] and [[7 Operator#Logical Operators|logical]] operators. 

# Summary
- **If**: Executes a block if the condition is [[5 Datatype#Truthy and Falsy|truthy]].
- **Else**: Follows an `if` or `elif`, executing only if all prior conditions are [[5 Datatype#Truthy and Falsy|falsy]].
- **Elif**: Allows multiple conditions without nesting. The first [[5 Datatype#Truthy and Falsy|truthy]] condition is executed, and the rest are skipped.
- **Combined Usage**: A conditional starts with `if`, can have multiple `elif`, and at most one `else`. Execution stops at the first [[5 Datatype#Truthy and Falsy|truthy]] condition.
- **Ternary Operator**: A short `if-else` expression (`valueIfTrue if condition else valueIfFalse`), useful for assignments.

# If
The `if` statement checks a condition. If the condition is [[5 Datatype#Truthy and Falsy|truthy]], the code block inside is executed. If the condition is [[5 Datatype#Truthy and Falsy|falsy]], the code block inside is ignored/skipped. 

```python
if condition:
	# code inside executed if the condition is true
	# this is still inside 
# this is outside again, because of the indentation 
```

Don't forget about the colon `:` after the condition and the correct indentation of the code inside. You often see parentheses `()` around the condition, however in Python they are not necessary and don't change anything. 

```python
x = 5
if x > 10:
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
The `else` statement is always immediately after the end of an `if` or `elif` statement and does not need it's own condition. It executes only when all the `if` or `elif` conditions before evaluate to `False`. The `else` statement has to be on the same indentation level as its `if`/`elif` statement.

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
	print("x is greater than or equal to 10")
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
The `elif` is a short alternative to nesting an `if` inside the `else` block. Therefore an `elif` condition is only checked if all previous `if` and `elif` statements were `False`. You can have as many `elif` statements as you want, which allows you to easily check multiple conditions in sequence. The following two Conditions are exactly the same, but the version using `elif` is much easier to write and read.

```python
x = 15

print("nested if-else statements")
if x%2 == 0:
	print("x is divisible by 2")
else:
	if x%3 == 0:
		print("x is divisible by 3")
	else:
		if x%5 == 0:
			print("x is divisible by 5")

print("\nelif statements")
if x%2 == 0:
	print("x is divisible by 2")
elif x%3 == 0:
	print("x is divisible by 3")
elif x%5 == 0:
	print("x is divisible by 5")
```

```output
nested if-else statements
x is divisible by 3

elif statements
x is divisible by 3
```

# Combined Usage
A valid conditional statement consists of exactly one `if` then 0 - infinite `elif` and then 0 - 1 `else`. When executing the code the conditions (of the `if` and `elif`) are checked one by one. As soon as one of them evaluates to `True`, the code inside is executed, and afterwards the program will jump to after the conditional statement. If all of them evaluate to `False` the code inside `else` is executed. 

```python
score = 75
print("Your grade is: ", end="")
if score > 88:
    print("A")
    print("great")
elif score > 76:
    print("B")
    print("good")
elif score > 64:
    print("C")
    print("solid")
elif score > 52:
    print("E")
    print("bad")
else:
    print("F")
    print("failed")
print(f"with {score}%")
```

```output
Your grade is: C
solid
with 75%
```

You could explain what is happening similar to this. Create a new variable called "score" of type integer and with the value 75. Output the message "Your grade is: ", but without a "\n" after the print. The first if condition is False because 75 is not greater than 88. Next check the first elif condition, which is also False, because 75 is not greater than 76. Check the next elif condition (line 9), which is True, because 75 is greater than 64. Go inside the elif block and output "C", which will be on the same line as the first message. Then output "solid" on a new line. Go after the conditional statement and output the message "with 75%" on a new line.


# Ternary Operator
> [!todo]- not exam relevant
> Not exam relevant, rarely used, but sometimes really helpful.

The ternary operator is a short way to write a `if-else` statement, that returns a value. The syntax for this is `valueIfTrue if booleanCondition else valueIfFalse`. It does not support `elif` but you can use nesting to archieve the same functionality. This is often used to assign a value to a [[6 Variable|variable]] based on a condition. The following code shows you how to do this using classic `if-else` and the ternary operator.

```python
condition = True

# if-else
if condition:
	x = 10
else:
	x = 0
print(x)

#ternary operator
x = 10 if condition else 0
print(x)


age = 21
student = True

# if-else
message = "your discount is: "
if age < 15:
    message += "child"
elif age<30 and student:
    message += "student"
else:
    message += "none"
print(message)

#ternary operator
message = "your discount is: " + ("child" if age<15 else ("student" if(age<30 and student) else "none"))
print(message)
```

```output
10
10
your discount is: student
your discount is: student
```

# Questions
- [ ] What is the purpose of Conditions in programming?
- [ ] Explain `if` in your own words.
- [ ] Explain `else` in your own words.
- [ ] Explain `elif` in your own words.
- [ ] What is important about the syntax of `if-elif-else`?
- [ ] Can there be an `else` or `elif` without an `if` statement?
- [ ]  When does the execution stop in a chain of `if`, `elif`, and `else`? Explain all possible scenarios.
- [ ]  Rewrite this nested `if-else` using `elif`:

	```python
    if x > 10:
        print("Big")
    else:
        if x > 5:
            print("Medium")
        else:
            print("Small")
    ```

- [ ]  Write an `if-elif-else` statement that prints whether a number is positive, negative, or zero.
- [ ]  Explain the ternary operator in your own words?
- [ ]  How/When/Why is the ternary operator useful?
- [ ]  Can the ternary operator handle multiple conditions? How?
- [ ]  Convert this `if-else` statement into a ternary operator:

	```python
    if age < 18:
        category = "Minor"
    else:
        category = "Adult"
    ```
