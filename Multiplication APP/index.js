const num1= Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const ques=document.getElementById("question");
const form1=document.getElementById("form")
const input1=document.getElementById("input");
const score1=document.getElementById("score");
ques.innerText=`What is ${num1} multiply by ${num2}?`; 
let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}

score1.innerText=`score:${score}`;



const corrAns= num1*num2;
form1.addEventListener( "submit",()=>{
    const userAns= +input1.value;

    if(userAns=== corrAns)
    {
        score++;
        updatelocalStorage();
    }
    else{
        score--;
        updatelocalStorage();
    }

});

function updatelocalStorage()
{
    localStorage.setItem("score",JSON.stringify(score));
      
}