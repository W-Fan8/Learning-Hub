import __init__
def add(a: int, **kwargs):
    return a * sum(kwargs.values())


