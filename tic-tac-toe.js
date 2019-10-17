

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.className="square";


}
