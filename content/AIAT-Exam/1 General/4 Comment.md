---
title: 1.4 Comments
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
Comments are for the Programmers and are completely ignored by the computer. They are usually used to document and explain code. 

You should explain important logical steps, code blocks, and decisions. Writing one irrelevant comment per line is just as bad as having no comments at all, so you have to find a balance. Do not only write comments if you need them right now, but also write comments if someone else needs them, or you need them when looking at code a year later.

# Singleline Comments
Everything in a line after a hash `#` is part of the single-line comment and will be ignored by the program.

```python
# This is some example code
print("Hello") # This line will print the message 'Hello'
# print(1) This will not do anything because the print is after the comment
print(1)       # new line, so print is working again and outputs 1
```

```output
Hello
1
```

# Questions
- [ ] Explain comments in your own words.
- [ ] What is the purpose of comments?
- [ ] When should you write a comment?
- [ ] Explain single line comments.