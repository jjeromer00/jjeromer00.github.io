#Python Rock Paper Scissors
#
#
#
import random
a = random.randint(1,3)
x = input ('Choose, rock paper or scissors: ')
if a == 1:
    a = 'rock'
elif a == 2:
    a = 'paper'
else:
    a = 'scissors'
print ('Computer Picks' , a)
if x == a:
    print('TIE!')
elif x == 'rock' and a == 'paper':
    print('Computer Wins!')
elif x == 'rock' and a == 'scissors':
    print('Player Wins')
elif x == 'paper' and a == 'rock':
    print('Player Wins')
elif x == 'paper' and a == 'scissors':
    print('Computer Wins')
elif x == 'scissors' and a == 'rock':
    print('Computer Wins')
elif x == 'scissors' and a == 'paper':
    print('Player Wins')
else:
    print('Invalid Entry :(')
        
    
