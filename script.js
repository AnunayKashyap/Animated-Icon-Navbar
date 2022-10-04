let tabs=document.querySelectorAll(".tab");
let overlay=document.querySelector(".overlay");

let firstActive=document.querySelector(".tab-is-active");
let activeColor=getComputedStyle(firstActive).color;
overlay.style.background=activeColor;
document.body.style.background=activeColor;


tabs.forEach((tab) => {
    tab.addEventListener("click",function(){
        let t1=new TimelineLite();

        let accentColor = getComputedStyle(this).color;
        this.children[0].style.background=accentColor;
        if(!this.classList.contains("tab-is-active")){
            t1.fromTo(
                this.children[0],
                0.1,
                {scale:0,opacity:1},
                {scale:3,opacity:0},
                "0"
            );
            overlay.style.background=accentColor;
            t1.fromTo(
                overlay,
                1,
                {scale:0,opacity:0},
                {scale:1,opacity:3},
                "0"
            );
        }
        tabs.forEach((tab)=>{
            tab.classList.remove("tab-is-active");
            this.classList.add("tab-is-active");
        });
    });
});