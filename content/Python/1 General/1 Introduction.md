---
title: 1 Introduction
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
test2
# What is Python?

Python is a popular, high-level programming language created by **Guido van Rossum** and first released in **1991**. It emphasizes **readability** and uses an **indentation-based structure** to make code clean and easy to follow. Today, Python is widely used for a large variety of applications.

# Benefits of Python

- **Easy to Learn**: Its syntax almost resembles plain English.
- **Versatile**: Works for console, web development, data analysis, automation, AI, and more.
- **Large Community**: Extensive libraries and frameworks are available for almost any task.
- **Cross-Platform**: Python works on Windows, macOS, Linux, and more.

# Drawbacks of Python

- **Speed**: Python is slower and less efficient compared to languages like C++ because it’s interpreted.
- **Runtime Errors**: Python is dynamically typed, leading to potential runtime errors.

# Compiled Vs Interpreted Languages

- **Compiled Languages**: Code is translated into machine code before execution (e.g., C, C++).
- **Interpreted Languages**: Code is executed line-by-line by an interpreter (e.g., Python, JavaScript).

# Usecases/Applications

Python is used in a wide range of applications:

- **Web Development**: Popular frameworks like Django and Flask make web development faster and easier.
- **Data Science & Analytics**: Libraries such as pandas, NumPy, and Matplotlib are widely used for data manipulation and visualization.
- **Machine Learning & AI**: Python’s simplicity makes it a go-to language for machine learning and artificial intelligence applications, with libraries like TensorFlow and scikit-learn.
- **Automation**: Python is commonly used to write scripts for automating repetitive tasks, such as file management and web scraping.

# Syntax

Python's syntax is minimal and highly readable. Here are key points to remember:

- **`print()`** is used for [[2 Output|output]], **`input()`** for [[3 Input|input]], and **`#`** for line [[8 Comments|comments]]
- Python supports all basic (mathematical) **[[6 Operators|Operators]]** and many more
- **[[5 Variables|Variables]]**: Variables will automatically get a [[4 Datatypes|datatype]] that can change however you like
- **Indentation**: Python relies on indentation to define code blocks, unlike many other languages that use braces `{}`. Proper indentation is required, or the code will throw an error. A colon : is used to indicate the start of an indented block, such as in if statements and loops.

```python
# A simple comment
print("Hello, World!")  # This prints a message to the console

# Variables don’t need explicit types
x = 10  # Integer
y = 3.14  # Float
name = "Python"  # String

# Indentation is used for blocks
if x > 5:
    print("x is greater than 5")
```

# Run Python Online
The are websites that easily allow you to run python code online. If you want to run python online you have to be careful that what you want to do works and behaves similar to actually running the code on your machine. Many online compilers struggle with error messages, debugging, input, imports, ....

Below you can find a few websites that overall do a good job. It can be very helpful to have one of them open on the side while reading this tutorial, so that you can always copy, paste, run, edit, ... code from the notes to understand it better.
## Code Chef
<https://www.codechef.com/blogs/how-to-use-code-visualizer>
This website has the advantage of also including a visualizer. this enables you to run code line by line, see variables and control flow and understand it much easier. 
[Code Chef Visualizer Tutorial](https://www.codechef.com/blogs/how-to-use-code-visualizer)
The drawback of this is that it will run the code on a separate machine so you have to provide all input values before running
## Online GDB
<https://www.onlinegdb.com/online_python_compiler>
This website has the advantage of being very similar to a real command line execution. Inputs are in real time and just like in the command line. There is also Debugger available in case you want/have to use it.
[Online GDB Debugger Tutorial](https://www.codechef.com/blogs/how-to-use-code-visualizer)

## Google Colab
<https://colab.research.google.com/>
Google Colab is a powerful online tool for running Jupyter[^1] Notebooks online. It's a great fit for bigger projects and cloud usage of Jupyter[^1].
# Python Installation
Ev

# Visual Studio Code Installation


# Sources

[^1]: Project Jupyter is a combination of Python code and formatted Text for Documentation, it's great for explaining code, visualizations, ...