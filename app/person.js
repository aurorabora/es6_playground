class Person{
    constructor(name){
        this.name = name;
    }
    sleep(hours){
        return `I'm going to sleep for ${hours} hours.`;
    }
    drink(cups){
        return `I'm going to drink ${cups} cups of water.`;
    }
    speak(message){
        return `<h1>${this.name} said: ${message}.<h1>`;
    }
}

class SuperPerson extends Person{                                     // extends the class and adds an extra functionality
    constructor(name, heroName){
        super(name);

        this.heroName= heroName;
    }

    sayHeroName(){
        return this.speak(`I'm ${this.heroName}`)
    }
    xRay(){
        // return `<h1>${this.name} said: I see everything!!<h1>`;
        return this.speak('I can see through walls')
    }
}
export default SuperPerson;    //cannot have two export defaults at the bottom 