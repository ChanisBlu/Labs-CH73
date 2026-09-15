def addmultiplenumbers(numbers):
    total = 0
    for numero in numbers:
        total += numero
    return total

def multiplymultiplenumbers(numbers):
    resultado = 1
    for numero in numbers:
        resultado *= numero
    return resultado

def isitaninteger(num):
    if isinstance(num, int):
        return True
    if isinstance(num, float) and num.is_integer():
        return True
    return False

def isiteven(num):
    if isitaninteger(num):
        return num % 2 == 0
    return False