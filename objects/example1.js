var cat = {
    name: 'Vasya',
    age: 5,
    color: 'black',
    satiety: 0,
    life: 9,
    getInfo: function () {
        console.log('\n');
        return `Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}`
    }
};

var fish = {
    size: 2,
    power: 1,
};

var bird = {
    size: 1,
    power: 3,
};

var mouse = {
    size: 1,
};
cat.eat = function (food) {
    if (food.power !== undefined) {
        this.life = this.life - food.power;
    }
    this.satiety = this.satiety + food.size;
};
console.log(cat.life);
cat.eat(fish);
console.log(cat.life);
cat.eat(bird);
console.log(cat.life);
cat.eat(mouse);
console.log(cat.life);


