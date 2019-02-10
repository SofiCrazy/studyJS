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
    if (this.life !== undefined) {
        this.life = this.life - warrior.damage;
    }
}

warrior1 = figth(warrior2);
console.log(this.life, this.name);

warrior2 = figth(warrior1);
console.log(this.life, this.name);


