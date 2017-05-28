

var Image1 = new Image();
Image1.src = "../image/a1.jpg";
var Image2 = new Image();
Image2.src = "../image/a1-1.jpg";
var Image3 = new Image();
Image3.src = "../image/c1.jpg";
var Image4 = new Image();
Image4.src = "../image/c1-1.jpg";
var Image5 = new Image();
Image5.src = "../image/a2.jpg";
var Image6 = new Image();
Image6.src = "../image/a2-1.jpg";
var Image7 = new Image();
Image7.src = "../image/c2.jpg";
var Image8 = new Image();
Image8.src = "../image/c2-1.gif";
var Image9 = new Image();
Image9.src = "../image/b1.jpg";
var Image10 = new Image();
Image10.src = "../image/b1-1.jpg";
var Image11 = new Image();
Image11.src = "../image/a1-2.jpg";
var Image12 = new Image();
Image12.src = "../image/c1-2.jpg";


function SwapOuta() {
    document.imageflipa.src = Image2.src;
    return true;
}

function SwapOutb() {
    document.imageflipa.src = Image11.src;
    document.imageflipb.src = Image10.src;
    document.imageflipc.src = Image12.src;
    return true;
}

function SwapOutc() {
    document.imageflipc.src = Image4.src;
    return true;
}

function SwapOutaa() {
    document.imageflipaa.src = Image6.src;
    return true;
}

function SwapOutcc() {
    document.imageflipcc.src = Image8.src;
    return true;
}

function SwapBacka() {
    document.imageflipa.src = Image1.src;
    return true;
}

function SwapBackb() {
    document.imageflipa.src = Image1.src;
    document.imageflipb.src = Image9.src;
    document.imageflipc.src = Image3.src;
    return true;
}

function SwapBackc() {
    document.imageflipc.src = Image3.src;
    return true;
}

function SwapBackaa() {
    document.imageflipaa.src = Image5.src;
    return true;
}

function SwapBackcc() {
    document.imageflipcc.src = Image7.src;
    return true;
}
