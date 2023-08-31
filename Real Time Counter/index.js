const textArea1=document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainEle = document.getElementById("remaining-counter");
updateCounter();
textArea1.addEventListener("keyup",()=>
{
    updateCounter();

    
})

function updateCounter()
{
    totalCounter.innerText=textArea1.value.length;
    remainEle.innerText=textArea1.getAttribute("maxLength")-textArea1.value.length;


}