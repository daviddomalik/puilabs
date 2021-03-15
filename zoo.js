function Fish(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Fish Icon";
    this.image = "fish.png";
}

function Lion(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Lion Icon";
    this.image = "lion.png";
}

function Parrot(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Parrot Icon";
    this.image = "parrot.png";
}

var animal = [new Fish(), new Lion(), new Parrot()];
var names = ["Nemo", "Simba", "Patchy"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(20);
}

function generateRandomAnimal() {
    let randomIndex = generateRandomIndex(names.length);
    let a = animal[randomIndex];
    
    if (a instanceof Fish) {
        return new Fish(generateRandomName(), generateRandomAge());
    } else if (a instanceof Lion) {
        return new Lion(generateRandomName(), generateRandomAge());
    } else if (a instanceof Parrot) {
        return new Parrot(generateRandomName(), generateRandomAge());
    }
}