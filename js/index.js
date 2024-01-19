// girl moving logic start
let girl = document.querySelector("#girl");
let secondgirl = document.querySelector("#secondgirl");



window.addEventListener("scroll", () => {
    let val = window.scrollY;

    girl.style.right = val / 5 + 'px';
    secondgirl.style.left = val / 6 + 'px';


})
// girl moving logic end


