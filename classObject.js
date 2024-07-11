class character{
	constructor(name, age, type){
	this.name = name 
    this.age = age 
    this.type = type 
	}
	attack(type, name){
    if(this.type == 'mago'){
	console.log(`O ${this.type} ${this.name} atacou usando magia`)
    }
	else if(this.type == 'guerreiro'){
    console.log(`O ${this.type} ${this.name} atacou usando espada`)
    }
   	else if(this.type == 'monge'){
    console.log(`O ${this.type} ${this.name} atacou usando artes marciais`)
    }
    else{
    console.log(`O ${this.type} ${this.name} atacou usando shuriken`)
    }
    }
}

const firstCharacter = new character("El", 16, "mago")
firstCharacter.attack()

const secondCharacter = new character("Lucas", 17, "guerreiro")
secondCharacter.attack()

const specialCharacter = new character("Donatello", 19, "ninja")
specialCharacter.attack()