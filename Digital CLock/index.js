const hourEle = document.getElementById("hour");
const minEle = document.getElementById("minutes");
const secEle = document.getElementById("seconds");
const ampmele = document.getElementById("am");

function updateClock()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12)
    {
        h=h-12;
        ampm="PM"
    }


    hourEle.innerText=h;
    minEle.innerText=m;
    secEle.innerText=s;
    ampmele.innerText=ampm;

    setTimeout(()=>{
        updateClock();


    },1000);


}
updateClock(); 

