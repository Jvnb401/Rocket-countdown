const timer = document.getElementById("timer");
const appointedDay = new Date(2022, 7, 17, 12, 10, 0);

function clock() {
    let presently = new Date();
    let d = presently.getDay();
    let h = presently.getHours();
    let m = presently.getMinutes();
    let s = presently.getSeconds();

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