

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

   // adding event to each element to display X and O 
     var element=document.getElementById("board").querySelectorAll("div");

     element.onlclick=fucntion(){ 
         e1=element[0];
         e2=element[1]; 
         e3=element[2];
         e4=element[3];
         e5=element[4];
         e6=element[5];
         e7=element[6];
         e8=element[7];
         e9=element[8];
        }; 

     




     


 
};
