// ### LEVEL 1: The Basics ###
export function add(x: number, y: number): number {
  // TODO: Return the sum of x and y
  return x + y;
}

// ### LEVEL 2: Fizz Buzz ###
export function fizzBuzz(value: number): string {
  // TODO: Return Fizz if value is divisible by 3, Buzz if value is divisible by 5,
  //       FizzBuzz if value is divisible by 3 and 5, and the value as a string otherwise
  if (value % 3 === 0) {
    if (value % 5 === 0) {
      return "FizzBuzz";
    }

    return "Fizz";
  }

  if (value % 5 === 0) {
    return "Buzz";
  }

  return value.toString();
}

// ### LEVEL 3: Length of vector ###
export function getLengthOfVector(vec: [number, number]): number {
  // TODO: Return the length of the vector
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}
