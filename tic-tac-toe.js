"use strict"; 
//JavaScript Code 

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    this.console.log(body);

    //
    let board =document.getElementById("board");
    let stat =document.getElementById("status");
    let game =documemnt.getElementById("game"); 
    

    // Adding squares to each div
    let mydiv=document.querySelectorAll("div.board");
    mydiv.classList.add('square');

};
