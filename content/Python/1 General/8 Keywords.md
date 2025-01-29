---
title: 8 Keywords
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: False
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
  - General
---

In Python, **keywords** are reserved words that have a special predefined meaning and cannot be used as identifiers (e.g., variable names, function names). Keywords are the building blocks of Python syntax and structure. 

Most keywords are explained an a different page, so the "Context" column will link to the details.

> [!todo]- partly exam relevant
> The keywords `match`, `case`, `default`, `pass`, `lambda`, `yield`, `nonlocal`, `async`, and `await` are not exam relevant. Some of the others are also only partly or for some departments exam relevant.


| Context                                       | Keyword    | Description                                                                                                                   |
| --------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [[5 Datatypes#Boolean\|Datatype]]             | `False`    | Boolean value representing Falue.                                                                                             |
| [[5 Datatypes#Boolean\|Datatype]]             | `True`     | Boolean value representing True.                                                                                              |
| [[5 Datatypes#None\|Datatype]]                | `None`     | Represents the absence of a value or a null value.                                                                            |
| [[7 Operators#Logical Operators\|Operator]]   | `and`      | Logical AND operator. True if all operands are True.                                                                          |
| [[7 Operators#Logical Operators\|Operator]]   | `or`       | Logical OR operator. True if at least one operand is True.                                                                    |
| [[7 Operators#Logical Operators\|Operator]]   | `not`      | Logical NOT operator. Negates a boolean value.                                                                                |
| [[7 Operators#Membership Checking\|Operator]] | `in`       | Checks if an element exists in a sequence or collection.                                                                      |
| [[6 Variables#Memory Objects\|Variable]]      | `is`       | Check if two objects have the same identity (=location in memory).                                                            |
| [[6 Variables#Deleting\|Variable]]            | `del`      | Delete a object, variable, or an items from a collection.                                                                     |
| [[6 Variables#Scope\|Variable]]               | `global`   | Declares a variable as global, accessible outside the current scope.                                                          |
| [[6 Variables#Scope\|Variable]]               | `nonlocal` | Refers to a variable in the nearest enclosing scope (not global).                                                             |
| Flow Control                                  | `if`       | Defines a conditional statement.                                                                                              |
| Flow Control                                  | `elif`     | Conditional branching; short for "else if".                                                                                   |
| Flow Control                                  | `else`     | Defines the block of code to execute if the `if` condition is False. Also has a special use-case in the context of while, for |
| Flow Control                                  | `match`    | Used for pattern matching. Executes blocks of code based on the structure or value of an expression.                          |
| Flow Control                                  | `case`     | Defines a block within a `match` statement, representing a specific case to match a value or pattern.                         |
| Flow Control                                  | `default`  | Used in a `match` statement to handle no `case` is matching.                                                                  |
| Flow Control                                  | `for`      | Defines a loop that iterates over a sequence.                                                                                 |
| Flow Control                                  | `while`    | Defines a loop that continues as long as the condition is True.                                                               |
| Flow Control                                  | `break`    | Terminates/jumps after the nearest enclosing loop.                                                                            |
| Flow Control                                  | `continue` | Skips the remaining code in a loop iteration and moves to the next iteration.                                                 |
| Flow Control                                  | `pass`     | Placeholder statement that does nothing.                                                                                      |
| Function                                      | `def`      | Defines a new function or method.                                                                                             |
| Function                                      | `lambda`   | Creates an anonymous function (inline function).                                                                              |
| Function                                      | `return`   | Exits a function and optionally passes back a value.                                                                          |
| Function                                      | `yield`    | Pauses a function, returning a value, and allows it to be resumed later (used in generators).                                 |
| OOP                                           | `class`    | Defines a new function or class.                                                                                              |
| Exception                                     | `try`      | Defines a block of code to test for exceptions.                                                                               |
| Exception                                     | `except`   | Defines how to handle exceptions in a `try` block.                                                                            |
| Exception                                     | `finally`  | Defines cleanup code that always runs after `try` or `except` blocks.                                                         |
| Exception                                     | `raise`    | Used to raise exceptions manually.                                                                                            |
| Exception                                     | `assert`   | Debugging tool to test if a condition is not True, it will throw an exception.                                                |
| Exception                                     | `with`     | Context Manager to properly enter and exit resources like files.                                                              |
| Import                                        | `import`   | Imports a module or specific components from a module.                                                                        |
| Import                                        | `from`     | Specifies the module from which to import.                                                                                    |
| Import / Exception                            | `as`       | Used for creating aliases/alternative names.                                                                                  |
| Asynchronous                                  | `async`    | Used to define asynchronous functions (coroutines).                                                                           |
| Asynchronous                                  | `await`    | Used to pause execution in asynchronous functions until a result is available.                                                |
