// Begin AFK check
var pageTitle = document.querySelector("title").innerHTML;
window.addEventListener('blur', bye);
window.addEventListener('focus', hello);
function bye() {
    document.title = "👋";
}
function hello() {
    document.title = pageTitle;
}
// Einde AFK check

//Begin social media icons
var textAbout = "about";
var backgroundColorChange = document.querySelector("#sidebar");
var textColorChange = [document.querySelector(".social_change0"),
                       document.querySelector(".social_change1"), 
                       document.querySelector(".social_change2")];
// Linkedin
var linkedinKnop = document.querySelector(".linkedin_color");
    linkedinKnop.addEventListener('mouseenter', linkedinActie);
    linkedinKnop.addEventListener('mouseleave', linkedinActieWeg);

function linkedinActie() {
    backgroundColorChange.classList.add("linkedin_color");
    textColorChange[0].classList.add("white");
    textColorChange[1].classList.add("white");
    textColorChange[2].classList.add("white");
    textColorChange[0].innerHTML = 'LinkedIn<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.add("extraspace");
    

    
}
function linkedinActieWeg() {
    backgroundColorChange.classList.remove("linkedin_color");
    textColorChange[0].classList.remove("white");
    textColorChange[1].classList.remove("white");
    textColorChange[2].classList.remove("white");
    textColorChange[0].innerHTML = 'about<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.remove("extraspace");
    
}


//Dribbble
var dribbbleKnop = document.querySelector(".dribbble_color");
    dribbbleKnop.addEventListener('mouseenter', dribbbleActie);
    dribbbleKnop.addEventListener('mouseleave', dribbbleActieWeg);

function dribbbleActie() {
    backgroundColorChange.classList.add("dribbble_color");
    textColorChange[0].classList.add("white");
    textColorChange[1].classList.add("white");
    textColorChange[2].classList.add("white");
    textColorChange[0].innerHTML = 'dribbble<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.add("extraspace");
    
}
function dribbbleActieWeg() {
    backgroundColorChange.classList.remove("dribbble_color");
    textColorChange[0].classList.remove("white");
    textColorChange[1].classList.remove("white");
    textColorChange[2].classList.remove("white");
    textColorChange[0].innerHTML = 'about<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.remove("extraspace");
    
}


//Github
var githubKnop = document.querySelector(".github_color");
    githubKnop.addEventListener('mouseenter', githubActie);
    githubKnop.addEventListener('mouseleave', githubActieWeg);

function githubActie() {
    backgroundColorChange.classList.add("github_color");
    textColorChange[0].classList.add("white");
    textColorChange[1].classList.add("white");
    textColorChange[2].classList.add("white");
    textColorChange[0].innerHTML = 'github<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.add("extraspace");
    
}
function githubActieWeg() {
    backgroundColorChange.classList.remove("github_color");
    textColorChange[0].classList.remove("white");
    textColorChange[1].classList.remove("white");
    textColorChange[2].classList.remove("white");textColorChange[0].innerHTML = 'about<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.remove("extraspace");
}

//Facebook
var facebookKnop = document.querySelector(".facebook_color");
    facebookKnop.addEventListener('mouseenter', facebookActie);
    facebookKnop.addEventListener('mouseleave', facebookActieWeg);

function facebookActie() {
    backgroundColorChange.classList.add("facebook_color");
    textColorChange[0].classList.add("white");
    textColorChange[1].classList.add("white");
    textColorChange[2].classList.add("white");
    textColorChange[0].innerHTML = 'facebook<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.add("extraspace");
    
}
function facebookActieWeg() {
    backgroundColorChange.classList.remove("facebook_color");
    textColorChange[0].classList.remove("white");
    textColorChange[1].classList.remove("white");
    textColorChange[2].classList.remove("white");
    textColorChange[0].innerHTML = 'about<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.remove("extraspace");
}

//Instagram
var instagramKnop = document.querySelector(".instagram_color");
    instagramKnop.addEventListener('mouseenter', instagramActie);
    instagramKnop.addEventListener('mouseleave', instagramActieWeg);

function instagramActie() {
    backgroundColorChange.classList.add("instagram_color");
    textColorChange[0].classList.add("white");
    textColorChange[1].classList.add("white");
    textColorChange[2].classList.add("white");
    textColorChange[0].innerHTML = 'instagram<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.add("extraspace2");
    
}
function instagramActieWeg() {
    backgroundColorChange.classList.remove("instagram_color");
    textColorChange[0].classList.remove("white");
    textColorChange[1].classList.remove("white");
    textColorChange[2].classList.remove("white");
    textColorChange[0].innerHTML = 'about<span><a class="social_change1" href="index.html">gragt.com</a></span>';
    textColorChange[0].classList.remove("extraspace2");
}


// Einde social media buttons

// Begin whatareyoudoinghere sound effect

var fotoKnop = document.querySelector(".glitch");
var geluidEffect = document.querySelector(".audio");
var gordonSounds = ["../audio/gordon1.mp3", 
                    "../audio/gordon2.mp3", 
                    "../audio/gordon3.mp3",
                    "../audio/gordon4.mp3",
                    "../audio/gordon5.mp3",
                    "../audio/gordon6.mp3",
                    "../audio/gordon7.mp3"];

fotoKnop.addEventListener('click', geluidPlay);
function geluidPlay() {
    geluidEffect.src = gordonSounds[Math.floor(Math.random()*gordonSounds.length)];
    geluidEffect.play();
}



















