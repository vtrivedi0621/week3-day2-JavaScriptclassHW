class Pirate {

    constructor(name, year, country) {
        this.name = name;
        this.year = year;
        this.country = country;
        
    }

    getdetails() {
        return `name:  ${this.name}, year: ${this.year}, country: ${this.country}`;
    }

    addshipname(shipname) {
        this.shipname = shipname;
        return `shipname: ${this.shipname}`;
    }

    getlanguage(language) {
        this.language = language;
        return `language : ${this.language}`;
    }
   
}


const firstPirate = new Pirate("Bill Bonesccc", "1770", "USA");

console.log(firstPirate.addshipname("AAA"));

const secondPirate = new Pirate("Blackbeard", "1750", "Africa");

console.log(secondPirate.addshipname("BBB"));

const thirdPirate = new Pirate("Blackeye", "1780", "UK");

console.log(thirdPirate.getdetails());

const FourthPirate = new Pirate("Peteplank", "1800", "Australia");

console.log(FourthPirate.getlanguage("French"));

const FifthPirate = new Pirate("Big Jones", "1830", "Rusia");

const SixthPirate = new Pirate("Peteplank", "1840", "UAE");

const jollyRoger = [firstPirate, secondPirate, thirdPirate];

for(let i=0; i<jollyRoger.length; i++){
    console.log(jollyRoger[i]);
}

const blackPearl = [FourthPirate, FifthPirate, SixthPirate];

for(let i=0; i<blackPearl.length; i++){
    console.log(blackPearl[i]);
}

