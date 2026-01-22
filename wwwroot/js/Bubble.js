var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubbles() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#Pbtm").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#Pbtm").innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000);
}

document.querySelector("#Pbtm").addEventListener("click", function (dets) {
    if (dets.target.classList.contains("bubble")) {
        var clickedNum = Number(dets.target.textContent);

        if (clickedNum === hitrn) {
            increaseScore();
            getNewHit();
            makeBubbles();
        }
    }
});

makeBubbles();
getNewHit();
runtimer();
