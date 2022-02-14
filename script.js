var number = 0;

var interval;

function updateText(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = number;
    number++;
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