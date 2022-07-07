import { Chance } from "chance";
import IPerson from "./person/Person";
import Person, { makePerson } from "./person/Person";
import * as R from "ramda";

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);
console.log(persons);
