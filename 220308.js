// 피자 나눠 먹기(1)
function solution(n) {
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

// 피자 나눠 먹기(2)
function solution(n) {
  let pizzaBox = 6;

  while (pizzaBox % n !== 0) {
    pizzaBox += 6;
  }

  return pizzaBox / 6;
}
