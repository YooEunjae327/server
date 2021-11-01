// function Person() {}

// Person.prototype.eyes = 2
// Person.prototype.node = 1

// const kim = new Person()

// console.log(kim.eyes)

// function Animal(type, name, sound) {
//   this.type = type
//   this.name = name
//   this.sound = sound
//   this.say = () => {
//     console.log(this.sound)
//   }
// }

// const dog = new Animal('포켓몬', 'sox', '아')

// console.log(dog.sound)

// dog.say()

function Animal(type, name, sound) {
  this.type = type
  this.name = name
  this.sound = sound
}

Animal.prototype.say = () => {
  console.log(this.sound)
}

Animal.prototype.sharedValue = 1

const dog = new Animal('포켓몬', 'sox', '아')

console.log(dog.sharedValue)
