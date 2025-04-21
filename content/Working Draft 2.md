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
# 🧮 Operator Overloading

| Operator | Description    | Method       | Example                      |
| -------- | -------------- | ------------ | ---------------------------- |
| +        | Addition       | __add__      | `a + b → a.__add__(b)`       |
| -        | Subtraction    | __sub__      | `a - b → a.__sub__(b)`       |
| *        | Multiplication | __mul__      | `a * b → a.__mul__(b)`       |
| /        | Division       | __truediv__  | `a / b → a.__truediv__(b)`   |
| //       | Floor division | __floordiv__ | `a // b → a.__floordiv__(b)` |
| %        | Modulo         | __mod__      | `a % b → a.__mod__(b)`       |
| **       | Exponentiation | __pow__      | `a ** b → a.__pow__(b)`      |
| &        | Bitwise AND    | __and__      | `a & b → a.__and__(b)`       |
| \|       | Bitwise OR     | __or__       | `a \| b → a.__or__(b)`       |
| ~        | Bitwise NOT    | __invert__   | `~a → a.__invert__()`        |
| ^        | Bitwise XOR    | __xor__      | `a ^ b → a.__xor__(b)`       |
| <<       | Left shift     | __lshift__   | `a << 1 → a.__lshift__(1)`   |
| >>       | Right shift    | __rshift__   | `a >> 1 → a.__rshift__(1)`   |
| -obj     | Negation       | __neg__      | `-a → a.__neg__()`           |
| +obj     | Unary plus     | __pos__      | `+a → a.__pos__()`           |
| abs()    | Absolute value | __abs__      | `abs(a) → a.__abs__()`       |
``

---

# ✏️ In-place Operators


| Operator | Description             | Method        | Example                        |
| -------- | ----------------------- | ------------- | ------------------------------ |
| +=       | In-place addition       | __iadd__      | `a += b → a.__iadd__(b)`       |
| -=       | In-place subtraction    | __isub__      | `a -= b → a.__isub__(b)`       |
| *=       | In-place multiplication | __imul__      | `a *= b → a.__imul__(b)`       |
| /=       | In-place division       | __itruediv__  | `a /= b → a.__itruediv__(b)`   |
| //=      | In-place floor div      | __ifloordiv__ | `a //= b → a.__ifloordiv__(b)` |
| %=       | In-place modulo         | __imod__      | `a %= b → a.__imod__(b)`       |
| **=      | In-place power          | __ipow__      | `a **= b → a.__ipow__(b)`      |
| &=       | In-place AND            | __iand__      | `a &= b → a.__iand__(b)`       |
| \|=      | In-place OR             | __ior__       | `a \|= b → a.__ior__(b)`       |
| ^=       | In-place XOR            | __ixor__      | `a ^= b → a.__ixor__(b)`       |
| <<=      | In-place left shift     | __ilshift__   | `a <<= 1 → a.__ilshift__(1)`   |
| >>=      | In-place right shift    | __irshift__   | `a >>= 1 → a.__irshift__(1)`   |


---

# 🔁 Comparison Operators


| Operator | Description         | Method | Example                |
| -------- | ------------------- | ------ | ---------------------- |
| ==       | Equal               | __eq__ | `a == b → a.__eq__(b)` |
| !=       | Not equal           | __ne__ | `a != b → a.__ne__(b)` |
| <        | Less than           | __lt__ | `a < b → a.__lt__(b)`  |
| <=       | Less than or equal  | __le__ | `a <= b → a.__le__(b)` |
| >        | Greater than        | __gt__ | `a > b → a.__gt__(b)`  |
| >=       | Greater than or eq. | __ge__ | `a >= b → a.__ge__(b)` |


---

# 🎭 Object Lifecycle


| Method   | Description                   | Example                          |
| -------- | ----------------------------- | -------------------------------- |
| __new__  | Creates new instance          | `obj = MyClass.__new__(MyClass)` |
| __init__ | Initializes instance          | `obj.__init__(...)`              |
| __del__  | Called before object deletion | `del obj → obj.__del__()`        |


---

# 🔄 Type Conversion & Representation


| Method      | Description           | Example                                    |
| ----------- | --------------------- | ------------------------------------------ |
| __str__     | Human-readable string | `str(obj) → obj.__str__()`                 |
| __repr__    | Debug/official repr   | `repr(obj) → obj.__repr__()`               |
| __bytes__   | Convert to bytes      | `bytes(obj) → obj.__bytes__()`             |
| __format__  | Custom formatting     | `format(obj, spec) → obj.__format__(spec)` |
| __hash__    | Hash value            | `hash(obj) → obj.__hash__()`               |
| __bool__    | Truth value           | `bool(obj) → obj.__bool__()`               |
| __int__     | Integer conversion    | `int(obj) → obj.__int__()`                 |
| __float__   | Float conversion      | `float(obj) → obj.__float__()`             |
| __complex__ | Complex number        | `complex(obj) → obj.__complex__()`         |
| __index__   | Integer for slicing   | `mylist[obj] → obj.__index__()`            |
| __round__   | Round object          | `round(obj) → obj.__round__()`             |
| **abs**     | Absolute value        | `abs(a) → a.__abs__()`                     |



---

# 📦 Container Emulation


| Method       | Description           | Example                              |
| ------------ | --------------------- | ------------------------------------ |
| __len__      | Length                | `len(obj) → obj.__len__()`           |
| __getitem__  | Get item by key/index | `obj[0] → obj.__getitem__(0)`        |
| __setitem__  | Set item              | `obj[0] = x → obj.__setitem__(0, x)` |
| __delitem__  | Delete item           | `del obj[0] → obj.__delitem__(0)`    |
| __iter__     | Iterator object       | `for i in obj → obj.__iter__()`      |
| __next__     | Next item (iterators) | `next(obj) → obj.__next__()`         |
| __reversed__ | Reverse iteration     | `reversed(obj) → obj.__reversed__()` |
| __contains__ | Membership test       | `'x' in obj → obj.__contains__('x')` |


---

# 🧭 Attribute Access


| Method            | Description                          | Example                                |
|-------------------|--------------------------------------|----------------------------------------|
| __getattr__       | Fallback for undefined attributes    | `obj.foo → obj.__getattr__('foo')`     |
| __getattribute__  | Called for all attr access           | `obj.foo → obj.__getattribute__('foo')`|
| __setattr__       | On attribute set                     | `obj.foo = 5 → obj.__setattr__('foo', 5)` |
| __delattr__       | On attribute delete                  | `del obj.foo → obj.__delattr__('foo')` |
| __dir__           | Customize dir(obj)                   | `dir(obj) → obj.__dir__()`             |


---

# 🔧 Callable & Context Management


| Method    | Description          | Example                         |
| --------- | -------------------- | ------------------------------- |
| __call__  | Make object callable | `obj() → obj.__call__()`        |
| __enter__ | With statement entry | `with obj: → obj.__enter__()`   |
| __exit__  | With statement exit  | `with obj: → obj.__exit__(...)` |


---

# 🧩 Descriptor Protocol


| Method     | Description                 | Example                                         |
| ---------- | --------------------------- | ----------------------------------------------- |
| __get__    | Accessing managed attribute | `obj.attr → descriptor.__get__(obj, type)`      |
| __set__    | Setting managed attribute   | `obj.attr = val → descriptor.__set__(obj, val)` |
| __delete__ | Deleting managed attribute  | `del obj.attr → descriptor.__delete__(obj)`     |


---

Let me know if you'd like these bundled into a `.md` file, split across pages/sections, or visualized differently (e.g., flashcards or searchable table).