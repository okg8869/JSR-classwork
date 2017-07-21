$(document).ready(function(){

	var farm = document.querySelector('.farm');
	var FarmAnimals = [];

	function FarmAnimal(name, image, sound){
		this.animal = name;
		this.animalImage = image;
		this.animalSound = sound;
	};

	FarmAnimal.prototype.talk = function(){
		alert("I say " + this.animalSound);
	};

	function Cow(name){
		FarmAnimal.call(this, name, "https://www.quia.com/files/quia/users/meierirv/beefcuts/Small-End-Steak", "moo");
	}
	Cow.prototype = Object.create(FarmAnimal.prototype);

	function Chicken(name){
		FarmAnimal.call(this, name, "http://www.telegraph.co.uk/content/dam/news/2016/09/04/2107733_Roast_Chicken-small_trans_NvBQzQNjv4Bqs8gz-KdT34YfCTwe09TYahSmjtmXiu-yWDUYongI8ac.jpg", "cluck cluck");
	}
	Chicken.prototype = Object.create(FarmAnimal.prototype);

	function Pig(name){
		FarmAnimal.call(this, name,  "https://themeathouseblog.files.wordpress.com/2013/04/cooked-bacon-small.jpg", "oink");
	}
	Pig.prototype = Object.create(FarmAnimal.prototype);

	var cow1 = new Cow("Bessie");
	var chicken1 = new Chicken("Crispy");
	var pig1 = new Pig("Chops");

	FarmAnimals.push(cow1);
	FarmAnimals.push(chicken1);
	FarmAnimals.push(pig1);

	cow1.talk();

	FarmAnimals.forEach(function(animal) {
		var animalElement = document.createElement('div');
		animalElement.style.backgroundImage = 'url(' + animal.animalImage + ')'
		var bottom = Math.floor(Math.random() * 50);
  		animalElement.style.bottom = bottom + '%';
  		var left = Math.floor(Math.random() * 90)
  		animalElement.style.left = left + '%';
  		animalElement.classList.add('animal')
  		animalElement.onclick = function() {
  		}
  		farm.appendChild(animalElement)
	});
});
