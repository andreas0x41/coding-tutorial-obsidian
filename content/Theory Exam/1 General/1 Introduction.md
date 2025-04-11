---
title: 1.1 Introduction
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - ReadFirst
  - Overview
  - Python
  - General
  - SDML
  - AECD
  - GEES
---
# Programming Language
A programming language is used to give instructions to a computer to execute them. You have to use a specific syntax for the computer to understand the instructions. Programming languages are used to create software, automate tasks, build websites, analyze data, control hardware, and more. You need a programming language to communicate with computers. You have to give explicit instructions in a format that can be understood by the computer.

# What is Python?
Python is a popular, high-level programming language created by Guido van Rossum and first released in 1991. It emphasizes readability and uses an indentation-based structure to make code clean and easy to follow. Today, Python is widely used for a large variety of applications.
High-Level means, that your programming instructions are far away from the actual hardware. For example you can do a lot with little text and have to worry less about the specifics of datatypes, appending to list, ...

# Benefits of Python
- **Easy to Learn**: Its syntax can be almost like plain English. Because it's high-level, you rarely have to worry about details like manual memory management.
- **Versatile**: Works for console, web development, data analysis, automation, AI, and more.
- **Large Community**: Extensive libraries and frameworks are available for almost any task.
- **Cross-Platform**: Python works on Windows, macOS, Linux, and more.

# Drawbacks of Python
- **Speed**: Python is slower and less efficient compared to languages like C because it’s high-level and interpreted.
- **Runtime Errors**: Python is dynamically typed, leading to potential runtime errors. Dynamically typed mean the datatype of a variable can change and is not easily predictable. Because of this, it can be hard to find/prevent errors properly in advance, especially in large projects.

# Compiled Vs Interpreted
- **Compiled Languages**: Code is translated into machine code before execution (e.g., C, C++). Potential for better performance and efficiency. Instructions closer to what the machine is actually doing. More manual control of memory and hardware.
- **Interpreted Languages**: Code is executed line-by-line by an interpreter (e.g., Python, JavaScript). Supports very high level code. Often easier to learn and understand. But if you look at details or have a problem, it will get hard again. Fewer hardware like limitations and worries. For example, changing the datatype of a variable, extending a list, ...

# Usecases/Applications
Python is used in a wide range of applications, some of the most common are listed below.
- **Web Development**: Popular frameworks like Django and Flask make web development faster and easier.
- **Data Science & Analytics**: Libraries such as NumPy and Matplotlib are widely used for data manipulation and visualization.
- **Machine Learning & AI**: Python’s simplicity makes it a go-to language for machine learning and artificial intelligence applications, with libraries like TensorFlow.
- **Automation**: Python is commonly used to write scripts for automating repetitive tasks, such as file management, web scraping, ...

# Syntax
Python's syntax is minimal and highly readable. In general Python code will run line by line from top to bottom. More complex behavior is possible using [[content/Theory Exam/2 Control Flow/1 Control Flow|Control Flow]]. 
- **`print()`** is used for [[content/Theory Exam/1 General/2 Output|output]], **`input()`** for [[content/Theory Exam/1 General/3 Input|input]], and **`#`** for line [[content/Theory Exam/1 General/4 Comment|comments]]
- Python supports all basic (mathematical) [[content/Theory Exam/1 General/7 Operator|Operators]] and many more
- [[content/Theory Exam/1 General/6 Variable|Variables]] automatically get a [[content/Theory Exam/1 General/5 Datatype|datatype]] that can change at any time
- Python is **case sensitive**. So it is very significant if a character is upper or lower case. For example `print()` is not the same as `Print()`
- **Indentation**: Python uses indentation to define code blocks, many other languages use curly brackets `{}` instead. Proper indentation is required, otherwise there will be errors. A colon `:` is used to indicate the start of a new block, e.g. [[content/Theory Exam/2 Control Flow/2 Conditions|conditions]], [[content/Theory Exam/2 Control Flow/3 While Loop|loops]], [[content/Theory Exam/2 Control Flow/5 Function|functions]], ...

```python
# A simple comment
print("Hello, World!")  # This prints a message to the console

# Variables don’t need explicit types
x = 10           # Integer
y = 3.14         # Float
name = "Python"  # String

# Colon and Indentation and  is used for blocks
if x > 5:
    print("x is greater than 5")
```

# Questions
- [ ] What is a programming language?
- [ ] What is Python?
- [ ] What are the benefits of Python?
- [ ] What are the drawbacks of Python?
- [ ] Explain compiled vs interpreted languages in your own words. What type is Python?
- [ ] What are the use cases of Python?
- [ ] What are the general principles of the Python syntax?
