var warrior1 = {
    name: 'Zigs',
    class: 'wizard',
    life: 10,
    damage: 5,
};

var warrior2 = {
    name: 'Jinx',
    class: 'adk',
    damage: 2,
    life: 12,
};

function figth(warrior) {
    if (this.life !== undefined) {
        this.life = this.life - warrior.damage;
    }
}

warrior1.attack = figth(warrior2);
warrior2.attack = figth(warrior1);

console.log(warrior1.life, warrior1.name);
console.log(warrior2.life, warrior2.name);