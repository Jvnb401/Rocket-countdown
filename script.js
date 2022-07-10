const timer = document.getElementById("timer");
const appointedDay = new Date(2022, 7 - 1, 17, 12, 10, 0);

function clock() {
    const presently = new Date();
    const milliseconds = appointedDay - presently;
    const newTime = new Date(milliseconds);
    let d = newTime.getDate();
    let h = newTime.getHours();
    let m = newTime.getMinutes();
    let s = newTime.getSeconds();

    d = checkTime(d);
    m = checkTime(m);
    s = checkTime(s);
    timer.innerHTML = `${d} : ${h} : ${m} : ${s}`;
    setTimeout('clock()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

clock();