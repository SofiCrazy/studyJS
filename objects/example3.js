let warrior1 = {
    name: 'Zigs',
    class: 'wizard',
    life: 10,
    damage: 2,
};

let warrior2 = {
    name: 'Jinx',
    class: 'adk',
    damage: 2,
    life: 12,
};


console.log(warrior1.life, warrior1.name);
console.log(warrior2.life, warrior2.name);

function figth(warrior) {
    while (this.life > 0) {
        this.life = this.life - warrior.damage;
        warrior.life = warrior.life - this.damage;

        console.log(warrior.life, warrior.name);
        console.log(this.life, this.name);

        if (this.life > 0 && warrior.life <= 0) {
            console.log(this.name + " is winner ")
        } else {
            console.log(warrior.name + " is winner ")
        }
    }

};
warrior1.attack = figth;
warrior2.attack = figth;

warrior1.attack(warrior2);
console.log(warrior1.life, warrior1.name);
console.log(warrior2.life, warrior2.name);
console.clear();

