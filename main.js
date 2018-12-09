let btn = document.querySelector("#button")
btn.addEventListener("click",(event)=>{
 document.querySelector("footer").classList.toggle("clear");
});

window.addEventListener("scroll",(event)=>{
     if(window.scrollY <= 40){
         document.querySelector(".section1").classList.add("clear");
         document.querySelector("header").classList.add("clear");
     }
     if(window.scrollY > 500){
         document.querySelector(".section2").classList.add("clear");
     }
     if(window.scrollY > 1000){
         document.querySelector(".section3").classList.add("clear")
     }
     else{
         false;
     }
     
});
