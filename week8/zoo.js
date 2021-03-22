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

function onLoad() {
    var saved = JSON.parse(localStorage.getItem("savedAnimal"));
    var hasSaved = false;

    if (saved === null) {
        document.getElementById("save").textContent = "Save Me";
        saved = generateRandomAnimal();
    } else {
        document.getElementById("save").textContent = "Clear Me";
        hasSaved = true;
    }

    document.getElementById("animal-image").setAttribute("src", saved.image);
    document.getElementById("animal-image").setAttribute("alt", saved.image_alt);
    document.getElementById("animal-info").textContent = saved.name + ", " + saved.age;

    document.getElementById("save").addEventListener("click", function() {
        if (hasSaved) {
            localStorage.removeItem("savedAnimal");
            document.getElementById("save").style.display = "none";
            document.getElementById("feedback").textContent = "Cleared!";
            document.getElementById("feedback").style.display = "block";
        } else {
            localStorage.setItem("savedAnimal", JSON.stringify(saved));
            document.getElementById("save").style.display = "none";
            document.getElementById("feedback").textContent = "Saved!";
            document.getElementById("feedback").style.display = "block";
        }
    })
}