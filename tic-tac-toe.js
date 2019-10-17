

window.onload = function(){  
    var body=document.getElementsByTagName("body"); 
    console.log(body); 

    // Adding squares to each div 
    var myboard= document.getElementById("board").querySelectorAll("div");
    myboard.forEach(i=>{i.className="square";});

  
    function marksquare (marker){ 
        var marksquare=[]; 
        var value;
        for ( var i=0; i<squarecount; i++){ 
            value=myboard.innerHTML.className=".square.x";
            if(value === marker){
                marksquare.push(i);
            }else{
                value=myboard.innerHTML.className=".square.o"; 
                marksquare.push(i);
            }

        }

    }
}
