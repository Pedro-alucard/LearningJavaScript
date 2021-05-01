

// function makePerson(name, lastName) {
//     return{
//         name,
//         lastName,
//
//         speak(topic){
//             return `${this.name} is talking about ${topic}`;
//         },
//
//         set fullName(name){
//             name = name.split(' ');
//             this.name = name.shift();
//             this.lastName = name.join();
//         },
//
//         get fullName(){ //makes the lastName turn a attribute
//             return `Name :${this.name} ${this.lastName} `;
//         }
//     };
// }
//
// const p1 = makePerson('pedro', 'henrique');
//
// console.log(p1.speak('csgo'));
//
// console.log(p1.fullName);
//
// p1.fullName = 'rhazek silva';
//
// console.log(p1.fullName);

//construct function

function Person(name, lastName){
    const ID = 5; //attribute intern
    this.nome = name;
    this.lastName = lastName;

    this.method = function (){
        console.log("hi");
    }

}

const p1 = new Person('pedro', 'henrique');
const p2 = new Person('maria', 'oliveira');
p1.method();
p2.method();