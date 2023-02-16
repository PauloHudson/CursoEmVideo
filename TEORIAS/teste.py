import random

def sorteador():
    valor = 0
    x = random.randint(1, 10)
    while x != valor: 
        valor = int(input('Digite Um Valor: '))
        
    print(f'Parabéns você digitou {valor} e o numero sorteado foi {x}')

sorteador()

    