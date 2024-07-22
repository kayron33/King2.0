const goTOpBtn=document.querySelector("[data-go-top]");


window.addEventListener("scroll",function(){
    if(this.window.scrollY >=400){
        goTOpBtn.classList.add("active");
    }else{
        goTOpBtn.classList.remove("active");
    }
});
