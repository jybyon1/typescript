export const createRangeIterable = (from: number, to: number) => {
  let cuValue = from;
  return {
    next() {
      const value = cuValue < to ? cuValue++ : undefined;
      const done = value == undefined;
      return { value, done };
    },
  };
};
