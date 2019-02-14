const zigs = {
    name: 'Zigs',
    class: 'wizard',
    life: 7,
    damage: 1,
    armor: 2,
};

const jinx = {
    name: 'Jinx',
    class: 'adk',
    damage: 1,
    life: 7,
    armor: 3,
};

function isLife() {
    if (this.life > 0) {
        return true;
    } else {
        return false
    }
}

function fight(warrior) {
    console.log("The " + this.name + " fighting with " + warrior.name);
    this.life = this.life + this.armor;
    warrior.life = warrior.life - this.armor;
    while (this.isLife() && warrior.isLife()) {
        this.life = this.life - warrior.damage;
        warrior.life = warrior.life - this.damage;
        console.log(warrior.life, warrior.name);
        console.log(this.life, this.name);
    }
    if (!this.isLife() && !warrior.isLife()) {
        console.log("It is a draw!!!");
        return
    }
    if (!this.isLife()) {
        console.log(this.name + " is a loser");
        console.log(warrior.name + " is a winner")
    }
    if (!warrior.isLife()) {
        console.log(warrior.name + " is a loser");
        console.log(this.name + " is a winner")
    }

}

zigs.attack = fight;
jinx.attack = fight;
zigs.isLife = isLife;
jinx.isLife = isLife;

zigs.attack(jinx);
console.log('\n==========\n');
