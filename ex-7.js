const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores ?? "undefined";

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores.englis ?? "English score is not defined";
console.log(result1);
console.log(result2);
