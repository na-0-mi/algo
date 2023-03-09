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

// 고작 이거 커밋하다가 깃허브에서 만든 리드미 파일때문에 병합이 안됨
// 해결 방법 - 1
// git push origin main --force
// --force를 쓰면 이전 커밋 내용이 날라간다.

// 해결 방법 - 2
// git checkout master
// git pull origin master
// git checkout 내가 작업한 브랜치
// git merge master
// 브랜치 두개의 내용을 pull로 합쳐준다.
