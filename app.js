const pl1btn=document.querySelector('#btp1');
const pl2btn=document.querySelector('#btp2');
const clrbt=document.querySelector('#clrb');
const pl1Display=document.querySelector('#p1disp');
const pl2Display=document.querySelector('#p2disp');
const scoreSelector=document.querySelector('#runder');


let p1=0;
let p2=0;
let winScore=3;


pl1btn.addEventListener('click', addscore1);
pl2btn.addEventListener('click', addscore2);
clrbt.addEventListener('click', clrscore);
scoreSelector.addEventListener('change',selectRounds);

function selectRounds(){
    clrscore()
    winScore=parseInt(this.value);
}

function addscore1(){
   if (p1 !== winScore && p2 !==winScore){
    p1 +=1;
    pl1Display.textContent=p1;
   }
}
function addscore2(){
    if (p2 !== winScore && p1 !==winScore){
    p2 +=1;
    pl2Display.textContent=p2;
    }
}
function clrscore(){
    p1=0;
    p2=0;
    pl1Display.textContent=p1;
    pl2Display.textContent=p2;
}

