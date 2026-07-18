// =============================
// GJ EVENTS ERP
// Premium Script v2.0
// =============================

const ERP_URL =
"https://script.google.com/macros/s/AKfycbxndLZYEhkCfvKgFWjn8j0TKDx8t9RIbcn9rkrN2DIVFbVAaFq3E2hV7SJT1w_2GgTwhQ/exec";

const progressFill =
document.getElementById("progressFill");

const percent =
document.getElementById("percent");

const loadingText =
document.getElementById("loadingText");

const networkStatus =
document.getElementById("networkStatus");

const splash =
document.getElementById("splash");

const openBtn =
document.getElementById("openBtn");

const messages = [

"Initializing Platform...",

"Loading Modules...",

"Checking Internet...",

"Syncing Event Database...",

"Loading CRM...",

"Loading Stall Booking...",

"Loading Pass Booking...",

"Preparing Dashboard...",

"Optimizing Experience...",

"Almost Ready..."

];

let p = 0;

let m = 0;

function updateLoading(){

if(p>100){

clearInterval(loader);

finishLoading();

return;

}

progressFill.style.width=p+"%";

percent.innerHTML=p+"%";

if(p%10===0){

loadingText.innerHTML=messages[m];

m++;

if(m>=messages.length){

m=messages.length-1;

}

}

p++;

}

const loader=setInterval(updateLoading,45);

// ======================
// Network Status
// ======================

function updateNetwork(){

if(navigator.onLine){

networkStatus.innerHTML="Online";

}else{

networkStatus.innerHTML="Offline";

loadingText.innerHTML="Waiting for Internet Connection...";

}

}

window.addEventListener("online",updateNetwork);

window.addEventListener("offline",updateNetwork);

updateNetwork();

// ======================
// Launch
// ======================

function launchERP(){

splash.classList.add("fadeOut");

setTimeout(()=>{

window.location.href=ERP_URL;

},700);

}

function finishLoading(){

loadingText.innerHTML="Ready to Launch";

openBtn.innerHTML="Open Dashboard";

setTimeout(()=>{

launchERP();

},900);

}

// ======================
// Button
// ======================

openBtn.addEventListener("click",()=>{

launchERP();

});

// ======================
// Keyboard
// ======================

document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

launchERP();

}

});

// ======================
// Visibility
// ======================

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

console.log("Background Mode");

}else{

console.log("Welcome Back");

}

});

// ======================
// Ripple
// ======================

openBtn.addEventListener("mousemove",(e)=>{

const rect=openBtn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

openBtn.style.background=

`radial-gradient(circle at ${x}px ${y}px,#ffffff33,#ff5a1f)`;

});

openBtn.addEventListener("mouseleave",()=>{

openBtn.style.background=

"linear-gradient(90deg,#ff5a1f,#ff9900)";

});

// ======================
// Browser Info
// ======================

console.clear();

console.log("%cGJ EVENTS ERP",

"font-size:32px;font-weight:bold;color:#ff5a1f");

console.log("%cPremium Build v2.0",

"font-size:18px;color:#999");

// ======================
// Performance
// ======================

window.addEventListener("load",()=>{

console.log(

"Loaded in",

performance.now().toFixed(0),

"ms"

);

});

// ======================
// Clock
// ======================

setInterval(()=>{

document.title=

"GJ Events ERP • "+

new Date().toLocaleTimeString();

},1000);

// ======================
// Welcome
// ======================

setTimeout(()=>{

console.log("Welcome to GJ Events ERP");

},1000);

// ======================
// Security
// ======================

document.addEventListener("contextmenu",

e=>e.preventDefault());

document.onselectstart=()=>false;
let deferredPrompt;

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt=e;

const install=document.createElement("button");

install.innerHTML="📲 Install App";

install.style.position="fixed";

install.style.bottom="20px";

install.style.right="20px";

install.style.padding="15px";

install.style.borderRadius="50px";

install.style.background="#ff5a1f";

install.style.color="white";

install.style.border="none";

install.style.cursor="pointer";

document.body.appendChild(install);

install.onclick=()=>{

install.remove();

deferredPrompt.prompt();

};

});

// ======================
// End
// ======================
