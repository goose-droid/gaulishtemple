function switchBG(){
    var img = document.getElementById("theSwitch").value;
    var page = document.getElementById("pageBody");
    
    if(img == 1){
        page.className = "bgOne";
    } else if(img == 2){
        page.className = "bgTwo";
    } else if(img == 3){
        page.className = "bgThree";
    }
    }