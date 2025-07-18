// document.getElementById("para").innerText = "Hello! i am from js file";

// let a = 10;
// let b = 20;

// let c = a + b; // 30

// c++; // 30 + 1 = 31
// console.log(c);
// c--;
// console.log(c); // 31 - 1 = 30

let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
  document.getElementById("myValue").innerText = count;
}

// function increment() {
//   let a = 0;
//   a++;
//   document.getElementById("myValue").innerHTML = a;
// }
