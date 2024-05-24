let height = undefined;
let result;

const heightResult = (height) => height ?? "Height is not defined";
result = heightResult();

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
