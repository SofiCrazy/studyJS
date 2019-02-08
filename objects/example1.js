var cat = {
    name: 'Васька',
    age: '5',
    color: 'black',
    getInfo: function () {
        console.log('\n');
        return `Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}`
    }
};

console.log(cat.getInfo());
cat.name = 'Барсик';

console.log(cat.getInfo());