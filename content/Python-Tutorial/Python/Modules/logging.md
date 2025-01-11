[Logging HOWTO — Python 3.11.4 documentation](https://docs.python.org/3/howto/logging.html)
[Python Logging Basics - The Ultimate Guide To Logging](https://www.loggly.com/ultimate-guide/python-logging-basics/)
[The Python logging module: How logging to file works - IONOS](https://www.ionos.com/digitalguide/websites/web-development/python-logging/)
[Logging in Python - MachineLearningMastery.com](https://machinelearningmastery.com/logging-in-python/)
[Python Logging - Simplest Guide with Full Code and Examples | ML+](https://www.machinelearningplus.com/python/python-logging-guide/)
[Python Logging Basics: How-To Tutorial, Examples & More - Sematext](https://sematext.com/blog/python-logging/)
[Python Logging Guide: The Basics - CrowdStrike](https://www.crowdstrike.com/guides/python-logging/)

__flexible framework for logging messages and events in Python applications__

|Method/Attribute|Description|
|---|---|
|`logging.debug(msg, *args, **kwargs)`, `info()`, `warning()`, `error()`, `critical()`|Log a debug, info, warning, error, critical message.|
|`logging.getLogger(name=None)`|Get a logger instance with the specified name.|
|`logging.basicConfig(**kwargs)`|Perform basic configuration of the logging system.|
|`logging.Formatter(fmt=None, datefmt=None, style='%')`|A flexible formatter for log records.|
|`logging.FileHandler(filename, mode='a', encoding=None, delay=False)`|Handler class for logging to a file.|
|`logging.StreamHandler(stream=None)`|Handler class for logging to a stream.|
|`logger.setLevel(level)`|Set the logging level for the logger.|
|`logger.addHandler(hdlr)`|Add a handler to the logger.|
|`logger.removeHandler(hdlr)`|Remove a handler from the logger.|
|`logger.debug(msg, *args, **kwargs)`, `info()`, `warning()`, `error()`, `critical()`, `exception()`|Log a debug, info, warning, error, critical, exception message using the logger.|
|`logger.log(level, msg, *args, **kwargs)`|Log a message with the specified level using the logger.|
|`logger.propagate`|Boolean indicating if messages should be passed to higher-level loggers.|