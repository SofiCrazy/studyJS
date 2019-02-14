let zigs = {
    name: 'zigs',
    class: 'wizard',
    life: 7,
    damage: 1,
};

let jinx = {
    name: 'Jinx',
    class: 'adk',
    damage: 1,
    life: 6,
};

let raptor = {
    name: 'Raptor',
    class: 'Tank',
    damage: 1,
    life: 5,
};



/**
 * Данный метод возврщает boolean значение
 * True - если персонаж жив
 * False - если нет
 */
function isLife() {
    if (this.life > 0) {
        return true;
    } else {
        return false
    }
}

//TODO: Соня) как думаешь где в этом методе можно использовать метод isLife?
function fight(warrior) {
    console.log("The " + this.name + " fighting with " + warrior.name);
    while (this.isLife() && warrior.isLife()) {
        this.life = this.life - warrior.damage;
        warrior.life = warrior.life - this.damage;
        console.log(warrior.life, warrior.name);
        console.log(this.life, this.name);
    }
    if (this.isLife()) {
        console.log(this.name + " is winner")
    } else {
        console.log(this.name + " is loser")
    }
    if (warrior.isLife()) {
        console.log(warrior.name + " is winner")
    } else {
        console.log(warrior.name + "is a loser")
    }

}

//TODO: Софи добавь метод isLife для zigs и jinx
zigs.attack = fight;
jinx.attack = fight;
zigs.isLife = isLife;
jinx.isLife = isLife;
raptor.isLife = isLife;

zigs.attack(jinx);
console.log('\n==========\n');
