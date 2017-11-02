var muffinKey = 'muffinCount';

function muffinChange(n) {
    var muffinCount = Math.max(0, Number(window.localStorage.getItem(muffinKey)) + n);
    window.localStorage.setItem(muffinKey, muffinCount);
    document
        .querySelector('#muffinCount')
        .innerText = window.localStorage.getItem(muffinKey);
}

document
    .querySelector("#eatMuffin")
    .addEventListener('click', function (event) {
        muffinChange(-1);
    });

document
    .querySelector("#bakeMuffin")
    .addEventListener('click', function (event) {
        muffinChange(5);
    });

if (isNaN(Number(window.localStorage.getItem(muffinKey)))) {
    window.localStorage.setItem(muffinKey, 10);
}



muffinChange(0);