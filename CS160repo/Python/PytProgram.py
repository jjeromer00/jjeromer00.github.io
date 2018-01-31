#
# Python Program
#
#
print("Decimal Calculator")
a = input("Enter First Number: ")
a = float(a)
b = input("Enter Second Number: ")
b = float(b)
x = input("Now chose your operator 1)/ 2)* 3)- 4)+: ")


if x == 1:
    print(float(a / b))
elif x == 2:
    print(float(a * b))
elif x == 3:
    print(float(a - b))
elif x == 4:
    print(float(a - b))
else:
    print("Error")
