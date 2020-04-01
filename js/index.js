let innerContainer = document.getElementsByClassName("innerContainer");
let circleButton = document.querySelectorAll(
    "#testimonialContainer #circleButton div"
);
let moveTestimonial = (transform, thisObj) => {
    for (let i = 0; i < innerContainer.length; i++) {
        innerContainer[i].style.transform = `translateX(-${transform}%)`;
        if (circleButton[i] != thisObj) {
            circleButton[i].style.background = `#333`;
            circleButton[i].style.border = `0`;
            circleButton[i].style.transform = `scale(1)`;
        }
    }
    thisObj.style.background = `#eee`;
    thisObj.style.border = `2px solid #333333`;
    thisObj.style.transform = `scale(1.6)`;
};
