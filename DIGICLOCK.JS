let second1 = document.querySelector("#second1");
const second2 =document.querySelector("#second2");
const min = document.querySelector("#minute");
const min2 = document.querySelector("#min2");
const hr = document.querySelector("#hour");
const hr1 = document.querySelector("#hour1")






let sec1 = 0;
let sec2 = 0;
let minute = 0;
let minute2 = 0;
let hour = 0;
let hour1 = 0;
setInterval(() =>{
    sec1 = (sec1 + 1)%10;
    second1.textContent = sec1;
if(sec1 == 0){
    sec2 = (sec2 + 1)%6;
    second2.textContent = sec2;
    
    if(sec2 == 0){
        minute = (minute + 1)%10;
        min.textContent = minute;

        if(minute == 0){

            minute2 = (minute2 + 1)%6;
            min2.textContent = minute2;
             if(minute2 == 0){
            hour = (hour + 1)%10;
            hr.textContent = hour;
             if(hour == 0){
            hour1 = (hour1 + 1)%2;
            hr1.textContent = hour1;
        }
        };

       
        
        }

       

        
    }

}
} , 1000);
