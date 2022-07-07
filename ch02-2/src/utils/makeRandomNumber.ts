let MAX_AGE = 100;

export function MakeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil(Math.random() * max);
}

let printMe: (string, number) => void = function(name:string, age: number): void{}