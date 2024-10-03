let sSeq=[];
let uSeq=[];
 let gameStrat =false;
 let level =0;
 let hscore =level;

 let h2= document.querySelector("h2");
 let score= document.querySelector("#score");
 let Hscore= document.querySelector("#Hscore");

 let btns=["red", "green","blue","orange"];

 document.addEventListener("click", function (){
    if(gameStrat==false){
        gameStrat=true;
        setTimeout(levelup,350);


    }
 })
//  document.addEventListener("keypress", function (){
//     if(gameStrat==false){
//         gameStrat=true;
//         levelup();

//     }
//  })



function flash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
}

function levelup(){
    level++;
    h2.innerText= `level is ${level}`;
    let randInd= Math.floor(Math.random()*4)
    let randColour = btns[randInd];
    let randBtn=document.querySelector(`.${randColour}`);
    sSeq.push(randColour);
    score.innerHTML=`Your score : ${level-1}`;


setTimeout(    flash(randBtn),1000
)
    uSeq=[];

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function btnPress(){
    let btn = this;
    if(sSeq.length!=0){
        
    flash(btn);
    let userColour = btn.getAttribute("id")
    uSeq.push(userColour);
    checkAns(uSeq.length-1);
    }

}
let body = document.querySelector("body");
function checkAns(ind){
    
    if(sSeq[ind]===uSeq[ind]){
        if(sSeq.length==uSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerText=`Game over click anywhere to satrt again`;
        body.style.backgroundColor="red";
        setTimeout(function (){
        body.style.backgroundColor="#1D1D21";


        },500 );
        if(hscore<level){
            Hscore.innerHTML= `High Score : ${level-1}`;
        }



        setTimeout(reset,500 );


    }
}
function reset(){
    gameStrat =false;
    sSeq=[];
    uSeq=[];
    level=0;
     score.innerHTML=`Your score : ${level}`
}