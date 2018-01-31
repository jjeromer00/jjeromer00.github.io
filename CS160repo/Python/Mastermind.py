import random

print ('MASTERMIND \n')

print ('GOAL: Find the color code in 8 or less trys.\n')

print ('Please, enter your color code.\nYour choices for color are R for red, O for orange, G for green, and B for blue.\n(NOTE: NOT caps sensitive)')

colors = ["R", "O", "G", "B"]
trys = 0
game = True

key = random.sample(colors,4)	

while game:
	rightAns = ""
	color_guess = ""
	player_guess = input().upper()
	trys += 1
	
	
	if len(player_guess) != len(key):
		print ('\nThe code has four colors. Try again!')
		continue
	for i in range(4):
		if player_guess[i] not in colors:
			print ('\n That Color is not in the game!')
			continue
			
	
	if rightAns != 'XXXX':
		for i in range(4):
			if player_guess[i] == key[i]:
				rightAns += 'X'
			if  player_guess[i] != key[i] and player_guess[i] in key:
				color_guess += 'O'
		print (rightAns +  color_guess + '\n')		
		
	if rightAns == 'XXXX':
		print ('Good Job, You  only needed ' + str(trys) + ' trys to win.')
		game = False
		
	if trys >= 1 and trys <8 and rightAns != "XXXX":
		print ("Next try: ")
	elif trys >= 8:
		print ("You Lost! The code was: " + str(key))	

	
	while game == False:
		finish_game = input('\nDo you want to play again (Y/N)?').upper()	
		trys = 0
		if finish_game =='N':
			print ('Good Bye :)')
		elif finish_game == 'Y':
			game = True
			print ('Guess the secret code: ')

