operator = true;
let sum = 0;
let avg = 0;
let times = 0;
while (operator) {
  let score = prompt(`enter score`);
  if (score <= 100 && score >= 0) {
    sum += +score;
    times++;
  } else if (score === "q" || score === "Q") {
    operator = false;

    avg = sum / times;
    alert(`your average score is ${avg}`);
  } else {
    alert(`enterance is wrong`);
  }
}
