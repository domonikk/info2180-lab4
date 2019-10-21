

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

   // adding event to each element to display X and O 
    var element1=document.getElementById("board").querySelectorAll("div"); 
    var i; 
    for (i=0, i<element1.length; i++){
        var element2= element1[i]; 
    element2.onclick= function (){ 
        this.classList.add('X'); 
        this.innerHTML= "X"; 
        console.log("a click");
    }
    }
    

};
