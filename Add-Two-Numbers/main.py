# Tarea base: sumar dos números
numero1 = int(input("Escribe el primer número: "))
numero2 = int(input("Escribe el segundo número: "))

resultado = numero1 + numero2
print("Suma:", resultado)

# Retos extra (después de la tarea base, para no romper la calificación automática)
numero3 = int(input("Escribe un tercer número: "))

resta = numero1 - numero2
multiplicacion = numero1 * numero2
modulo = numero1 % numero2
suma_tres = numero1 + numero2 + numero3

print("Resta:", resta)
print("Multiplicación:", multiplicacion)

if numero2 != 0:
    division = numero1 / numero2
    print("División:", division)
else:
    print("No se puede dividir entre cero")

print("Módulo:", modulo)
print("Suma de 3 números:", suma_tres)