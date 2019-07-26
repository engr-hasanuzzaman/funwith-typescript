"use strict";
// enum
var Month;
(function (Month) {
    Month[Month["J"] = 10] = "J";
    Month[Month["F"] = 2] = "F";
})(Month || (Month = {}));
console.log(Month.F);
console.log(Month[10]);
// tuples
let person;
person = ["sumon", 29];
console.log(person);
let drDescription = (person) => {
    return person.name + person.age + person.phone;
};
console.log(drDescription({ name: "sumon", age: 29 }));
