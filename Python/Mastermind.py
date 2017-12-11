import random

print ('MASTERMIND \n')

print ('GOAL: Find the color code it the fewest amount of tries.\n')

print ('Please, enter your color code.\nYour choices for color are R for red, O for orange, G for green, and B for blue.\n(NOTE: NOT caps sensitive)')

colors = ["R", "O", "G", "B"]
trys = 0
game = True

key = random.sample(colors,4)	
print (key)

	
while game:
	correct_color = ""
	guessed_color = ""
	player_guess = input().upper()
	trys += 1
	
	
	if len(player_guess) != len(key):
		print ('\nThe code has four colors. Try again!')
		continue
	for i in range(4):
		if player_guess[i] not in colors:
			print ('\n One or more of those colors are not in the game. Try again!')
			continue
			
	
	if correct_color != 'XXXX':
		for i in range(4):
			if player_guess[i] == key[i]:
				correct_color += 'X'
			if  player_guess[i] != key[i] and player_guess[i] in key:
				guessed_color += 'O'
		print (correct_color +  guessed_color + '\n')		
		
	if correct_color == 'XXXX':
		print ('Good Job, You  only needed ' + str(trys) + ' attempts to guess.')
		game = False
		
	if trys >= 1 and trys <6 and correct_color != "XXXX":
		print ("Next try: ")
	elif trys >= 6:
		print ("You Lost! The code was: " + str(key))	

	
	while game == False:
		finish_game = input('\nDo you want to play again (Y/N)?').upper()	
		trys = 0
		if finish_game =='N':
			print ('Good Bye :)')
		elif finish_game == 'Y':
			game = True
			print ('Guess the secret code: ')

