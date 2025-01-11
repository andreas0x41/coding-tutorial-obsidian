[argparse — Parser for command-line options, arguments and sub-commands — Python 3.11.4 documentation](https://docs.python.org/3/library/argparse.html)
[A Simple Guide To Command Line Arguments With ArgParse | by Sam Starkman | Towards Data Science](https://towardsdatascience.com/a-simple-guide-to-command-line-arguments-with-argparse-6824c30ab1c3)
[Python-Tutorial für ein Kommandozeilen-Tool mit argparse - DataBraineo - Data Science Blog](https://databraineo.com/ki-training-resources/python/python-tutorial-fuer-ein-kommandozeilen-tool/)
[A Guide to the Python argparse Module | LearnPython.com](https://learnpython.com/blog/argparse-module/)
[argparse in Python - Scaler Topics](https://www.scaler.com/topics/argparse-python/)
[What is argparse add_help in Python?](https://www.educative.io/answers/what-is-argparse-addhelp-in-python)

__Simplifies the process of defining and handling command-line arguments and options__

|Method/Attribute|Description|
|---|---|
|`argparse.ArgumentParser(prog=None, usage=None, description=None, epilog=None)`|Create an ArgumentParser object.|
|`.add_argument(name or flags, ...)`|Add an argument to the parser.|
|`.parse_args(args=None, namespace=None)`|Parse the command-line arguments.|
|`.parse_known_args(args=None, namespace=None)`|Parse the known command-line arguments.|
|`.add_argument_group(name=None, **kwargs)`|Create a new argument group.|
|`.add_mutually_exclusive_group(required=False)`|Create a new mutually exclusive group.|