# Assignment: TypeScript

## Introduction

Goal of this homework is to practice writing math-related TypeScript code.

Note that this is just a sample for introduction to GitHub Classroom.

## Solutions

### Level 1

```ts
export function add(x: number, y: number): number {
  return x + y;
}
```

### Level 2

```ts
export function fizzBuzz(value: number): string {
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
```

### Level 3

```ts
export function getLengthOfVector(vec: [number, number]): number {
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}
```
