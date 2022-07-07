import * as U from "../utils/makeRandomNumber";
import IPerson from "./IPerson";

export default class Person implements IPerson {
  constructor(public name: string, public age: number = U.MakeRandomNumber()) {}
}

export const makePerson = (
  name: string,
  age: number = U.MakeRandomNumber()
): IPerson => ({
  name,
  age,
});

