// 짝수는 싫어요
function solution(n) {
  //n보다 작고 나눴을 때 나머지가 1이 남는 정수들의 배열을 오름차순으로 리턴
  const list = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      list.push(i);
    }
  }
  return list;
}
