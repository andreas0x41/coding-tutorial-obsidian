[tkinter — Python interface to Tcl/Tk — Python 3.11.4 documentation](https://docs.python.org/3/library/tkinter.html)
[Python-Kurs: Python Tkinter Einführung](https://www.python-kurs.eu/python_tkinter.php)
[Python - GUI Programming (Tkinter)](https://www.tutorialspoint.com/python/python_gui_programming.htm)
[Python GUI - tkinter - GeeksforGeeks](https://www.geeksforgeeks.org/python-gui-tkinter/)
[Python Tkinter Tutorial - Javatpoint](https://www.javatpoint.com/python-tkinter)

__standard Python interface to the Tk GUI toolkit__

```python
import tkinter as tk

master = tk.Tk()
canvas = tk.Canvas(master, width=canvasWidth, height=canvasHeight)
canvas.pack()

canvas.create_line(x1, y1, x2, y2, width=lineWidth)

canvas.create_oval(x1, y1, x2, y1, fill=color)

canvas.create_text(x, y, text=text, anchor=pos, fill=color)

tk.mainloop()
```