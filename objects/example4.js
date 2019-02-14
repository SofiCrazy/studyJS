const jinx = createHero("Jinx", 1, 7, 3);
const zigs = createHero("Zigs", 1, 7, 2);

function createHero(name, damage, life, armor) {
    const hero = {
        name: name,
        damage: damage,
        life: life,
        armor: armor,
    };
    hero.attack = fight;
    hero.isLife = isLife;
    return hero;

}

function isLife() {
    return this.life > 0

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


zigs.attack(jinx);
console.log('\n==========\n');
