---
title: 3.1 Object Oriented Programming
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags:
  - Python
  - Advanced
  - SDML
  - AECD
  - GEES
---

Object-Oriented Programming (OOP) helps to structure code by bundling data and the methods that operate on that data together.  
# Summary
- **Class**: A blueprint for creating objects, that defines everything.
- **Object**: A specific instance of a class.
- **Initialization**: Creating/Constructing a new object with the special method `__init__()`.
- **Attributes**: Data stored inside and object.
- **[[content/Theory Exam/2 Control Flow/5 Function#Methods|Methods]]**: Functions inside classes that define behavior.
- **Encapsulation**: Hiding internal data, exposing only necessary parts. Access levels: public (`name`), protected (`_name`), and private (`__name`)
- **Inheritance**: A class can inherit/reuse methods from another class.

# Basics
Object-Oriented Programming (OOP) is a way of writing programs based on **objects** that bundle both **data** and **behavior** together. It imitates objects from the real world.
- A **class** is a blueprint (like a car design). It defines what data (called **attributes**) and actions (called **methods**) an object has.
- An **object** is a real thing made from that blueprint (like an actual car manufactured base on the blueprint).
- **Attributes** are the data stored in an object (like brand and color).
- **Methods** are the actions an object can do (like drive or stop).

OOP is a powerful way/style to structure your code. However, it can also be confusing or limiting when used wrong or too much. While OOP sometimes helps to achieve something in a simpler or more meaningful way, everything can also be done without using OOP.
## Without OOP
Without OOP, we typically handle related data using separate variables and functions.

```python
# Each car is just a bunch of separate variables
car1_brand = "Toyota"
car1_price = 20000
car1_speed = 180

car2_brand = "BMW"
car2_price = 40000
car2_speed = 240

def discounted_price(price, discount):
    return price - (price * discount)

print(f"{car1_brand} with {car1_speed}km/h discounted to {discounted_price(car1_price, 0.1)}$")
print(f"{car2_brand} with {car2_speed}km/h discounted to {discounted_price(car2_price, 0.1)}$")
```

```output
Toyota with 180km/h discounted to 18000.0$
BMW with 240km/h discounted to 36000.0$ 
```

## With OOP
With OOP, we group related data and functions together in a class.

```python
class Car:
    def __init__(self, brand, price, speed):
        self.brand = brand
        self.price = price
        self.speed = speed

    def discount_price(self, discount):
        return self.price - (self.price * discount)

car1 = Car("Toyota", 20000, 180)
car2 = Car("BMW", 40000, 240)

print(f"{car1.brand} with {car1.speed}km/h discounted to {car1.discount_price(0.1)}$")
print(f"{car2.brand} with {car2.speed}km/h discounted to {car2.discount_price(0.1)}$")
```

```output
Toyota with 180km/h discounted to 18000.0$
BMW with 240km/h discounted to 36000.0$ 
```

You can see that after the class once, you can use it as a blueprint to make as many objects as you want.
# Class Definition
A class defines attributes and behavior. An object is an instance of a class. Defining a class is like creating your own new [[content/Theory Exam/1 General/5 Datatype|datatype]]. Then you can create objects of that datatype you defined yourself. You datatype/class can have value and methods. You have to define everything your datatype/class should store and do.
## Basics
You can define a new class by using the [[content/Theory Exam/1 General/8 Keyword|keyword]] `class`. Inside the class, you have the definition of all the attributes and methods that belong to the class. When creating an object, all its structure, values, and behavior are defined by the class.

```python
class className:
	# inside the class
	# here are all the attributes and methods

varName = className() # we are creating an object of class className and storing it in varName
print(className())    # you can also use an object directly, instead of storing it in a variable
```

## Self
Inside a class definition, you will often find `self`. This is a local variable storing the object you are currently working with. Using the name `self` is a naming convention to always keep it consistent and easy to read. In general, when calling a object method, the first parameter will store the object that was calling.

## Initialization
Initialization means creating an object based on a class. The special method`__init__` will be called automatically when creating an object. This method defines what will happen when initializing and define the starting attributes. The `__init__` method is often called constructor, because it constructs an object based on a class.

The first parameter has to be `self`. When creating a new object with the syntax `className(...)`, python will create self, call `__init__()` to to initialize it and return self. So it will return the object that was just created, based on the class.

```python
class className:
    def __init__(self, parName1, parName2, parName3):
        # the init method will run when creating a new object
        # so inside you have to define the behaviour for that

obj = className(arg1, arg2, arg3) # here we call the __init__ method of className
```

Let's look at the car example again.

```python
class Car:
    def __init__(self, brand):
        print(f"A new {brand} was manufactured.")

car1 = Car("BMW")  # -> A new BMW was manufactured.
```

## Attributes
You can think of attributes as special variables that belong to an object. You can also create, set, access, and delete attributes similar to variables. When working with a specific attribute of an object, you have to use the syntax `objectName.attributeName`. 

The main attributes of an object are usually created and defined in the `__init__` method. This makes it easier to define the values and make sure all objects of a type have the same attributes. It is possible to add new attributes to an object later, but usually not recommended. For maintainability and consistency, it is better to keep the attribute creations inside init.

Let's add some attributes to our car object and demonstrate their usage.

```python
class Car:
    def __init__(self, brand, price, speed):
        self.brand = brand
        self.price = price
        self.speed = speed
        self.speedPerPrice = 1000 * speed / price
        print(f"New {self.brand} with {self.speed}km/h for {self.price}$ manufactured.")

car1 = Car("Toyota", 20000, 180) # -> New Toyota with 180km/h for 20000$ manufactured.
car2 = Car("BMW", 40000, 240)    # -> New BMW with 240km/h for 40000$ manufactured. 

# you can also access attributes outside of the class
print(car1)                      # -> <__main__.Car object at 0x0000018E11DF9210>    
print(car1.brand)                # -> Toyota
print(car2)                      # -> <__main__.Car object at 0x0000018E11DF9450>  
print(car2.brand)                # -> BMW
print(car1.price + car2.price)   # -> 60000
print(car1.speedPerPrice)        # -> 9.0

# creating a new attribute named "info" for car1
car1.info = f"{car1.brand} with {car1.speed}km/h for {car1.price}$."
print(car1.info)                 # -> Toyota with 180km/h for 20000$.
# this attribute only exists for car1, so running car2.info will result in an error
```

## Methods
A [[content/Theory Exam/2 Control Flow/5 Function#Methods|method]] is a [[content/Theory Exam/2 Control Flow/5 Function|function]] that belongs to an object/class. Because of this it can directly access and change the attributes of the object/class. You can call a method with the syntax `objectName.methodName(...)`. When defining a method, the first parameter is [[1 OOP#Self|self]]. When calling the method, Python automatically passes the calling object as the first argument. So the calling object will be stored in `self`, which makes it easy to use and manipulate its data. All the other behavior like parameters, return values, ... are similar to normal [[content/Theory Exam/2 Control Flow/5 Function|functions]].

Lets add a discount method that directly uses and updates the price of a car to be discounted.

```python
class Car:
    def __init__(self, brand, price, speed):
        self.brand = brand
        self.price = price
        self.speed = speed

    def discount_price(self, discount):
        self.price = self.price * discount//100

car1 = Car("Toyota", 20000, 180)
car2 = Car("BMW", 40000, 240)

print(f"Old price of {car1.brand} is {car1.price}$.") # -> Old price of Toyota is 20000$.
car1.discount_price(90) # discount to 90%
print(f"New price of {car1.brand} is {car1.price}$.") # -> New price of Toyota is 18000$.

print(f"Old price of {car2.brand} is {car2.price}$.") # -> Old price of BMW is 40000$.
car2.discount_price(80) # discount to 80%
print(f"New price of {car2.brand} is {car2.price}$.") # -> New price of BMW is 32000$.
```

# Encapsulation

**Encapsulation** means **hiding internal** details and data and exposing only what’s necessary. For example you can drive a car without knowing how the engine works. When using a credit card you can't set your balance directly. Instead, you have to use the public deposit and withdraw methods. This can help to make code cleaner, safer, and easier to use.
- Keeps internal logic hidden and protected
- Prevents misuse of sensitive data
- Allows controlled access via methods (getters/setters)

In general there are the tree access levels public, protected and private. 

| Type      | Syntax   | Meaning                                                           |
| --------- | -------- | ----------------------------------------------------------------- |
| Public    | `name`   | Can be accessed from anywhere                                     |
| Protected | `_name`  | Should only be used within the class or subclasses (not enforced) |
| Private   | `__name` | Should only be used inside the class itself (lightly enforced)    |

Python uses naming conventions to suggest access level. Unlike many other languages, Python does not strictly enforce these rules. It is more like warning the programmer and reminding him how something should be used. These access levels and naming conventions are the same for attributes and for methods.

Python still makes it possible to access private with the syntax `objectName._className__name`. However, you should basically never do this.

```python
class Account:
    def __init__(self, owner, accNum, balance):
        self.owner = owner            # public
        self._accountNumber = accNum  # protected
        self.__balance = balance      # private

    def get_balance(self):
        return self.__balance

    def deposit(self, accountNumber, amount):
        if accountNumber == self._accountNumber:  # check account number
            if amount > 0:                        # check deposit amount
                self.__balance += amount          # change bank account balance
                print("new balance:", self.__balance)

	# private method, only for use inside the class
    def __changeAccountNumber(self, number):
	    self._accountNumber = number

acc = Account("Alice", "0112345678", 1000)
print(acc.owner)               # OK -> Alice
print(acc._accountNumber)      # Works, but should not be done -> 0112345678
# print(acc.__balance)         # Error: AttributeError
print(acc._Account__balance)   # Works, but NEVER DO -> 1000
print(acc.get_balance())       # Access via method (safe) -> 1000
acc.deposit("0112345678", 500) # Change via method (safe) -> 1500
```


# Inheritance
**Inheritance** allows one class to inherit (=take over) attributes and methods from another class. It’s like saying, “A car is a vehicle.” So the **Car** class can inherit its basic structure, attributes, and methods from a more general **Vehicle** class.

This helps avoid repeating code, keeps similar logic together, and creates a clear structure.

```python
class ParentClass:
    # general attributes and methods

class ChildClass(ParentClass):
    # additional or specialized attributes and methods
```

- **Parent Class / Base Class / Super Class**: The general class being inherited from.  
	→ Example: `Vehicle`
- **Child Class / Sub Class / Derived Class**: The class that inherits from the parent.  
	→ Example: `Car` inherits from `Vehicle`
- **Single Inheritance**: A child class inherits from one parent class.
- **Multi-Level Inheritance**: A child inherits from a parent, and another child inherits from that child.  
	→ Like: `Vehicle → Car → ElectricCar`
- **Multiple Inheritance**: A class inherits from **two or more** parent classes.
## Basic
Inheriting is about using the attributes and methods of a parent. By default, all the attributes and methods defined in the parent class will be available in the child class. When defining new attributes and methods in the child, they don't affect the parent.

```python
class Vehicle:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed
        print("New vehicle created.")

    def drive(self):
        print(f"{self.brand} is driving at {self.speed}km/h")


class Car(Vehicle):
    # there is no __init__ method, so it will be inherited from the parent and is the same as for vehicle
    # car.drive is not defined explicitly, but it is inherited from the parent
    def info(self):
        print(f"Car from {self.brand} with a maximum speed of {self.speed}km/h")


vehicle1 = Vehicle("Toyota", 180) # -> New vehicle created.
vehicle1.drive()                  # -> Toyota is driving at 180km/h
# trying to call vehicle1.info() will raise an error, because Vehicle class does not have an info method

car1 = Car("BMW", 220)            # -> New vehicle created.
car1.drive()                      # -> BMW is driving at 220km/h
car1.info()                       # -> Car from BMW with a maximum speed of 220km/h
car1.speed = 300                  # change the attribute speed of car1
car1.drive()                      # -> BMW is driving at 300km/h
car1.info()                       # -> Car from BMW with a maximum speed of 300km/h
```

As you can see, the class Car inherits everything from Vehicle, so the methods `__init()__` and `drive()` and the attributes `brand` and `speed` work without redefining them. Car can also have its own attributes and methods like `info()`.

## Overwriting
A child class can overwrite/replace any method from the parent class by redefining it. So if a method is defined in the child and the parent, the definition from the child will be used. 

```python
class Vehicle:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed
        print("New vehicle created.")

    def drive(self):
        print(f"{self.brand} is driving at {self.speed}km/h")

    def info(self):
        print(f"Vehicle from {self.brand}.")


class Car(Vehicle):
    # overwrite the __init__ method
    def __init__(self, brand, speed, price):
        self.brand = brand
        self.speed = speed
        self.price = price
        print("New car created.")

    # car.drive is not defined explicitly, so it is inherited from the parent

    # overwrite the info method
    def info(self):
        print(f"Car from {self.brand} for {self.price}$.")


vehicle1 = Vehicle("Toyota", 180)  # -> New vehicle created.
vehicle1.info()                    # -> Vehicle from Toyota. 
# you can not use the attribute price in vehicle, because it is only defined for car.

car1 = Car("BMW", 220, 40000)      # -> New car created.
car1.drive()                       # -> BMW is driving at 220km/h
car1.info()                        # -> Car from BMW for 40000$.

```

## Multilevel
If a class is inheriting from a parent that is also inheriting from another class, you have multiple levels of inheritance. Below you can see two levels of inheritance. `Car` is the parent of `ElectricCar` and `Vehicle` is the parent of `Car`.

```python
class Vehicle:
    def __init__(self):
        print("Create vehicle")

    def start(self):
        print("Start vehicle")

class Car(Vehicle):
    def open_door(self):
        print("Open car door")

class ElectricCar(Car):
    def charge(self):
        print("Charge electric car")

tesla = ElectricCar() # inherited from Vehicle -> Create vehicle
tesla.start()         # inherited from Vehicle -> Start vehicle
tesla.open_door()     # inherited from Car -> Open car door
tesla.charge()        # defined in ElectricCar -> Charge electric car
```

## Multiple
A class can inherit from multiple classes at the same time. This means it will inherit the methods from multiple parents. The parents are listed in the brackets with the syntax `class className(firstParent, secondParent, ..., lastParent):`. The first parent has the highest priority when inheriting methods.

```python
class Car:
    def drive(self):
        print("Driving")

class MusicSystem:
    def play_music(self):
        print("Playing music")

class AirConditioning:
    def cool(self):
        print("Cooling the air")

class LuxuryCar(Car, MusicSystem, AirConditioning):
    def __init__(self):
        print("Created Luxury Car.")

bmw = LuxuryCar()  # -> Created Luxury Car
bmw.drive()        # from Car -> Driving
bmw.play_music()   # from MusicSystem -> Playing music
bmw.cool()         # from AirConditioning -> Cooling the air
```

# Questions
- [ ] What is Object-Oriented Programming?
	- [ ] Explain class and object.
	- [ ] How does a OOP help organize code compared to normal programming?
- [ ] Explain `self`.
	- [ ] Explain `__init__()`?
	- [ ] How do you create a new object from a class and what will happen?
	- [ ] What is the syntax to access an object's attribute?
	- [ ] What is the syntax for calling a method on an object?
	- [ ] What is the role of `self` inside methods? How can a method change the attributes of an object?
- [ ] What does encapsulation mean in OOP?
	- [ ] Explain public, protected, and private in Python?
- [ ] Explain inheritance and why it is useful.
	- [ ] Explain the terms parent and child?
	- [ ] Can a child class use methods that is only defined in its parent class? What happens if both parent and child define a method with the same name?
	- [ ] Explain Multilevel Inheritance
	- [ ] Explain Multiple Inheritance