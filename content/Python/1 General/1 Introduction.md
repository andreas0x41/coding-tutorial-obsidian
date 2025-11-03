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
Python's syntax is minimal and highly readable. In general Python code will run line by line from top to bottom. More complex behavior is possible using [[Python/2 Control Flow/1 Control Flow|Control Flow]]. 
- **`print()`** is used for [[Python/1 General/2 Output|output]], **`input()`** for [[Python/1 General/3 Input|input]], and **`#`** for line [[Python/1 General/4 Comment|comments]]
- Python supports all basic (mathematical) [[Python/1 General/7 Operator|Operators]] and many more
- [[Python/1 General/6 Variable|Variables]] automatically get a [[Python/1 General/5 Datatype|datatype]] that can change at any time
- Python is **case sensitive**. So it is very significant if a character is upper or lower case. For example `print()` is not the same as `Print()`
- **Indentation**: Python uses indentation to define code blocks, many other languages use curly brackets `{}` instead. Proper indentation is required, otherwise there will be errors. A colon `:` is used to indicate the start of a new block, e.g. [[Python/2 Control Flow/2 Conditions|conditions]], [[Python/2 Control Flow/3 While Loop|loops]], [[Python/2 Control Flow/5 Function|functions]], ...

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

# Run Python Online
The are websites that easily allow you to run Python code online. If you want to run Python online you have to be careful that what you want to do works and behaves similarly to actually running the code on your machine. Many online compilers struggle with error messages, debugging, input, imports, multiple files, (web-)applications, ....

Below you can find a few websites that overall do a good job. It can be very helpful to have one of them open on the side while reading this tutorial so that you can always copy, paste, run, edit, ... code from the notes to understand it better.

## Code Chef
<https://www.codechef.com/blogs/how-to-use-code-visualizer>
This website has the advantage of also including a visualizer. This enables you to run code line by line, see variables and control flow, and understand it much more easily.

[Code Chef Visualizer Tutorial](https://www.codechef.com/blogs/how-to-use-code-visualizer)
The drawback of this is that it will run the code on an external server and you have to provide all input values before running.

## Online GDB
<https://www.onlinegdb.com/online_python_compiler>
This website has the advantage of being similar to a real command line execution. Inputs are in real-time and just like in the command line. There is also a Debugger available in case you want/have to use it.

[Online GDB Debugger Tutorial](https://www.codechef.com/blogs/how-to-use-code-visualizer)

## Google Colab
<https://colab.research.google.com/>
Google Colab is a powerful online tool for running Python and Jupyter Notebooks[^1] online. It's a great fit for bigger projects and cloud usage of Jupyter. It also supports collaboration and GPUs for use cases like machine learning.

# Python Installation
Even though there are good online tools, running Python on your own machine still has many benefits. To install Python, go to the [official website](https://www.python.org/downloads/), download, execute and follow the instructions. Please don't forget to click the checkbox "Add to PATH[^2]" at the very start of the installation.

# Visual Studio Code Installation
In theory, you can use any text editor to write your code. In practice, it is much easier and better to use a specialized Code Editor usually called IDE (Integrated Development Environment). They have a lot of additional features like syntax highlighting, auto suggestions and completions, documentation, debugging, combining multiple parts of the coding workflow, search and replace, keyboard shortcuts, and version management, ... There are a lot of options, also depending on coding language and application. One of the best and most versatile options is Visual Studio Code.

To install it just go to the [official website](https://code.visualstudio.com/download), download, execute, and follow the instructions. To understand VSCode you can read the [documentation](https://code.visualstudio.com/docs) or watch one of the many videos (e.g. [Video 1](https://www.youtube.com/watch?v=KMxo3T_MTvY), [Video 2](https://www.youtube.com/watch?v=6i3e-j3wSf0)). To properly use Python you will need to install the "Python" Extensions, which you can do in the VSCode Extensions tab.

Understanding and using your IDE well can make your life easier and make you much faster and more efficient when writing code. There are also a lot of Extensions that extend the features of VSCode.

# Questions
- [ ] What is a programming language?
- [ ] What is Python?
- [ ] What are the benefits of Python?
- [ ] What are the drawbacks of Python?
- [ ] Explain compiled vs interpreted languages in your own words. What type is Python?
- [ ] What are the use cases of Python?
- [ ] What are the general principles of the Python syntax?

[^1]: Project Jupyter is a combination of Python code and Markdown (formatted Text) for Documentation, it's great for code with explanations, visualizations, individual blocks, ...
[^2]: PATH is basically a system internal variable that stores all things that can be accessed by default when running code from the command line. If you don't add Python to PATH you might not be able to run it properly or always have to tell exactly where your Python installation is on your computer.