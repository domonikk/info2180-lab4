

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

   // adding event to each element to display X and O 
    var myboard=document.getElementsByClassName("square");

    myboard[0].onlclick = function(){  
        myboard[0].innerHTML="X"; 
        console.log("a click");
    }  
    


   
};
