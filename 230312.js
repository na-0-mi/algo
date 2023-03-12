// 아이스 아메리카노
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

// 나이 출력
function solution(age) {
  return 2023 - age;
}

// 배열 뒤집기
function solution(num_list) {
  return num_list.reverse();
}

// 문자열 뒤집기
function solution(my_string) {
  return my_string.split("").reverse().join("");
}
