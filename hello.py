def say_hello(name):
    salutation = "Hello, " + name
    print(salutation)

say_hello("VS Code")
from datetime import datetime

def say_day_of_week(date):
    day_of_week = date.strftime("%A")
    print(f"Today is {day_of_week}")

say_day_of_week(datetime.date.today())
