/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var monkeyGen = function (name, species, food){
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
	this.foodsEaten.push(food);
}

monkeyGen.prototype.introduce = function() {
	console.log('Hi my name is ' + this.name + ', and I am from the ' + this.species + ' family. The last thing I ate was ' + this.foodsEaten);
};

var monkey1 = new monkeyGen('George', "Rhesus", 'Genes');
var monkey2 = new monkeyGen('Sebastian', 'Gorilla', 'People');
var monkey3 = new monkeyGen('Frederic', 'Marsoupial', 'Bananas');

monkeyGen.prototype.eatSomething = function(food) {
	this.foodsEaten.push(food);

};

monkey1.eatSomething('pants');
monkey2.eatSomething('blah');
monkey3.eatSomething('bleg');

monkey1.introduce();
monkey2.introduce();
monkey3.introduce();





