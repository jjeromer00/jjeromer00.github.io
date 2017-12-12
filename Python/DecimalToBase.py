import math

def convertToBase(startVal):
    val = ''
    while startVal >= 0:
        remain = startVal%2
        if remain == 0:
            val ='0' + val
            startVal = startVal / 2
        else:
            val = '1' + val
            startVal = startVal/2
    return val



        

def test():
    print(convertToBase(16, 2) == '10000')
    print(convertToBase(8, 2) == '1000')
    print(convertToBase(1, 2) == '1')



def main():
    inNum = int(input())
    #inBase = int(input())
    baseNum = convertToBase(inNum)
    print(baseNum)

print(0%2)
print(15%6)

#test()
main()
