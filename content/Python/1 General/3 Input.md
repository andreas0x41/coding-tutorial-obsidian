---
title: 3 Input
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
  - Basics
---
# Summary
- **`input()`:** Waits for user input and always returns a string.
- **Saving Input:** Store the returned value in a variable for later use.
- **Prompting:** Pass a string to `input()` to display a prompt before input.

# Simple Input
Python has one primary function for console input called `input()`. It will wait for the user to input something on the console. As soon as the user presses `Enter` the function will return the value inputed by the user and continue with the program. Input will **always** return the value as as string.

```python
input()
```

You can save the value returned by `input` in a [[5 Variables|variable]] to use it later/multiple time.

```python
x = input()
print("The user inputed the value:", x) # -> The user has inputed the value {?}
```

You can also use the value returned by `input()` directly.

```python
print("The user inputed the value:", input()) # -> The user has inputed the value {?}
```

# Input with Prompt
If you want, you can give the `input` function one argument. It will this value directly before taking input. This is usually used to ask and inform the user what input is expected

```python
x = input("Please input a number") # -> Please input a number
print("The user inputed the number:", x) # -> The user has inputed the number {?}
```

<script src="https://giscus.app/client.js" data-repo="ADP13805/coding-tutorial-obsidian" data-repo-id="R_kgDONo2oyg" data-category="Announcements" data-category-id="DIC_kwDONo2oys4CmK9U" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="preferred_color_scheme" data-lang="en" data-loading="lazy" crossorigin="anonymous" async> </script>
