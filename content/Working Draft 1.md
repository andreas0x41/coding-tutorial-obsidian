---
title: Untitled
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: true
aliases: 
tags:
  - Python
  - SDML
  - AECD
  - GEES
---

# Other Types

List comprehension is the most common, but similar syntax works for other collections datatypes too.

## Set

```python
nums = [1, 2, 2, 3, 4]
unique_squares = {x*x for x in nums}
print(unique_squares) # -> {1, 4, 9, 16}
```

## Dictionary

```python
words = ["a", "test", "ccc"]
lengths = {word: len(word) for word in words}
print(lengths) # -> {'a': 1, 'test': 4, 'ccc': 3}
```

## Generator
important and between `()`
## Tuple

There is **no true tuple comprehension**, but a similar-looking **generator expression** can be converted into a tuple:

```python
nums = (x*2 for x in range(5))  # generator
print(tuple(nums))
```

```output
(0, 2, 4, 6, 8)
```


adf

