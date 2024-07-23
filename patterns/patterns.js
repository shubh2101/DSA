//PATTERN 1
for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += '* ';
  }
  console.log(str);
}

//PATTERN 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str = str + j + ' ';
  }
  console.log(str);
}

// PATTERN 2 :Floyd triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let k = 1;
for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += k;
    k++;
  }
  //   console.log(str);
}
