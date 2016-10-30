class Dog {
    constructor(name) {
      this.name = name;
    }

    bark(sound) {
      return `${sound} is the bark ${this.name} makes`
    }
}

// export default class {
//   constructor(name) {
//     this.name = name
//   }
//
//   bark(sound) {
//     return `${sound} is the bark ${this.name} makes`;
//   }
// }

// class is exposed to other code via module.exports assignment
export default Dog
