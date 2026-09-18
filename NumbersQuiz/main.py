def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def trivia_fetch(num):
    paridad = "par" if num % 2 == 0 else "impar"
    primo = "es" if es_primo(num) else "no es"
    divisores = [i for i in range(1, num + 1) if num % i == 0] if num > 0 else []
    suma_digitos = sum(int(d) for d in str(abs(num)))

    texto = (
        f"{num} es {paridad}. {num} {primo} un numero primo. "
        f"Tiene {len(divisores)} divisores. "
        f"La suma de sus digitos es {suma_digitos}."
    )

    trivia = {
        "number": num,
        "text": texto
    }

    return trivia


def main():
    numero = int(input("Ingresa un numero: "))
    trivia = trivia_fetch(numero)
    print(trivia)


if __name__ == "__main__":
    main()