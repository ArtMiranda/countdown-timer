var timeInSeconds = 0;
var interval;
var started = 0;

let h = document.getElementsByTagName("h1")[0];

function updateText() {

    if (timeInSeconds != 0) {
        h.innerText = convert(timeInSeconds);
    }
    else {
        h.innerText = 0 + "s";
    }

}

function start() {

    if (started == 0) {
        if (timeInSeconds > 0) {
            interval = setInterval(startCounting, 1000);
        }
        else {
            alert("Defina um tempo para o alarme.")
        }
        started = 1;
    }

}

function startCounting() {

    if (timeInSeconds != 0) {
        h.innerHTML = convert(timeInSeconds);
        timeInSeconds--;
        updateText();
    }
    else {
        h.innerText = 0 + "s";
    }
}

function pauseCount() {
    clearInterval(interval);
    started = 0;
}

function resetCount() {
    timeInSeconds = 0;

    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = 0 + "s";

    clearInterval(interval);
    started = 0;
}


document.getElementById("addTimeDiv").addEventListener("click", function (e) {
    const pressed = e.target;

    addTime(pressed);

});

function addTime(pressed) {

    var addTimeDiv = document.getElementById("addTimeDiv");

    if (timeInSeconds == 0) {
        timeInSeconds = parseFloat(pressed.value);
        clearInterval(interval);
        started = 0;
        updateText();
    }

    else {
        timeInSeconds += parseFloat(pressed.value);
        clearInterval(interval);
        updateText();
    }
}

function convert(timeInSeconds) {
    if (timeInSeconds == 0) {
        return "";
    }

    let duration = timeInSeconds;
    let hours = duration / 3600;
    duration = duration % (3600);

    let min = parseInt(duration / 60);
    duration = duration % (60);

    let sec = parseInt(duration);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
        return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    }
    else if (min == 0) {
        return `${sec}s`
    }
    else {
        return `${min}m ${sec}s`
    }
}