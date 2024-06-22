var myscore=document.getElementById("human");
var compscore=document.getElementById("Computer");

display=document.getElementById("result");
displayresult=document.getElementById("displayresult");
function userselected(choice){
    console.log("press ",choice);

    let ch = Math.floor(Math.random() * 3) + 1;
    //1-> rock 2->sciss 3->paper
    if(ch==choice){
        // draw
        displayresult.style.backgroundColor="#3a394f";
        displayresult.innerText="Same choice DRAW";
    }
    else if((ch==2 && choice==1) || (ch==1 && choice==3) || (ch==3 && choice==2)){
        // human won
        displayresult.style.backgroundColor="green";
        displayresult.innerText="Congratuations You WON";
        myscore.innerText=(parseInt(myscore.innerText)+1).toString();
    }
    else{
        displayresult.style.backgroundColor="red";
        displayresult.innerText="OOPs You LOSE";
        compscore.innerText=(parseInt(compscore.innerText)+1).toString();
    }
    console.log(ch); 


}