

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

   // adding event to each element to display X and O 
    var element=document.getElementsByClassName("square");

    element.onlclick = function(){  
        element[0].innerHTML="X"; 
        console.log("a click");
        element[1].innerHTML="O"; 
        console.log("a click");
        element[2].innerHTML="X";
        element[3].innerHTML="O";
        element[4].innerHTML="X";
        element[5].innerHTML="O";
        element[6].innerHTML="X";
        element[7].innerHTML="O";
        element[8].innerHTML="X"; 
    }  
    


   
};
