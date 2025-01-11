[Welcome to Flask — Flask Documentation (2.3.x)](https://flask.palletsprojects.com/en/2.3.x/)
[How To Make a Web Application Using Flask in Python 3 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3)
[Flask - Full Stack Python](https://www.fullstackpython.com/flask.html)
[Flask Tutorial](https://www.tutorialspoint.com/flask/index.htm)
[What is Flask Python - Python Tutorial](https://pythonbasics.org/what-is-flask-python/)
[Flask Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/flask-tutorial/)
[What is Flask Python? A short Flask framework tutorial - IONOS](https://www.ionos.com/digitalguide/websites/web-development/flask-python/)
[Flask Cheatsheet | CodeWithHarry](https://www.codewithharry.com/blogpost/flask-cheatsheet/)
[Introduction to Flask: Introduction to Flask Cheatsheet | Codecademy](https://www.codecademy.com/learn/introduction-to-flask/modules/introduction-to-flask/cheatsheet)

__lightweight framework for building web applications__

```python
import re
from datetime import datetime
from flask import Flask 

app = Flask(__name__)  

print("http://127.0.0.1:5000/hello/VSCode")  

@app.route("/")
def home():
    return "Hello, Flask!"
  

@app.route("/hello/<name>")
def hello_there(name):
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %X")
    match_object = re.match("[a-zA-Z]+", name)  

    if match_object:
        clean_name = match_object.group(0)
    else:
        clean_name = "Friend" 

    return f"Hello there, {clean_name}! It's {formatted_now}" 
  

app.run(host='0.0.0.0', port=81)
```