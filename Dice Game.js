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
		return char;
	}
	else if(mob.hp <= 0){
		alert("The monster has been slain!");
		return char;
	}
	else{
		char = getAttackSwitch(char, mob);
	}
	return char;
}

function getAttackSwitch(character, monster){
	var char = character;
	var mob = monster;
	var userChoice = "";
	var mobHPLeft;
	var charHPLeft;
	var run;
	var runChance;

	userChoice = prompt("Enter 1: ATTACK" + "\n" + "Enter 2: USE ITEM" + "\n" + "Enter 3: RUN");

	switch(userChoice){

			case "1":
				mobHPLeft = getAttack(char, mob);
				charHPLeft = getMobAttack(mob, char);
				char = getFightMenu(charHPLeft, mobHPLeft);
				return char;

			case "2":
				charHPLeft = getUseItem(char);
				char = getFightMenu(charHPLeft, mob);
				return char;

			case "3":
				run = rollD10();
				char = getRunCheck(run, char, mob);
				return char;

			default:
				alert("You did not choose a correct number.  Please choose again.");
				char = getAttackSwitch(char, mob);
				return char;
		}
	}

function getUseItem(character){
	var char = character;
	
	if(char.hp > 1 && char.hp < 100){
		if(char.inventory > 0){
			char.hp + 25
			char.inventory.pop();
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
		hp: 150,
		mp: 150,
		att: 10,
		mag: 50,
		def: 15,
		mdef: 75,
		inventory: []
	 	}
	return mage;
}

function getFighter(){
	var fighter = {
	hp: 250,
	mp: 50,
	att: 75,
	mag: 25,
	def: 20,
	mdef: 25,
	inventory: []
	}
	return fighter;
}

// need to input more potion
function getPotion(bossesKilled){
	var potion = {
		name: "Heal Pot"
	}
	return potion;
}

// Need to input more gear
function getGear(bossesKilled){
	var potion = {
		name: "Heal Pot"
	}
	return potion;
}


function getRat(){
	var rat = {
		name: "rat",
		hp: 25,
		mp: 0,
		att: 25,
		mag: 0,
		def: 5,
		mdef: 5
	}
	return rat;
}

function getCobra(){
	var cobra = {
		name: "cobra",
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
		name: "tiger",
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
		name: "dragon",
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
	var charHPLeft;

	alert("You rolled " + rollNumber);
	alert("The monster rolled " + monsterSpeed);

	if(rollNumber > monsterSpeed){
		alert("You were ran faster than the monster and got away.");
		mob.hp = 0;
		char = getFightMenu(char, mob);
		return char;
	}
	else{
		alert("What are you? A turtle?");
		charHPLeft = getMobAttack(mob, char);
		char = getFightMenu(charHPLeft, mob);
		return char;
	}
}

function getItemMonster(bossCount){
	var itemOrMonster = {};
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
			console.log("You found a potion.")
			potion = getPotion();
			return potion;
		}
		else if(grade <= 8){
			alert("You found some gear.")
			console.log("You found a potion.")
			potion = getGear();
			return potion;
		}
	}
}

function getTierTwoMonsters(chance){
	var rollChance = chance;
	var monster = {};

	if(chances < 5){
			monster = getRat();
			alert("You've encountered a crazied rat.")
			console.log("A crazied rat appeared.");
			return monster;
		}
		else{
			monster = getCobra();
			alert("You've encountered a venomous cobra.")
			console.log("A venomous cobra appeared.");
			return monster;
		}
}

function getTierThreeMonsters(chance){
	var chances = chance;
	var monster = {};

	if(chances < 5){
		monster = getRat();
		alert("You've encountered a crazied rat.")
		console.log("A crazied rat appeared.");
		return monster;
	}
	else if(chances <= 7 && chances >= 5){
		monster = getCobra();
		alert("You've encountered a venomous cobra.")
		console.log("A venomous cobra appeared.");
		return monster;
	}
	else{
		monster = getTiger();
		alert("You've encountered a man-eating tiger.")
		console.log("A man-eating tiger appeared.");
		return monster;
	}
}

function getMonster(bossCount){
	var monster = {};
	var chances = {};
	var bossesKilled = bossCount;
	
	if(bossesKilled < 1){
		monster = getRat();
		alert("You've encountered a crazied rat.")
		console.log("A crazied rat appeared.");
		return monster;
	}
	else if (bossesKilled < 2){
		chances = rollD6();
		monster = getTierTwoMonsters(chances);
		return monster;
	}
	else{
		chances = rollD8();
		monster = getTierThreeMonsters(chances);
		return monster;
	}
}

function getAttack(character, monster){
	var attackChance;
	var char = {};
	var mob = {};
	var damage = 0;
	char = character;
	mob = monster;

	alert("Press OK to roll the D12 your attack rating.");
	attackChance = rollD12();
	alert("You rolled " + attackChance);

	if(attackChance > 4){
		damage = char.att - mob.def;
			if(damage >= 1){
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
		console.log("You missed!")
		return mob;
	}
}

function getMobAttack(monster, character){
	var dodgeChance;
	var mob = {};
	var char = {};
	var damage = 0;
	mob = monster;
	char = character;

	alert("Press OK to roll the D20 for your chance to dodge the attack.")
	dodgeChance = rollD20();
	alert("You rolled " + dodgeChance);

	if(dodgeChance > 15){
		alert("Your pro at dancing around monster attacks.");
		return char;
	}
	else{
		damage = mob.att - char.def;
			if(damage >= 1){
				char.hp -= damage;
				return char;
			}
			else{
				alert("The monster did no damage.")
				return char;
			}
	}
}

function countMoveSteps(){
	var moveDistance

	alert("Press to roll the D4 for your move distance.");
	moveDistance = rollD4();
	alert("You moved " + moveDistance);
	console.log(moveDistance);
	return moveDistance;
}

function runGame(chosenChar){
	var character = {};
	var currentCharacter = {};
	var rollNum;
	var moveCount = 0;
	var moveDistance;
	var runIntoChance;
	var potion = {
		name: "Heal Pot"
	}

	character = chosenChar;

	console.log("Your stats are as follows:" + "HP:" + character.hp + ", " + "MP:" + character.mp + ", " + "Attack: " + character.att + ", " + "Magic Attack: " + character.mag + ", " + "Defense: " + character.def + ", " + "Magic Defense: " + character.mdef);

	while(true){
		runIntoChance = {};

		if(character.hp <= 0){
			alert("You died! NO HP! OMG! GAMEOVER!")
			return false;
		}
		
		moveDistance = countMoveSteps();
		moveCount += moveDistance;
		
		if(moveCount % moveDistance === 0){
			runIntoChance = getItemMonster(0);
		}
		else{
			runIntoChance = 0;
		}

		if(runIntoChance.name === potion.name){
			character.inventory += runIntoChance;
		}
		else if(runIntoChance === 0){
			alert("Didn't run into anything.");
			console.log("Didn't run into anything.")
		}
		else{
			currentCharacter = getFightMenu(character, runIntoChance);
			character = currentCharacter;
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
			console.log("You have chosen a mage!");
			gameOn = runGame(choose);
			break;
		case "fighter":
			choose = getFighter();
			console.log("You have chosen a fighter!");
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
