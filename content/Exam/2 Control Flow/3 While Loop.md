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
A `while` loop is used to repeat a block of code as long as a specified condition is [[content/Exam/1 General/5 Datatype#Truthy and Falsy|truthy]].
# Summary
- **Basic Usage**: Similar to an [[content/Exam/2 Control Flow/2 Conditions|if condition]] but runs repeatedly. The condition value should eventually change to avoid infinite loops.
- **Break**: Exits the loop immediately, regardless of the condition.
- **Continue**: Skips the rest of the current iteration, goes back to the top of the loop, and checks the condition again.

# Basic
A `while` loop is similar to a [[content/Exam/2 Control Flow/2 Conditions|if statement]] and also has a [[content/Exam/1 General/5 Datatype#Boolean|boolean]] condition. But instead of executing the code block inside once, it is executed repeatedly as long as the condition is [[content/Exam/1 General/5 Datatype#Truthy and Falsy|truthy]].

```python
while condition:
    # Code to execute while the condition is True
```

If the condition stays [[content/Exam/1 General/5 Datatype#Truthy and Falsy|truthy]], and there is no other reason for exiting, the loop will run infinitely. So to control the while loop, the condition has to change over time.

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

You could explain what is happening similar to this. Create a new variable called "count" of type integer and with the value 0. The condition of the while loop is "count < 5". Run code inside while because "0 < 5" is `True`. Inside the loop we output the current value of count, in this case "Count is 0". Then we increase the value of count by one, in this case to 1. Again we check the condition and go inside the loop, because "1 < 5". We print the message "Count is 1" on a new line and increase count by one. This will be repeated until count has a value of 5. So the last printed message is "Count is 4", then we increase count to 5. Then we stop repeating, because `5 < 5` is `False`, and go after the loop.

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
The [[content/Exam/1 General/8 Keyword|keyword]] `break` is used to immediately exit the loop, independent from the condition. If you are inside a nested loop, it will only exit the inner loop. 

```python
count = 0
while True:
	if count >= 5:
		break
	print(f"Count is {count}")
	count += 1
```

This might seem like an infinite loop at first because the condition is always `True`. But actually, the break statement will exit the loop as soon as the count reaches 5 and because of that, the output will be exactly the same as in the example above.

```output
Count is 0
Count is 1
Count is 2
Count is 3
Count is 4
```

You should usually handle the main behavior of the loop with the condition and not overuse `break`.
# Continue
The [[content/Exam/1 General/8 Keyword|keyword]] `continue` is used to skip forward to the next iteration of the loop. So it immediately goes back to the top and checks the condition again. If you are inside a nested loop, it will only skip ahead the inner loop.

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

In this example, `continue` will also skip the `count+1`. So without the checking if `i<10`, this would be an infinite loop. For each output, you can see the lines that will be executed in this iteration. So you can see that as soon as count reaches 3 it goes into the `if` then runs `continue`, and because of that goes back to the top without incrementing `count`.

```output
start while loop               # lines: 1, 2, 3
processing 1                   # lines: 4, 5, 6, 9, 10
processing 2                   # lines: 4, 5, 6, 9, 10
skipping 3                     # lines: 4, 5, 6, 7, 8
skipping 3                     # lines: 4, 5, 6, 7, 8
skipping 3                     # lines: 4, 5, 6, 7, 8
skipping 3                     # lines: 4, 5, 6, 7, 8
skipping 3                     # lines: 4, 5, 6, 7, 8
skipping 3                     # lines: 4, 5, 6, 7, 8
skipping 3                     # lines: 4, 5, 6, 7, 8
end with count=3 and i=10      # lines: 4, 10
```

# Questions
- [ ] Explain `while` in your own words.
- [ ] What differences and similarities between an `if` statement and a `while` loop?
- [ ] Explain `break` in your own words.
- [ ] Explain `continue` in your own words.
- [ ] What is an infinite loop? How can an infinite loop happen?
- [ ] Explain the following code and its output.  

```python
count = 5
while count > -3:
    print(count)
    count -= 1
```

- [ ] How can a `while` loop be used to sum all even numbers from 1 to 100? Explain and write the code.