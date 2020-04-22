
var passwords = ["HELLO WORLD", "JAVASCRIPT", "INFORMATYKA", "SZUBIENICA", "HTML I  CSS"];

var password = "";

password = passwords[Math.floor(Math.random() * passwords.length)];

console.log(password);

var alfabet = new Array(35);

var alfaString = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";


var yes = new Audio("sound/yes.wav");
var no = new Audio("sound/no.wav");


var tmToLose = 0;

for(i=0; i<35; i++){
	alfabet[i] = alfaString.charAt(i);
}

password = password.toUpperCase();

var passHiden = "";
var length = password.length;

for(i=0; i<length; i++){
	
	if(password.charAt(i) == " ")passHiden += " ";
	else passHiden += "-";
	
	
}

function showPasswd(){
	
	document.getElementById("plansza").innerHTML = passHiden;	
}

window.onload = start;


String.prototype.setChar = function(pos, charIn){
	
	if(pos > this.length - 1) return this.toString();
	else return this.substr(0, pos) + charIn + this.substr(pos+1);	
}


function checkInGame(nr)
{
	var ok = false;
	
	for(i=0; i<length; i++)
	{
		if(password.charAt(i) == alfabet[nr])
		{
			passHiden = passHiden.setChar(i, alfabet[nr]);
			ok = true;
		}
	}

	if(ok == true){
		
		yes.play();
		
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00B800";
		document.getElementById(element).style.cursor = "default";
	}
	else{
		
		no.play();
		
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #B80000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick", ";");
		
		tmToLose++;
		var photo = "img/s"+tmToLose+".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+photo+'" alt="szubienica" />';
	}
	
	showPasswd();
	
	if(passHiden == password){
		document.getElementById("alfabet").innerHTML = "WYGRANA!!! Gratulacje!!! :)"+
		'<br/><br/><span class="reset" onclick="location.reload()"> JESZCZE RAZ? </span>';
	}
	
	if(tmToLose >= 9){
		document.getElementById("alfabet").innerHTML = "Niestety, przegrałeś :("+'<br/> Prawidłowe hasło to: ' + password +
		'<br/><br/> <span class="reset" onclick="location.reload()"> JESZCZE RAZ? </span>';
	}
	
}





function start(){


	
	var letters = "";
	
	for(i=0; i<35; i++){
		var element = "lit" + i;
		letters = letters + '<div id="'+element+'" class="letter" onclick="checkInGame('+i+')">'+ alfabet[i] +' </div>';
		
		if((i+1) % 7 == 0) letters += '<div style="clear:both;"></div>';
		
	}
	
	document.getElementById("alfabet").innerHTML = letters;
	
	
	showPasswd();
}






