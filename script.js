let gameseq = [];
let userseq = [];
 
let btns = [ "red" ,"yellow", "green","purple"];

let start = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress" ,function(){
    if(start == false){
        start = true;
        // console.log("game started");
       levelup();
    }
    
});


function flashbtn(btn1){
    btn1.classList.add("flash");
    setTimeout(function(){
        btn1.classList.remove("flash");
    },200);


}

function userflash(btn1){
    btn1.classList.add("userflash");
    setTimeout(function(){
        btn1.classList.remove("userflash");
    },250);

}

function levelup(){
    userseq = [];
    level++;
    h3.innerText = ` level ${level}`;
     let radidx = Math.floor(Math.random() *4);
     let radcol = btns[radidx];
     let randbtn = document.querySelector(`.${radcol}`);
        flashbtn(randbtn);
        gameseq.push(radcol);
        console.log(gameseq);
    
   
}
function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML = `game over!your score was <b>${level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}



function btnpress(){
    // console.log("btn was press");
    // console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);


}
  
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
       btn.addEventListener("click",btnpress )
}
    function reset(){
        start= false;
        userseq = [];
        gameseq = [];
        level = 0;
    }