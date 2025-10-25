import "./styles.css";

function powerOfTwo(num) {
  // let num=0;
  if (num <= 0) return false;

  while (num > 1) {
    if (num % 2 !== 0) return false;
    num = num / 2;
  }
  return true;
}

console.log(powerOfTwo(10));
