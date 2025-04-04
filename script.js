let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const userp=document.querySelector("#user");
const compp=document.querySelector("#comp"); 
const gencomp=()=>{
    const options=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
};
const draw=()=>{
    console.log("game is draw");
    msg.innerText="game is draw";
};
const showwin=(userwin)=>{
    if(userwin){
        user++;
        userp.innerText=user;
        console.log(" you win");
        msg.innerText="you win";
    }
        else{
            comp++;
            compp.innerText=comp;
            console.log("you lose");
            msg.innerText="you lose";
        }
    };
const playgame=(uchoice)=>{
console.log("userchoice",uchoice);
const compchoice=gencomp();
console.log("compchoice",compchoice);
if(uchoice===compchoice){
draw();
}
else{
let userwin=true;
if(uchoice==="rock"){
    userwin=compchoice==="paper" ?false:true;
}else if(uchoice==="paper"){
    userwin=compchoice==="scissor" ?false:true;
}else{
    userwin=compchoice==="rock" ?false:true;
}
 
showwin(userwin,uchoice,compchoice);
}
};

 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
 const uchoice=choice.getAttribute("id");
        console.log("choice clicked",uchoice);
    playgame(uchoice);
    });
});




























