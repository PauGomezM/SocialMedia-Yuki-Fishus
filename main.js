var fbYuki = document.querySelector(".yuki-fb-links");
var fbFishus = document.querySelector(".fishus-fb-links");
var igYuki = document.querySelector(".yuki-ig-links"); 
var igFishus = document.querySelector(".fishus-ig-links");
var ytYuki = document.querySelector(".yuki-yt-links");
var ytFishus = document.querySelector(".fishus-yt-links");

var iconsY = [document.querySelector("#icon-fb-yuki"), document.querySelector("#icon-ig-yuki"), document.querySelector("#icon-yt-yuki")];
var iconsF = [document.querySelector("#icon-fb-fishus"), document.querySelector("#icon-ig-fishus"), document.querySelector("#icon-yt-fishus")];

function showElement(element) {
    element.style.visibility = "visible";
    element.style.display = "flex";
}

function hideElement(element) {
    element.style.visibility = "hidden";
    element.style.display = "none";
}

function fadeOutElement(element) {
    element.classList.add("fade-out");
}

function removeFadeOutElement(element) {
    element.classList.remove("fade-out");
}

function toggleElements(elementToShow) {
    if (elementToShow === fbYuki) {
        showElement(fbYuki);
        hideElement(igYuki);
        hideElement(ytYuki);
        removeFadeOutElement(iconsY[0]);
        fadeOutElement(iconsY[1]);
        fadeOutElement(iconsY[2]);
    } else if (elementToShow === igYuki) {
        showElement(igYuki);
        hideElement(fbYuki);
        hideElement(ytYuki);
        removeFadeOutElement(iconsY[1]);
        fadeOutElement(iconsY[0]);
        fadeOutElement(iconsY[2]);
    } else if (elementToShow === ytYuki) {
        showElement(ytYuki);
        hideElement(fbYuki);
        hideElement(igYuki);
        removeFadeOutElement(iconsY[2]);
        fadeOutElement(iconsY[0]);
        fadeOutElement(iconsY[1]);
    } else if (elementToShow === fbFishus) {
        showElement(fbFishus);
        hideElement(igFishus);
        hideElement(ytFishus);
        removeFadeOutElement(iconsF[0]);
        fadeOutElement(iconsF[1]);
        fadeOutElement(iconsF[2]);
    } else if (elementToShow === igFishus) {
        showElement(igFishus);
        hideElement(fbFishus);
        hideElement(ytFishus);
        removeFadeOutElement(iconsF[1]);
        fadeOutElement(iconsF[0]);
        fadeOutElement(iconsF[2]);
    } else {
        showElement(ytFishus);
        hideElement(fbFishus);
        hideElement(igFishus);
        removeFadeOutElement(iconsF[2]);
        fadeOutElement(iconsF[0]);
        fadeOutElement(iconsF[1]);
    }
}

const yukiSection = document.querySelector(".yuki-section");
const fishusSection = document.querySelector(".fishus-section");
const yuki = document.querySelector(".yuki");
const fishus = document.querySelector(".fishus");
const yukiBubble = document.querySelector(".Yuki-bubble");
const fishusBubble = document.querySelector(".Fishus-bubble");
const yukiImg = document.querySelector(".yuki-img");
const fishusImg = document.querySelector(".fishus-img");

function resetStyles() {
    yukiSection.style.display = "none";
    yuki.style.display = "flex";
    yuki.style.height = "0";
    yukiBubble.style.display = "none";
  
    fishusSection.style.display = "none";
    fishus.style.display = "flex";
    fishus.style.height = "0";
    fishusBubble.style.display = "none";
  }
  
  function showYuki() {
    resetStyles();
    yukiSection.style.display = "flex";
    yuki.style.height = "100vh";
    //yuki img
    yukiImg.style.marginTop = "20px";
    yukiImg.style.padding = "none";
    yukiImg.style.border = "none";
    yukiImg.style.borderRadius = "none";
    yukiImg.style.boxShadow = "none";
    //fishus
    fishusBubble.style.display = "flex";
    fishus.style.display = "none";
    console.log("Yuki bubble clicked");
  }
  
  function showFishus() {
    resetStyles();
    fishusSection.style.display = "flex";
    fishus.style.height = "100vh";
    //fishus img
    fishusImg.style.marginTop = "20px";
    fishusImg.style.marginTop = "20px";
    fishusImg.style.padding = "none";
    fishusImg.style.border = "none";
    fishusImg.style.borderRadius = "none";
    fishusImg.style.boxShadow = "none";
    //yuki
    yukiBubble.style.display = "flex";
    yuki.style.display = "none";
    console.log("Fishus bubble clicked");
  }
