// 피자 나눠 먹기

function solution(slice, n) {
  return n % slice === 0 ? Math.floor(n / slice) : Math.floor(n / slice) + 1;
}

// 배열의 평균값

function solution(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
}

// 옷가게 할인 받기
