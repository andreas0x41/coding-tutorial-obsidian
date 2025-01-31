---
title: 2.3 While Loop
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
A `while` loop is used to repeat a block of code as long as a specified condition is `True`.
# Summary
- **Basic Usage**: Similar to an [[2 Conditionals|if statement]] but runs repeatedly. The condition must eventually change to avoid infinite loops.
- **Break**: Exits the loop immediately, regardless of the condition.
- **Continue**: Skips the rest of the current iteration and moves to the next.
- **Else**: Runs only if the loop ends normally (not via `break`).

# Basic
A `while` loop is similar to a [[2 Conditionals|if statement]] and also has a [[5 Datatype#Boolean|boolean]] condition. But instead of executing the code block inside once, it is executed repeatedly as long as the condition is `True`.

```python
while condition:
    # Code to execute while the condition is True
```

If the condition is always `True`, and there is no other reason for exiting, the loop will run infinitely. So to control the while loop, the condition has to change over time.

```python
count = 0
while count < 5:
    print(f"Count is {count}")
    count += 1
```

```output
Count is 0
Count is 1
Count is 2
Count is 3
Count is 4
```

You could explain what is happening similar to this. Create a new variable called "count" of type integer and with the value 0. The condition of the while loop is "count < 5". Run code inside while because "0 < 5" is `True`. Inside the loop we output the current value of count, in this case "Count is 0". Then we increase the value of count by one, in this case to 1. Again we check the condition and go inside the loop, because "1 < 5". We print the message "Count is 1" on a new line and increase count by one. This will be repeated until count has a value of 5. So the last printed message is "Count is 4", then we increase count to 5 and then we stop repeating because `5 < 5` is `False`.

```python
total = 0
number = 1
while number <= 10:
	total += number
	print(f"current number: {number} running sum: {total}")
	number += 1
print(f"The sum of all numbers from 1 to 10 is {total}")
```

```output
current number: 1 running sum: 1
current number: 2 running sum: 3
current number: 3 running sum: 6
current number: 4 running sum: 10
current number: 5 running sum: 15
current number: 6 running sum: 21
current number: 7 running sum: 28
current number: 8 running sum: 36
current number: 9 running sum: 45
current number: 10 running sum: 55
The sum of all numbers from 1 to 10 is 55
```

# Break
The [[8 Keyword|keyword]] `break` is used to immediately exit the loop, independent from the condition. If you are inside a nested loop, it will only exit the inner loop. 

```python
count = 0
while True:
	if count >= 5:
		break
	print(f"Count is {count}")
	count += 1
```

This might seem like an infinite loop at first because the condition is always `True`. But actually the break statement will exit the loop as soon as count reaches 5 and because of that, the output will be exactly the same as in the last example.

```output
Count is 0
Count is 1
Count is 2
Count is 3
Count is 4
```

It's good not to overuse `break` and instead do the main behaviour with the condition.
# Continue
The [[8 Keyword|keyword]] `continue` is used to skip forward to the next iteration of the loop. But the loop condition is always checked, `continue` just skips the rest of the current iteration. If you are inside a nested loop, it will only skip ahead the inner loop.

```python
count = 1
i = 1
print("start while loop")
while (count < 5) and (i < 10):
    i += 1
    if count % 3 == 0:
        print(f"skipping {count}")
        continue
    print(f"processing {count}")
    count += 1
print(f"end with count={count} and i={i}")
```

In this example, `continue` will also skip the "count+1". So without the check of "i<10", this would be an infinite loop. Integer variables count=1 and i=1. For each output i listed the lines that will be executed in this iteration. So you can see that as soon as count reaches 3 it goes into the `if` then runs `continue`, and because of that goes back to the top without incrementing `count`.

```output
start while loop               # lines: 1, 2
processing 1                   # lines: 3, 4, 5, 8, 9
processing 2                   # lines: 3, 4, 5, 8, 9
skipping 3                     # lines: 3, 4, 5, 6, 7
skipping 3                     # lines: 3, 4, 5, 6, 7
skipping 3                     # lines: 3, 4, 5, 6, 7
skipping 3                     # lines: 3, 4, 5, 6, 7
skipping 3                     # lines: 3, 4, 5, 6, 7
skipping 3                     # lines: 3, 4, 5, 6, 7
skipping 3                     # lines: 3, 4, 5, 6, 7
end with count=3 and i=10      # lines: 3, 10
```

# Else
> [!todo]- not exam relevant
> Not exam relevant, very rarely used.

The [[8 Keyword|keyword]] `else` can be used with a while loop. The code inside will only execute if the loop ends normally after all the iterations. If the loop stops because of a `break`, the code inside `else` will be ignored.. 

```python
num = int(input("Plese input a integer number: "))
i = 2

while i < num:
    if num % i == 0:
        print(f"{num} is not a prime number because it is divisible by {i}")
        break
    i += 1
else:
    print(f"{num} is a prime number")

```

```output
input 5: 5 is a prime number
input 15: 15 is not a prime number because it is divisible by 3
input 29: 29 is a prime number
```

# Questions
- [ ] Explain `while` in your own words.
- [ ] What differences and similarities between an `if` statement and a `while` loop?
- [ ] Explain `break` in your own words.
- [ ] Explain `continue` in your own words.
- [ ] What is an infinite loop? What are the potential reasons for something being an infinite loop?
- [ ] Explain the following code and its output?  

```python
count = 0
while count < 7:
    print(count)
    count += 1
```

- [ ] Explain `else` in combination with a `while` loop in your own words. 
- [ ] How can a `while` loop be used to sum all even numbers from 1 to 100? Explain and write the code.