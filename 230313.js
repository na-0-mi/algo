// 짝수 홀수 개수
function solution(num_list) {
  let num_odd = num_list.filter((item) => item % 2 == 0);
  let num_even = num_list.filter((item) => item % 2 == 1);
  return [num_odd.length, num_even.length];
}
