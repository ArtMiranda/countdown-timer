var number = 0;

var interval;

function updateText(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = number;
    number--;
}

function start(){
    
    interval = setInterval(updateText, 1000);
}

function stopCount(){

    clearInterval(interval);
    
}

function clearCount(){    
    number = 0;

    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = "0";

    clearInterval(interval);
}


document.getElementById("addTimeDiv").addEventListener("click", function(e){
    const pressed = e.target;

    addTime(pressed);

});

function addTime(pressed){

    var addTimeDiv = document.getElementById("addTimeDiv");

    if (pressed == addTimeDiv.firstChild){
        console.log("5 minutes");
    }
    if (pressed.innerText == addTimeDiv.firstChild.firstChild){
        console.log("1 minute");
    }
    if (pressed.innerText == addTimeDiv.firstChild.firstChild.firstChild){
        console.log("30 seconds");
    }
    if (pressed.innerText == addTimeDiv.firstChild.firstChild.firstChild.firstChild){
        console.log("1 second");
    }
    if (pressed.innerText == addTimeDiv.lastChild){
        console.log("reset");
    }
}