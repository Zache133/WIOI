let ussrFlag = document.getElementById("ussrFlag");
let usaFlag = document.getElementById("usaFlag");
let sweFlag = document.getElementById("sweFlag");
let ussrDrop = document.getElementById("ussrDrop");
let usaDrop = document.getElementById("usaDrop");
let sweDrop = document.getElementById("sweDrop");
let bvo = document.getElementById("background-video1")
let bv = document.getElementById("background-video");
let bv2 = document.getElementById("background-video2");
let bv3 = document.getElementById("background-video3");
let ud1 = document.getElementById("ud1");
let ud2 = document.getElementById("ud2");
let ud3 = document.getElementById("ud3");
let ud4 = document.getElementById("ud4");
let ud5 = document.getElementById("ud5");
let ud6 = document.getElementById("ud6");
let ud7 = document.getElementById("ud7");
let ud8 = document.getElementById("ud8");
let ud9 = document.getElementById("ud9");
let info = document.getElementById("info");
ud1.style.color = "transparent";
ud2.style.color = "transparent";
ud3.style.color = "transparent";
ud4.style.color = "transparent";
ud5.style.color = "transparent";
ud6.style.color = "transparent";
ud7.style.color = "transparent";
ud8.style.color = "transparent";
ud9.style.color = "transparent";
usaFlag.addEventListener("mouseover", function(){
    disable();
    usaDrop.style.display = "block";
    bv3.style.display = "block";
    usaDrop.style.backgroundColor = "gray";
    ud4.style.color = "white";
    ud5.style.color = "white";
    ud6.style.color = "white";
});
sweFlag.addEventListener("mouseover", function(){
    disable();
    sweDrop.style.display = "block";
    bv.style.display = "block";
    sweDrop.style.backgroundColor = "gray";
    ud7.style.color = "white";
    ud8.style.color = "white";
    ud9.style.color = "white";
});
ussrFlag.addEventListener("mouseover", function(){
    disable();
    ussrDrop.style.display = "block";
    bv2.style.display = "block";
    ussrDrop.style.backgroundColor = "gray";
    ud1.style.color = "white";
    ud2.style.color = "white";
    ud3.style.color = "white";
});

function disable(){
    bvo.style.display = "none";
    bv.style.display = "none";
    bv2.style.display = "none";
    bv3.style.display = "none";
    sweFlag.style.border = "none";
    usaFlag.style.border = "none";
    ussrFlag.style.border = "none";
    sweDrop.style.color = "transparent";
    usaDrop.style.color = "transparent";
    ussrDrop.style.color = "transparent";
    ussrDrop.style.color = "transparent";
    usaDrop.style.background = "transparent";
    sweDrop.style.background = "transparent";
    ussrDrop.style.background = "transparent";
    ud1.style.color = "transparent";
    ud2.style.color = "transparent";
    ud3.style.color = "transparent";
    ud4.style.color = "transparent";
    ud5.style.color = "transparent";
    ud6.style.color = "transparent";
    ud7.style.color = "transparent";
    ud8.style.color = "transparent";
    ud9.style.color = "transparent";
        
    

}
window.onscroll = function() {myFunction()};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
info.addEventListener("click", function(){
    disable();
    bvo.style.display = "block";
});

