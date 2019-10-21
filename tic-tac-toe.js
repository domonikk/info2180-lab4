

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

   // adding event to each element to display X and O 
    var element1= document.getElementsByClassName("square"); 



    element1[i].onclick = function(){ 
        element1[i].innerHTML="X"; 
        console.log("a click");  
        i++; 
        element1[i].innerHTML="O"; 
        console.log("a click"); 
    }
    
};
