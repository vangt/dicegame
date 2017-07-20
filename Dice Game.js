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

function getFightMenu(character){
	var userChoice = prompt("Enter 1: ATTACK" + "<br>" + "Enter 2: USE ITEM" + "<br>" + "Enter 3: RUN")
	var char = character;

	switch(userChoice){

		case "1":
			userChoice = getAttack(character);
			break;

		case "2":
			userChoice = getUseItems(character);
			break;

		case "3":
			userChoice = rollD10();
			userChoice = getRunCheck(userChoice);
			break;

		default:
			alert("You did not choose a correct number.  Please choose again.");
			getFighetMenu();
			break;
	}
}

function getUseItem(character){
	
}

function getMage(){
	var mage = {
	 hp: 75,
	 mp: 150,
	 att: 10,
	 mag: 50,
	 def: 25,
	 mdef: 75;
	 inventory: {}
	}
	return mage;
}

function getFighter(){
	var fighter = {
	hp: 150,
	mp: 50,
	att: 75,
	mag: 25,
	def: 75,
	mdef: 25,
	inventory: {}
	}
	return fighter;
}

// need to input more potion
function getPotion(bossesKilled){
	var item = ["potion"]
	return item;
}

// Need to input more gear
function getGear(bossesKilled){
	var item = ["potion"]
	return item;
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
	rollNum = (Math.random() * 3) + 1;
	return rollNum.toFixed(0);
}

function rollD6(){
	var rollNum;
	rollNum = (Math.random() * 5) + 1;
	return rollNum.toFixed(0);
}

function rollD8(){
	var rollNum;
	rollNum = (Math.random() * 7) + 1;
	return rollNum.toFixed(0);
}

function rollD10(){
	var rollNum;
	rollNum = (Math.random() * 9) + 1;
	return rollNum.toFixed(0);
}

function rollD12(){
	var rollNum;
	rollNum = (Math.random() * 11) + 1;
	return rollNum.toFixed(0);
}

function rollD20(){
	var rollNum;
	rollNum = (Math.random() * 19) + 1;
	return rollNum.toFixed(0);
}

function getRunCheck(userRoll){
	var rollNumber = userRoll;
	var monsterSpeed = rollD6();

	if(rollNumber > monsterSpeed);{
		rollNum = deleteCurrentMob();
		rollNum = alert("You were ran faster than the monster and got away.");
	}
	else{
		rollNum = alert("To slow.")
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
	var item;
	var killCount = bossCount;
	var grade;
	grade = rollD20();

	if(killCount < 1){
		if(grade > 8){
			item = getPotion();
			return item;
		}
		else if(grade <= 8){
			item = getGear();
			return gear;
		}
	}
}

function getMonster(bossCount){
	var monster = [];
	var chances;
	var bossesKilled = bossCount;
	if(bossesKilled < 1){
		monster = getRat();
		document.write("A crazied rat appeared.");
		return monster;
	}
	else if(bossesKilled < 2){
		chances = rollD6();
		if(chances < 5){
			monster = getRat();
			document.write("A crazied rat appeared.");
			return monster;
		}
		else{
			monster = getCobra();
			document.write("A venomous cobra appeared.");
			return monster;
		}
	}
	else{
		chances = rollD8();
		if(chances < 5){
			monster = getRat();
			document.write("A crazied rat appeared.");
			return monster;
		}
		else if(chances <= 7 && chances >= 5){
			monster = getCobra();
			document.write("A venomous cobra appeared.");
			return monster;
		}
		else{
			monster = getTiger();
			document.write("A man-eating tiger appeared.");
			return monster;
		}
	}
}

function getAttack(){
	var attack;
	attack = rollD12();
	return attack;
}

function getLucky(){
	var luck;
	luck = rollD20();
	return luck;
}

function runGame(chosenChar){
	var character;
	var rollNu;
	var moveCount;
	var moveDistance;
	var runIntoChance;
	var monster;
	character = chosenChar;
	document.write("Your stats are as follows:<br>" + "HP :" + character[0] + "<br>" + "MP :" + character[1] + "<br>" + "Attack: " + character[2] + "<br>" + "Magic Attack: " + character[3] + "<br>" + "Defense: " + character[4] + "<br>" + "Magic Defense: " + character[5]);

	while(true){

		if(character.hp === 0){
			alert("You died! NO HP! OMG!")
			return false;
		}
		else{
			alert("Press to roll for your move distance.");
			moveDistance = rollD4();
			alert("You moved " + moveCount;)
			moveCount += moveDistance;
		}

		if(moveCount % moveDistance === 0){
			runIntoChance = getItemMonster();
		}
		else{
			return true;
		}

		if(runIntoChance === )
	}
}

function getHPLeft(hp, totalHP){
	var hitPointsLeft = hp;
	var totalHP = totalHP;
	if(hitPointsLeft < totalHP){
		return false;
	}
	else{
		return true;
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