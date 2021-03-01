calculate = () => {


var name = document.getElementsByClassName('name')[0];
var startingBid = document.getElementsByClassName('startingBid')[0];
var love_letter = document.getElementById("loveLetter").value;
var education = document.getElementById("education");
var family = document.getElementById("family");
var skills = document.getElementsByClassName('skills');
var ages = document.getElementsByClassName('ages');
var gossips = document.getElementsByClassName('gossips');


if (name.value == '' || startingBid.value == '' || isNaN(startingBid.value)) {
 alert("Please fill the Name and Starting Bid");
 window.location.reload();
}

var price = parseInt(startingBid.value);

price = price * education.value;
price = price * family.value;

var i;
for(i=0;i<4;i++) {
	if (skills[i].checked==true) {
		price += Number(skills[i].value);
	}
}

i=0;
do {
	if (ages[i].checked == true){
		price *= Number(ages[i].value);
	}
	i++
}
while (i < 3){}

var i;
for(i=0;i<3;i++) {
	if (gossips[i].checked==true) {
		if(i==2) {price -= 200;} else{
			price *= Number(gossips[i].value);
		}
	}
}

let person = {
groom_name: name,
groom_price: price,
letter_to_bride: love_letter
}


document.getElementById("result").innerHTML = `Your price for ${person.groom_name.value} 
is ${person.groom_price}, love letter is ${person.letter_to_bride}`;
}

