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
# Python Variables: Copy/Use by Value vs. by Reference

Understanding how Python handles variables, particularly in the context of "copy/use by value" vs. "by reference," is crucial for writing efficient and bug-free code. This chapter provides a comprehensive explanation of these concepts, along with examples to demonstrate their behavior in real-world scenarios.

---

## **1. What Are Variables in Python?**

A variable in Python is essentially a name (or identifier) that points to an object in memory. When you assign a value to a variable, Python creates an object in memory and associates the variable name with that object.

### Example:

```python
x = 42  # 'x' is a variable pointing to an integer object with value 42.
y = "Hello"  # 'y' points to a string object with value "Hello".
```

In Python, variables **do not store the values themselves**. Instead, they store references to the objects in memory.

---

## **2. Copy/Use By Value vs. By Reference**

When we talk about "copy/use by value" or "by reference," we are describing how Python handles data when assigning variables, passing arguments to functions, or returning values from functions.

Python’s behavior depends on **whether the object is mutable or immutable.**

### **Key Terms:**

1. **Immutable Objects**: Objects whose values cannot be changed after creation (e.g., `int`, `float`, `str`, `tuple`, `frozenset`).
2. **Mutable Objects**: Objects whose values can be changed after creation (e.g., `list`, `dict`, `set`).

---

### **2.1. Immutable Objects (Use/Copy by Value)**

For immutable objects, any operation that seems to "modify" the object actually creates a new object in memory. This is why immutable objects behave as if they are copied "by value."

#### Example:

```python
x = 10
y = x  # Both 'x' and 'y' point to the same integer object (10).

# Modify 'y'
y += 5  # A new integer object (15) is created, and 'y' now points to it.

print(x)  # Output: 10 (unchanged)
print(y)  # Output: 15
```

**Explanation**: Initially, `x` and `y` point to the same object (`10`). When `y` is modified, a new object (`15`) is created, and `y` now refers to it, leaving `x` unchanged.

---

### **2.2. Mutable Objects (Use by Reference)**

For mutable objects, changes made to the object are reflected across all references to that object. This is because all references point to the same memory location.

#### Example:

```python
a = [1, 2, 3]
b = a  # Both 'a' and 'b' point to the same list object.

# Modify the list using 'b'
b.append(4)

print(a)  # Output: [1, 2, 3, 4] (changed)
print(b)  # Output: [1, 2, 3, 4] (same object)
```

**Explanation**: Both `a` and `b` are references to the same list object. Modifying the list via `b` affects the same object `a` points to.

---

### **2.3. Function Arguments: Mutable vs. Immutable**

Python's function arguments are passed **by object reference.** Whether the function can modify the original value depends on the mutability of the object.

#### Immutable Argument Example:

```python
def modify_immutable(x):
    x += 1  # A new integer object is created.
    print("Inside function:", x)  # Output: 11

num = 10
modify_immutable(num)
print("Outside function:", num)  # Output: 10 (unchanged)
```

#### Mutable Argument Example:

```python
def modify_mutable(lst):
    lst.append(4)  # Modifies the original list object.
    print("Inside function:", lst)  # Output: [1, 2, 3, 4]

numbers = [1, 2, 3]
modify_mutable(numbers)
print("Outside function:", numbers)  # Output: [1, 2, 3, 4] (changed)
```

---

## **3. Shallow Copy vs. Deep Copy**

When copying objects in Python, it’s important to distinguish between **shallow copies** and **deep copies.**

### **3.1. Shallow Copy**

A shallow copy creates a new object, but does not recursively copy the objects contained within. For mutable objects, the inner objects are still referenced.

#### Example:

```python
import copy

original = [[1, 2], [3, 4]]
shallow = copy.copy(original)

shallow[0].append(5)
print("Original:", original)  # Output: [[1, 2, 5], [3, 4]]
print("Shallow:", shallow)    # Output: [[1, 2, 5], [3, 4]]
```

**Explanation**: The outer list is copied, but the inner lists are shared between `original` and `shallow`.

### **3.2. Deep Copy**

A deep copy creates a new object and recursively copies all objects within.

#### Example:

```python
import copy

original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)

deep[0].append(5)
print("Original:", original)  # Output: [[1, 2], [3, 4]]
print("Deep:", deep)          # Output: [[1, 2, 5], [3, 4]]
```

**Explanation**: The `deepcopy` function ensures that all objects within `original` are fully copied, so changes to `deep` do not affect `original`.

---

## **4. Practical Tips and Best Practices**

1. **Avoid unintended side effects with mutable objects**:
	
	- If you want to prevent a function from modifying a mutable object, pass a copy instead of the original.

	```python
    def safe_function(lst):
        lst = lst.copy()  # Create a shallow copy to avoid modifying the original.
        lst.append(4)
        return lst
    
    original = [1, 2, 3]
    result = safe_function(original)
    print(original)  # Output: [1, 2, 3] (unchanged)
    print(result)    # Output: [1, 2, 3, 4]
    ```

2. **Use ************`is`************ to check object identity**:
	
	- The `is` operator checks whether two variables refer to the same object in memory.

	```python
    x = [1, 2, 3]
    y = x
    print(x is y)  # Output: True
    
    z = x.copy()
    print(x is z)  # Output: False
    ```

3. **Choose ************`deepcopy`************ for nested mutable structures**:
	
	- Use `deepcopy` when working with complex objects where nested objects should also be copied.
4. **Immutable objects for thread safety**:
	
	- Immutable objects are inherently thread-safe since they cannot be modified after creation.

---

## **5. Summary Table**

|**Object Type**|**Behavior**|**Modifiable?**|**Example**|
|---|---|---|---|
|Immutable|Use/Copy by Value|No|`int`, `str`|
|Mutable|Use by Reference|Yes|`list`, `dict`|
|Shallow Copy|Copies outer object only|Partially|`copy.copy()`|
|Deep Copy|Recursively copies objects|Yes|`copy.deepcopy()`|

---

With a solid grasp of these concepts, you can confidently manage Python variables and avoid common pitfalls associated with mutability, copying, and referencing. These principles form a foundation for mastering Python programming.

Is there anything else you could add???