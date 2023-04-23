
// let decreaseelement  = document.querySelector(".decrease");
// let reset = document.querySelector(".reset");
// let increaseelement = document.querySelector(".increase");

///  set initial count 
let count = 0;

/// select value and buttons 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn ){
    btn.addEventListener("click",function(ele){
        const styles = ele.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count ++;
        }else{
            count = 0 ;
        }
        value.textContent = count;
        if(count > 0){
            value.style.color = "green";
        }else if (count < 0){
            value.style.color= "red";
        }else{
            value.style.color= "black";
        }
    });

});
