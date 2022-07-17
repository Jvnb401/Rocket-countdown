const timer = document.getElementById("timer");
const appointedDay = new Date(2022, 7 - 1, 17, 19, 10, 0);

function clock() {
    const presently = new Date();
    let d = "00";
    let h = "00";
    let m = "00";
    let s = "00";

    if (presently < appointedDay) {
        const milliseconds = appointedDay - presently;
        s = milliseconds / 1000;
        m = s / 60;
        h = m / 60;
        d = h / 24;

        d = checkTime(d, 0);
        h = checkTime(h, 24);
        m = checkTime(m, 60);
        s = checkTime(s, 60);
    }
    timer.innerHTML = `${d} : ${h} : ${m} : ${s}`;
    setTimeout('clock()', 500);
}

function checkTime(i, limit) {
    i = (i).toFixed();
    i = limit == 0 ? i : i % limit;

    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function Show(obj) {
    console.log("test")
    const modal = document.getElementById(obj);

    modal.classList.toggle("hidden")
}

clock();