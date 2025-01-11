[Python Random Module - Python Cheatsheet](https://www.pythoncheatsheet.org/modules/random-module)
[random — Generate pseudo-random numbers — Python 3.11.4 documentation](https://docs.python.org/3/library/random.html)
[Python Random Module](https://www.w3schools.com/python/module_random.asp)
[Python Random Module - GeeksforGeeks](https://www.geeksforgeeks.org/python-random-module/)
[Python Program to Generate a Random Number](https://www.programiz.com/python-programming/examples/random-number)

__generate random numbers, selecting random elements, and implementing random-based algorithms__

|Method|Description|Example Usage|
|---|---|---|
|`random()`|Returns a random floating-point number in the range [0.0, 1.0].|`random.random()`|
|`randrange(stop)`|Returns a random integer from the range [0, stop].|`random.randrange(10)`|
|`randrange(start, stop)`|Returns a random integer from the range [start, stop].|`random.randrange(1, 7)`|
|`randrange(start, stop, step)`|Returns a random integer from the range [start, stop, step].|`random.randrange(0, 101, 5)`|
|`choice(seq)`|Returns a random element from a non-empty sequence.|`random.choice(['apple', 'banana', 'cherry'])`|
|`shuffle(seq)`|Shuffles the elements of a sequence in place.|`cards = ['A', '2', '3', '4', '5']``random.shuffle(cards)`|
|`sample(population, k)`|Returns a random sample of k unique elements from a population.|`random.sample(range(1, 53), 5)`|
|`uniform(a, b)`|Returns a random floating-point number in the range [a, b].|`random.uniform(1.0, 10.0)`|
|`seed(a=None)`|Initialize the random number generator with a given seed value.|`random.seed(42)`|