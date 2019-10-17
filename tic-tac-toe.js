

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board");
    function squares(){
        myboard.forEach(i => {
            i.classList.add("square");
        });
    }
    
}
