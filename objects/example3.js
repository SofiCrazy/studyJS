let warrior1 = {
    name: 'Zigs',
    class: 'wizard',
    life: 10,
    damage: 5,
};

let warrior2 = {
    name: 'Jinx',
    class: 'adk',
    damage: 2,
    life: 12,
};

function figth(warrior) {
    if (warrior.damage !== undefined) {
        this.life = this.life - warrior.damage;
    }
}

warrior1.attack = figth();
warrior1.attack(warrior2);
console.log(warrior1.life, warrior1.name);


