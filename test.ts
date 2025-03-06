interface PersonInterFace {
  name: string;
  age: number;
  tellMeYouName: () => void;
  secrete:string
}
const Persons:PersonInterFace[] = [
  {
    name: "ahmed",
    secrete:"this is a secrete",
    age: 24,
    tellMeYouName: function () {
      console.log(`my name is ${this.name}`);
    },
  },
  {
    name: "mohamed",
    secrete:"this is a secrete",
    age: 24,
    tellMeYouName: function () {
      console.log(`my name is ${this.name}`);
    },
  },
  {
    name: "khaled",
    secrete:"this is a secrete",
    age: 24,
    tellMeYouName: function () {
      console.log(`my name is ${this.name} my age is ${this.age}`);
      
    },
  },
];
Persons.forEach((person) => {
  person.tellMeYouName()
});
