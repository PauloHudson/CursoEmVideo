# salario = int(input('digite seu salário: '))
# idade = int(input('digite sua idade: '))

# if(salario > 40000 and idade > 18 ):
#     print('aprovado')
# else:
#     print("reprovado")

# teAmo = "EuteAmo"
# print(teAmo[2])

# array = ["oi", "iu", "te amo"]

# for elemento in array:
#     for i in range(10):
#         print(elemento)

nome = 'tiao'
idade = 20
print('tiao tem %d anos' % idade )
print(' %s tem 20 anos de idade' % nome)

numero = 20
print("[%01d]" % numero)

dinheiro = 52.34
# pulando as casas em relação ao tamano que coloquei....
print('%s tem %d anos de idade e R$%5.1f' % (nome, idade, dinheiro))
print(f'{nome} tem {idade} anos de idade e em sua carteira R${dinheiro:6.2f}')