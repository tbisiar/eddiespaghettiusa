
/* Original:  Brian Gosselin (bgaudiodr@aol.com)
/  Web Site:  http://www.bgaudiodr.iwarp.com
/  This script and many more are available free online at
/  The JavaScript Source!! http://javascript.internet.com */

var pics = [];
for (var i = 0; i <= 18; i++) {
    pics[i] = new Image();
    pics[i].src = '../image/image' + i + '.gif';
}
var map = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18];
var user = [];
var tempArray = [];
var clickArray = [0, 0];
var ticker, sec, min, ctr, id, okToClick, finished;
function init() {
    clearTimeout(id);
    for (i = 0; i <= 35 ;i++) {
        user[i] = 0;
    }
    ticker = 0;
    min = 0;
    sec = 0;
    ctr = 0;
    okToClick = true;
    finished = 0;
    document.f.b.value = "";
    scramble();
    runClock();
    for (i = 0; i <= 35; i++) {
        document.f[('img'+i)].src = "../image/image0.gif";
    }
}
function runClock() {
    min = Math.floor(ticker/60);
    sec = (ticker-(min*60))+'';
    if(sec.length === 1) {sec = "0"+sec;}
    ticker++;
    document.f.b.value = min+":"+sec;
    id = setTimeout('runClock()', 1000);
}
function scramble() {
    for (var z = 0; z <= 5; z++) {
        for (var x = 0; x <= 35; x++) {
            tempArray[0] = Math.floor(Math.random()*36);
            tempArray[1] = map[tempArray[0]];
            tempArray[2] = map[x];
            map[x] = tempArray[1];
            map[tempArray[0]] = tempArray[2];
        }
    }
}

function showimage(but) {
    if (okToClick) {
        okToClick = false;
        document.f[('img'+but)].src = '../image/image'+map[but]+'.gif';
        if (ctr == 0) {
            ctr++;
            clickArray[0] = but;
            okToClick = true;
        } else {
            clickArray[1] = but;
            ctr = 0;
            setTimeout('returnToOld()', 600);
        }
    }
}

function returnToOld() {
    if ((clickArray[0] === clickArray[1]) && (!user[clickArray[0]])) {
        document.f[('img'+clickArray[0])].src = "../image/image0.gif";
        okToClick = true;
    } else {
        if (map[clickArray[0]] !== map[clickArray[1]]) {
            if (user[clickArray[0]] === 0) {
                document.f[('img'+clickArray[0])].src = "../image/image0.gif";
            }
            if (user[clickArray[1]] === 0) {
                document.f[('img'+clickArray[1])].src = "../image/image0.gif";
            }
        }
        if (map[clickArray[0]] === map[clickArray[1]]) {
            if (user[clickArray[0]] === 0 && user[clickArray[1]] === 0) { finished++; }
            user[clickArray[0]] = 1;
            user[clickArray[1]] = 1;
        }
        if (finished >= 18) {
            alert('You did it in '+document.f.b.value+' !');
            init();
        } else {
            okToClick = true;
        }
    }
}