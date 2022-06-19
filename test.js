console.log(true && true); //true
console.log(true && false); //false
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false
console.log((true && true) || false); //true
console.log((false && true) || false); //false
console.log((false && true) || true); //true

// const arr = [-1, 10];
// console.log(arr.length);
// for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//   console.log(i);
// }

const string = "q,w,f,h";
//{ name: 'q' }

const arr = string.split(",");
const newArr = arr.reduce((final, current) => {
  return { name: current };
}, []);
console.log(newArr);
