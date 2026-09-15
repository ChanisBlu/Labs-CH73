
#sumar(a, b): entra a y b → se suma a + b → se devuelve el resultado
#restar(a, b): entra a y b → se resta a - b → se devuelve el resultado
#multiplicar(a, b): entra a y b → se multiplica a * b → se devuelve el resultado
#dividir(a, b): entra a y b → se divide a / b → se devuelve el resultado
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Error: no se puede dividir entre cero"
    return a / b

def potencia(base, exponente):
    return base ** exponente

# Pedimos los números al usuario
numero1 = int(input("Escribe el primer número: "))
numero2 = int(input("Escribe el segundo número: "))

print("Suma:", sumar(numero1, numero2))
print("Resta:", restar(numero1, numero2))
print("Multiplicación:", multiplicar(numero1, numero2))
print("División:", dividir(numero1, numero2))

# Bonus: potencia
base = int(input("Escribe la base para la potencia: "))
exponente = int(input("Escribe el exponente para la potencia: "))
print("Potencia:", potencia(base, exponente))