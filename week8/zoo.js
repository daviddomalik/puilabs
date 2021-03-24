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
var names = ["Nemo", "Simba", "Patchy", "Tusky", "Chompers", "Polly", "Harambe", "Dory", "Crush", "Scar"];

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
    let randomIndex = generateRandomIndex(animal.length);
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
    var saved = JSON.parse(localStorage.getItem("savedAnimals"));
    var show = JSON.parse(localStorage.getItem("showSaved"));

    if (saved === null) {
        saved = Array(5);
        localStorage.setItem("savedAnimals", JSON.stringify(saved));
    } else {
        for (let i = 0; i < 5; i++) {
            if (saved[i] == null) {
                document.getElementById("save" + String(i + 1)).textContent = "Save Me";
            } else if (i == show) {
                document.getElementById("save" + String(i + 1)).textContent = "Clear Me";
            } else {
                document.getElementById("save" + String(i + 1)).textContent = saved[i].name;
            }
        }
    }

    if (show === null || saved[show] == null) {
        var temp = generateRandomAnimal();
        document.getElementById("animal-image").setAttribute("src", temp.image);
        document.getElementById("animal-image").setAttribute("alt", temp.image_alt);
        document.getElementById("animal-info").textContent = temp.name + ", " + temp.age;
    } else {
        document.getElementById("animal-image").setAttribute("src", saved[show].image);
        document.getElementById("animal-image").setAttribute("alt", saved[show].image_alt);
        document.getElementById("animal-info").textContent = saved[show].name + ", " + saved[show].age;
        
    }

    var buttons = document.getElementsByTagName("button");
    let savedShow = show;
    show = null;
    localStorage.setItem("showSaved", JSON.stringify(show));

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            if (saved[i] == null) {
                if (show === null || saved[show] == null) {
                    saved[i] = temp;
                } else {
                    saved[i] = saved[show];
                }
                show = i;
                document.getElementById("save" + String(i + 1)).style.display = "none";
                document.getElementById("feedback" + String(i + 1)).textContent = "Saved!";
                document.getElementById("feedback" + String(i + 1)).style.display = "block";
            } else if (i == savedShow) {
                saved[i] = null;
                show = null;
                document.getElementById("save" + String(i + 1)).style.display = "none";
                document.getElementById("feedback" + String(i + 1)).textContent = "Cleared!";
                document.getElementById("feedback" + String(i + 1)).style.display = "block";
            } else {
                show = i;
                document.getElementById("save" + String(i + 1)).style.display = "none";
                document.getElementById("feedback" + String(i + 1)).textContent = "Up Next!";
                document.getElementById("feedback" + String(i + 1)).style.display = "block";
            }
            localStorage.setItem("savedAnimals", JSON.stringify(saved));
            localStorage.setItem("showSaved", JSON.stringify(show));
        })
    }
}