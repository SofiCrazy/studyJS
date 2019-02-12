let zigs = {
    name: 'zigs',
    class: 'wizard',
    life: 10,
    damage: 2,
};

let jinx = {
    name: 'Jinx',
    class: 'adk',
    damage: 2,
    life: 12,
};


console.log(zigs.life, zigs.name);
console.log(jinx.life, jinx.name);

/**
 * Данный метод возврщает boolean значение
 * True - если персонаж жив
 * False - если нет
 */
function isLife() {
    //TODO: Софи напиши пожалуйста реализацию этого метода
}

//TODO: Соня) как думаешь где в этом методе можно использовать метод isLife?
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

//TODO: Софи добавь метод isLife для zigs и jinx
zigs.attack = figth;
jinx.attack = figth;

zigs.attack(jinx);
console.log(zigs.life, zigs.name);
console.log(jinx.life, jinx.name);
console.clear();

