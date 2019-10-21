

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

   // adding event to each element to display X and O 
    var element=document.getElementsByClassName("square");

    element.onlclick = function(){  
        e1=element[0].innerHTML="X"; 
        console.log("a click");
        e2=element[1].innerHTML="O";
        e3=element[2].innerHTML="X";
        e4=element[3].innerHTML="O";
        e5=element[4].innerHTML="X";
        e6=element[5].innerHTML="O";
        e7=element[6].innerHTML="X";
        e8=element[7].innerHTML="O";
        e9=element[8].innerHTML="X"; 
    }  
    


   
};
