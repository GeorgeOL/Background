// instantiation
class Player{
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Salut, sunt ${this.name}, sunt ${this.type} !`)
    }
}

class Mage extends Player{
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Huaaa, sa-i rupem ba ${this.type}`);
    }
}

const Mage1 = new Mage(`Ion`, `fire`);
const Mage2 = new Mage(`Andra`, `healer`);