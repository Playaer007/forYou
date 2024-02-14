window.addEventListener("load", () => {
    let touch = document.getElementById("touch");

    setTimeout(() => {
        touch.style.opacity = 1;
        
        setTimeout(() => {
            touch.style.opacity = 0;
        }, 800);
    }, 100);
});