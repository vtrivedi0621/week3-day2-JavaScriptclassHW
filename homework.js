class Cat {

    constructor(color, age, name) {
        this.color = color;
        this.age = age;
        this.name = name;   
    }

    getinfo() {
        return `color: ${this.color}, age: ${this.age}, name: ${this.name}`;
    }
   
    getbreed(breed) {
        this.breed = breed;
        return `breed: ${this.breed}`;
        
    }

    getage(){
        return `name ${this.name}, age ${this.age}`;
    }

}
const firstCat = new Cat("black", "2", "kitty");
const secondCat = new Cat("white", "3", "cutty");

console.log(firstCat.color);
console.log(firstCat.age);
console.log(firstCat.name);


console.log(secondCat.color);
console.log(secondCat.age);
console.log(secondCat.name);

console.log(firstCat.getinfo());
console.log(firstCat.getbreed("Domestic Longhair Cat"));
console.log(firstCat.getage());

console.log(secondCat.getinfo());
console.log(secondCat.getbreed("Persian cat"));
console.log(secondCat.getage());





    