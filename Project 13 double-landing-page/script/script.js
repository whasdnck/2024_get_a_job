// .container 클래스를 가진 요소를 선택합니다.
const containerEl = document.querySelector(".container");

// .left 클래스를 가진 요소를 선택합니다.
const leftEl = document.querySelector(".left");
// .right 클래스를 가진 요소를 선택합니다.
const rightEl = document.querySelector(".right");

// leftEl에 마우스가 들어올 때 실행될 이벤트 리스너를 추가합니다.
leftEl.addEventListener("mouseleave", () => {
    // containerEl에 active-left 클래스를 추가합니다.
    containerEl.classList.add("active-left");
});

// leftEl에서 마우스가 나갈 때 실행될 이벤트 리스너를 추가합니다.
leftEl.addEventListener("mouseleave", () => {
    // containerEl에서 active-left 클래스를 제거합니다.
    containerEl.classList.remove("active-left");
});

// rightEl 마우스가 들어올 때 실행될 이벤트 리스너를 추가합니다.
rightEl.addEventListener("mouseenter", () => {
    // containerEl에 active-right 클래스를 추가합니다.
    containerEl.classList.add("active-right");
});

// rightEl에서 마우스가 나갈 때 실행될 이벤트 리스너를 추가합니다.
rightEl.addEventListener("mouseleave", () => {
    // containerEl에서 active-right 클래스를 제거합니다.
    containerEl.classList.remove("active-right");
});
