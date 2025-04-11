---
title: 1.8 Keywords
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

In Python, **keywords** are reserved words that have a special predefined meaning and cannot be used as identifiers (e.g., variable names, function names). Keywords are the building blocks of Python syntax and structure. 

Most keywords are explained on a different page, so the "Context" column will link to the details.

> [!todo]- partly exam relevant
> The keywords `match`, `case`, `default`, `pass`, `yield`, `nonlocal`, `assert`, `async`, and `await` are not exam relevant. Some of the others are also only partly or for some departments exam relevant.


| Context                                      | Keyword    | Description                                                                                                                                                 |
| -------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[content/Theory Exam/1 General/5 Datatype#Boolean\|Datatype]]             | `False`    | Boolean value representing False.                                                                                                                           |
| [[content/Theory Exam/1 General/5 Datatype#Boolean\|Datatype]]             | `True`     | Boolean value representing True.                                                                                                                            |
| [[content/Theory Exam/1 General/5 Datatype#None\|Datatype]]                | `None`     | Represents the absence of a value or a null value.                                                                                                          |
| [[content/Theory Exam/1 General/7 Operator#Logical Operators\|Operator]]   | `and`      | Logical AND operator. True if all operands are True.                                                                                                        |
| [[content/Theory Exam/1 General/7 Operator#Logical Operators\|Operator]]   | `or`       | Logical OR operator. True if at least one operand is True.                                                                                                  |
| [[content/Theory Exam/1 General/7 Operator#Logical Operators\|Operator]]   | `not`      | Logical NOT operator. Negates a boolean value.                                                                                                              |
| [[content/Theory Exam/1 General/7 Operator#Membership Checking\|Operator]] | `in`       | Checks if an element exists in a sequence or collection. Also used to iterate a variable in a for loop.                                                     |
| [[content/Theory Exam/1 General/6 Variable#Memory Objects\|Variable]]      | `is`       | Check if two objects have the same identity (=location in memory).                                                                                          |
| [[content/Theory Exam/1 General/6 Variable#Deleting\|Variable]]            | `del`      | Delete an object, variable, or items from a collection.                                                                                                   |
| [[content/Theory Exam/2 Control Flow/5 Function#Scope\|Variable]]               | `global`   | Declares a variable as global, accessible outside the current scope.                                                                                        |
| [[content/Theory Exam/2 Control Flow/5 Function#Scope\|Variable]]               | `nonlocal` | Refers to a variable in the nearest enclosing scope (not global).                                                                                           |
| [[content/Theory Exam/2 Control Flow/2 Conditions\|Flow Control]]             | `if`       | Defines a conditional statement.                                                                                                                            |
| [[content/Theory Exam/2 Control Flow/2 Conditions\|Flow Control]]             | `elif`     | Conditional branching; short for "else if".                                                                                                                 |
| [[content/Theory Exam/2 Control Flow/2 Conditions\|Flow Control]]             | `else`     | Defines the block of code to execute if the `if` condition is False. Also has a special use-case in the context of [[content/Theory Exam/2 Control Flow/3 While Loop\|while]], for and except. |
| Flow Control                                 | `match`    | Used for pattern matching. Executes blocks of code based on the structure or value of an expression.                                                        |
| Flow Control                                 | `case`     | Defines a block within a `match` statement, representing a specific case to match a value or pattern.                                                       |
| Flow Control                                 | `default`  | Used in a `match` statement to handle no `case` is matching.                                                                                                |
| [[content/Theory Exam/2 Control Flow/3 While Loop\|Flow Control]]               | `while`    | Defines a loop that continues as long as the condition is True.                                                                                             |
| [[content/Theory Exam/2 Control Flow/4 For Loop\|Flow Control]]                 | `for`      | Defines a loop that iterates over a sequence.                                                                                                               |
| [[content/Theory Exam/2 Control Flow/3 While Loop#Break\|Flow Control]]         | `break`    | Terminates/jumps after the nearest enclosing loop.                                                                                                          |
| [[content/Theory Exam/2 Control Flow/3 While Loop#Continue\|Flow Control]]      | `continue` | Skips the remaining code in a loop iteration and moves to the next iteration.                                                                               |
| Flow Control                                 | `pass`     | Placeholder statement that does nothing.                                                                                                                    |
| [[content/Theory Exam/2 Control Flow/5 Function#Basic\|Function]]               | `def`      | Defines a new function or method.                                                                                                                           |
| Function                                     | `lambda`   | Defines an anonymous/inline function.                                                                                                                       |
| [[content/Theory Exam/2 Control Flow/5 Function#Basic\|Function]]               | `return`   | Exits a function and optionally passes back a value.                                                                                                        |
| Function                                     | `yield`    | Pauses a function, returning a value, and allows it to be resumed later (used in generators).                                                               |
| OOP                                          | `class`    | Defines a new function or class.                                                                                                                            |
| Exception                                    | `try`      | Defines a block of code to test for exceptions.                                                                                                             |
| Exception                                    | `except`   | Defines how to handle exceptions in a `try` block.                                                                                                          |
| Exception                                    | `finally`  | Defines cleanup code that always runs after `try` or `except` blocks.                                                                                       |
| Exception                                    | `raise`    | Used to raise exceptions manually.                                                                                                                          |
| Exception                                    | `assert`   | Debugging tool, if the condition is False, it will throw an exception.                                                                                      |
| Exception                                    | `with`     | Context Manager to properly enter and exit resources like files.                                                                                            |
| Import                                       | `import`   | Imports a module or specific components from a module.                                                                                                      |
| Import                                       | `from`     | Specifies the module from which to import.                                                                                                                  |
| Import / Exception                           | `as`       | Used for creating aliases/alternative names.                                                                                                                |
| Asynchronous                                 | `async`    | Used to define asynchronous functions (coroutines).                                                                                                         |
| Asynchronous                                 | `await`    | Used to pause execution in asynchronous functions until a result is available.                                                                              |
# Questions
- [ ] What is a keyword? Explain in your own words.