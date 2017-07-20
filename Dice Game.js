"use strict"

function chooseCharacter(character){
	var player = character;
	var selction =[]
	if(player === mage){
		selction = getMage();
		return selction;
	}
	else{
		selction = getFighter();
		return selction;
	}
}

function getFightMenu(character, monster){
	var char = character;
	var mob = monster;

	if(char.hp <= 0){
		alert("You have been beaten!")
		return false;
	}
	else if(mob.hp <= 0){
		alert("The monster has been slain!");
		return char;
	}
	else{
		getAttackSwitch(char, mob);
	}
}

function getAttackSwitch(character, monster){
	var char = character;
	var mob = monster;
	var userChoice = "";
	var charATT;
	var mobATT;
	var run;
	var runChance;

	userChoice = prompt("Enter 1: ATTACK" + "\n" + "Enter 2: USE ITEM" + "\n" + "Enter 3: RUN");

	switch(userChoice){

			case "1":
				charATT = getAttack(char, mob);
				mobATT = getMobAttack(mob, char);
				getFightMenu(mobATT, charATT);
				break;

			case "2":
				userChoice = getUseItem(char);
				getFightMenu(char, mob);
				break;

			case "3":
				run = rollD10();
				runChance = getRunCheck(run, char, mob);
				break;

			default:
				alert("You did not choose a correct number.  Please choose again.");
				getAttackSwitch(char, mob);
				break;
		}
	}

function getUseItem(character){
	var char = character;
	
	if(char.hp > 1 && char.hp < 100){
		if(char.inventory.potion > 0){
			char.hp + 25
				if(char.hp > 100){
					char.hp = 100;
					alert("You're full hp!")
					return char;
				}
				alert("You've healed 25 hp.")
			return char;
		}
		else{
			alert("You have no potions.");
			return char;
		}
	}
	else{
		alert("You are full HP!")
		return char;
	}
}

function getMage(){
	var mage = {
	 hp: 100,
	 mp: 150,
	 att: 10,
	 mag: 50,
	 def: 25,
	 mdef: 75,
	 inventory: {
	 	potions: 0
	 }
	}
	return mage;
}

function getFighter(){
	var fighter = {
	hp: 100,
	mp: 50,
	att: 75,
	mag: 25,
	def: 75,
	mdef: 25,
	inventory: {
		potion: 0
	}
	}
	return fighter;
}

// need to input more potion
function getPotion(bossesKilled){
	var potion = {
		potion: 1
	}
	return potion;
}

// Need to input more gear
function getGear(bossesKilled){
	var potion = {
		potion: 1
	}
	return potion;
}


function getRat(){
	var rat = {
		hp: 25,
		mp: 0,
		att: 15,
		mag: 0,
		def: 5,
		mdef: 5
	}
	return rat;
}

function getCobra(){
	var cobra = {
		hp: 50,
		mp: 50,
		att: 10,
		mag: 10,
		def: 10,
		mdef: 10
	}
	return cobra;
}

function getTiger(){
	var tiger = {
	hp: 200,
	mp: 200,
	att: 100,
	mag: 75,
	def: 100,
	mdef: 75
	}
	return tiger;
}

function getDragon(){
	var dragon = {
	hp: 500,
	mp: 500,
	att: 150,
	mag: 150,
	def: 150,
	mdef: 150
	}
	return dragon;
}

function rollD4(){
	var rollNum;
	rollNum = Math.round((Math.random() * 3) + 1);
	return rollNum;
}

function rollD6(){
	var rollNum;
	rollNum = Math.round((Math.random() * 5) + 1);
	return rollNum;
}

function rollD8(){
	var rollNum;
	rollNum = Math.round((Math.random() * 7) + 1);
	return rollNum;
}

function rollD10(){
	var rollNum;
	rollNum = Math.round((Math.random() * 9) + 1);
	return rollNum;
}

function rollD12(){
	var rollNum;
	rollNum = Math.round((Math.random() * 11) + 1);
	return rollNum;
}

function rollD20(){
	var rollNum;
	rollNum = Math.round((Math.random() * 19) + 1);
	return rollNum;
}

function getRunCheck(userRoll, character, monster){
	var rollNumber = userRoll;
	var char = character;
	var mob = monster;
	var monsterSpeed = rollD6();
	var result;

	if(rollNumber > monsterSpeed){
		alert("You were ran faster than the monster and got away.");
		mob.hp = 0;
		getFightMenu(char, mob);
	}
	else{
		alert("To slow.");
		result = getMobAttack(mob, char);
		getFightMenu(result, mob);
	}
}

function getItemMonster(bossCount){
	var itemOrMonster;
	var bossKillCount = bossCount;
	itemOrMonster = rollD10();
	if(itemOrMonster < 5){
		itemOrMonster = getItem(bossKillCount);
		return itemOrMonster;
	}
	else{
		itemOrMonster = getMonster(bossKillCount);
		return itemOrMonster;
	}
}

function getItem(bossCount){
	var potion;
	var killCount = bossCount;
	var grade;
	grade = rollD20();

	if(killCount < 1){
		if(grade > 8){
			alert("You found a potion.")
			document.write("You found a potion.<br>")
			potion = getPotion();
			return potion;
		}
		else if(grade <= 8){
			alert("You found some gear.")
			document.write("You found a potion.<br>")
			potion = getGear();
			return potion;
		}
	}
}

function getMonster(bossCount){
	var monster;
	var chances;
	var bossesKilled = bossCount;
	if(bossesKilled < 1){
		monster = getRat();
		alert("You've encountered a crazied rat.")
		document.write("A crazied rat appeared.");
		return monster;
	}
	else if(bossesKilled < 2){
		chances = rollD6();
		if(chances < 5){
			monster = getRat();
			alert("You've encountered a crazied rat.")
			document.write("A crazied rat appeared.");
			return monster;
		}
		else{
			monster = getCobra();
			alert("You've encountered a venomous cobra.")
			document.write("A venomous cobra appeared.");
			return monster;
		}
	}
	else{
		chances = rollD8();
		if(chances < 5){
			monster = getRat();
			alert("You've encountered a crazied rat.")
			document.write("A crazied rat appeared.");
			return monster;
		}
		else if(chances <= 7 && chances >= 5){
			monster = getCobra();
			alert("You've encountered a venomous cobra.")
			document.write("A venomous cobra appeared.");
			return monster;
		}
		else{
			monster = getTiger();
			alert("You've encountered a man-eating tiger.")
			document.write("A man-eating tiger appeared.");
			return monster;
		}
	}
}

function getAttack(character, monster){
	var attackChance;
	var char = character;
	var mob = monster;
	var damage = 0;

	alert("Press OK to roll the D12 your attack rating.");
	attackChance = rollD12();
	alert("You rolled " + attackChance);

	if(attackChance > 4){
		damage = char.att - mob.def;
			if(damage >= 0){
				alert("You did " + damage);

				mob.hp -= damage;
	
				return mob;
			}
			else{
				alert("You did no damage.")
				return mob;
			}
	}
	else{
		alert("You missed!");
		document.write("You missed!<br>")
		return mob;
	}
}

function getMobAttack(monster, character){
	var dodgeChance;
	var mob = monster;
	var char = character;
	var damage = 0;

	alert("Press OK to roll the D20 for your chance to dodge the attack.")
	dodgeChance = rollD20();
	alert("You rolled " + dodgeChance);

	if(dodgeChance > 15){
		alert("Your pro at dancing around monster attacks.");
		return char;
	}
	else{
		damage = mob.att - char.def;
			if(damage >= 0){
				char.hp -= damage;
				return char;
			}
			else{
				return char;
			}
	}
}

function runGame(chosenChar){
	var character;
	var currentCharacter;
	var rollNum;
	var moveCount = 0;
	var moveDistance = 0;
	var runIntoChance;
	var monster;
	var potion = {
		potion: 1
	}
	character = chosenChar;

	document.write("Your stats are as follows:<br>" + "HP :" + character.hp + "<br>" + "MP :" + character.mp + "<br>" + "Attack: " + character.att + "<br>" + "Magic Attack: " + character.mag + "<br>" + "Defense: " + character.def + "<br>" + "Magic Defense: " + character.mdef + "<br>");

	while(true){

		if(character.hp <= 0){
			alert("You died! NO HP! OMG! GAMEOVER!")
			return false;
		}
		
		alert("Press to roll the D4 for your move distance.");
		moveDistance = rollD4();
		alert("You moved " + moveDistance);
		moveCount += moveDistance;
		

		if(moveCount % moveDistance === 0){
			runIntoChance = getItemMonster(0);
			if(runIntoChance === potion){
				character.inventory.potion += runIntoChance;
			}
			else{
				monster = runIntoChance;
			}
		}
		
		if(runIntoChance === monster){
			currentCharacter = getFightMenu(character, monster);
			character = currentCharacter;
			return true;
		}

	}
}

function getIntroMenu(){
	var choose = prompt("Choose a mage or fighter, or quit to cancel out.");
	choose = choose.toLowerCase();
	var gameOn;

	switch(choose){
		case "mage":
			choose = getMage();
			document.write("You have chosen a mage!<br>");
			gameOn = runGame(choose);
			break;
		case "fighter":
			choose = getFighter();
			document.write("You have chosen a fighter!<br>");
			gameOn = runGame(choose);
			break;
		case "quit":
			break;
		default:
			alert("You didn't choose one of the three.");
			getIntroMenu();
			break;
	}
}

getIntroMenu();