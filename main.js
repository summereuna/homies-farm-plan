document.addEventListener("DOMContentLoaded", (e) => {
  const goals = document.querySelectorAll(".goal");
  const TOGGLE_CLASS = "done";
  
  //로컬 스토리지 가져오기
  goals.forEach((goal, index) => {
    const isDone = localStorage.getItem(`goal${index}`) === "done";
    if (isDone) {
      goal.classList.add(TOGGLE_CLASS);
    }
  });

  // 배열 반환
  goals.forEach((goal, index) => {
    goal.addEventListener("click", function () {
      //완료 토글
      goal.classList.toggle(TOGGLE_CLASS);
      //로컬 스토리지에 저장
      if (goal.classList.contains(TOGGLE_CLASS)) {
        return localStorage.setItem(`goal${index}`, TOGGLE_CLASS);
      } else {
        return localStorage.setItem(`goal${index}`, "");
      }
    });
  });
});
