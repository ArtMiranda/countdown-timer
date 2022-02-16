var timeInSeconds = 0;
var interval;
var started = false;
var playing = false;

alarm = new Audio("./assets/alarm.ogg");

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


    if (started == false) {

        startAudio = new Audio("./assets/startSound.ogg");
        startAudio.play();
    
        if (timeInSeconds > 0) {
            interval = setInterval(startCount, 1000);
            started = true;
        }
        else {
            alert("Defina um tempo para o alarme.");
            startAudio.play();
        }
    }
}

function startCount() {

    if (timeInSeconds != 0) {
        playing = true;
        h.innerHTML = convert(timeInSeconds);
        timeInSeconds--;
        updateText();
        if (timeInSeconds == 0) {
            alarm.play();
            let stopAlarm = window.confirm("Stop alarm?");

            if (stopAlarm == true) {
                alarm.pause();
            }
        }
    }
    else {
        h.innerText = 0 + "s";
    }
}

function pauseCount() {
    startAudio = 0;

    playing = false;
    clearInterval(interval);
    started = false;
}

function resetCount() {
    timeInSeconds = 0;

    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = 0 + "s";

    clearInterval(interval);
    started = false;
    playing = false;
}


document.getElementById("addTimeDiv").addEventListener("click", function (e) {
    const pressed = e.target;

    addTime(pressed);

});

function addTime(pressed) {

    var addTimeDiv = document.getElementById("addTimeDiv");

    if (isNaN(pressed.value) == false) {

        if (timeInSeconds == 0) {
            timeInSeconds = parseFloat(pressed.value);
            clearInterval(interval);
            started = false;
            playing = false;
            updateText();
        }

        else {
            timeInSeconds += parseFloat(pressed.value);
            clearInterval(interval);
            started = false;
            playing = false;
            updateText();
        }
    }
    else {

    }

}

addEventListener("keyup", event => {
    if (event.code == "Space" && timeInSeconds != 0) {
        switch (playing) {

            case false:
                start();

                break;

            case true:
                pauseCount();

        }
    }

});

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