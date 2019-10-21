

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

  // adding event to each element to display X and O 
   myboard.addEventListener("click",function(){ 
       e1=myboard[0];
       e2=myboard[1];

       element.addEventListener("click",e1,e2);   
   };


 
};
