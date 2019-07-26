// enum
enum Month  {J = 10, F = 2}
console.log(Month.F)
console.log(Month[10])

// tuples

let person: [string, number];
person = ["sumon", 29]
console.log(person)

// interface
interface Person {
  name: string,
  age: number,
  phone?: string
}

let drDescription = (person: Person): string => {
  return person.name + person.age + person.phone;
}

console.log(drDescription({name: "sumon", age: 29}))
