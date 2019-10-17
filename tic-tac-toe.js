

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

  

    myboard.click(function mark(mark){
        var marksquare=[];  
        var value;

        for (var i=0; i<=9; i++){ 
            value=myboard.innerHTML=".square.X";  
            if (value===mark){
                marksquare.push(i);
            }else{
                value=myboard.innerHTML=".square.O";
                marksquare.push(i);
            }

        }
    });
}
