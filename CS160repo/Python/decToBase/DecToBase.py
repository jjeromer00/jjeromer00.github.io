def convertSym(sym):
    uniVal = ord(sym)

    if uniVal in range(48,58):
        resultInt = uniVal - 48
    else:
        resultInt = uniVal - 55

    return resultInt

    

def convertToDec(startVal, inBase):
    power = len(startVal)-1
    resultSum = 0


    for ch in startVal:
        powerOfBase = inBase ** power
        resultSum = resultSum + (convertSym(ch) * powerOfBase)
        power = power - 1

    return resultSum

def test():
    print(convertToDec('0', 2) == 0)
    print(convertToDec('1', 2) == 1)
    print(convertToDec('10', 2) == 2)
    print(convertToDec('11', 2) == 3)
    print(convertToDec('11', 8) == 9)
    print(convertToDec('100', 4) == 16)
    print(convertToDec('132', 4) == 30)
    print(convertToDec('10', 16) == 16)
    print(convertToDec('A0', 16) == 160)
    print(convertSym('0') == 0)

def main():
    inNum = input("Number: ")
    fromBase = int(input("From Base: "))
    decNum = convertToDec(inNum, fromBase)
    print(decNum)

main()
#test()
