// ================= PERSONALIZE HERE =================
const CONFIG={
herName:"Shrushti",
myName:"Bhavuu",
personalLetter:`I wasn't really sure how to say all of this normally, so I decided to build an entire website instead.

You have become someone genuinely special to me. Somewhere between the random conversations, laughs, little moments and memories, you became someone I look forward to talking to.

I hope 19 is kind to you. I hope it gives you reasons to smile, people who appreciate you, adventures you remember, and everything you've been wishing for.

And honestly... I'm really glad I got to know you.

Happy Birthday. You deserve a beautiful year. ♥`,
secretMessage:`You became someone really special to me.

And maybe... a little more special than you realize. ❤️`,
balloons:[
"Your smile is dangerous. In the best way.",
"You make ordinary days feel a little better.",
"Some people become important without realizing it.",
"You are genuinely one of the nicest people I've met.",
"There are memories with you that I replay with a smile.",
"You probably don't realize how special you are.",
"Okay, this one is a secret... 🤫",
"I'm really glad you exist."
],
reasons:[
"Your smile can completely change the mood of a person that never existed till he met you.",
"Your laugh is one of those sounds that's hard not to smile and where my heart melt.",
"You have a genuinely kind side which makes me wonder how a person can be this kind.",
"You make ordinary conversations memorable even though mess it up.",
"You have your own little way of doing things which i love about you.",
"Your random expressions are ridiculously cuter than you think.",
"You can make boring moments fun and if not i'm always there to cherish youu.",
"You care more than you sometimes show, always grateful.",
"You have a beautiful personality.",
"You are surprisingly easy to talk to.",
"You make me feel comfortable.",
"You have an energy that's uniquely yours.",
"You have a way of making memories without trying.",
"You are stronger than you probably give yourself credit for.",
"You deserve to be appreciated.",
"You are impossible to replace with anyone elseeeeeeee.",
"You make certain days feel better just by being there.",
"You are simply... you and because of that my inner side is being visible which i also never knew existed.",
"And honestly, I could keep going."
],
herPhotos:[
["assets/photos/5.jpg","That smile."],["assets/photos/6.jpg","You being you."],["assets/photos/7.jpg","This one is dangerously cute."],["assets/photos/8.jpg","One of my favourites."],["assets/photos/9.jpg","Just... wow."],["assets/photos/10.jpg","A little moment worth keeping."]
],
ourPhotos:[
["assets/photos/1.jpg","A memory I'll always smile about."],["assets/photos/2.jpg","Some moments feel a little different."],["assets/photos/3.jpg","This one means more than you know."],["assets/photos/4.jpg","One for the memory box."]
],
finalPhoto:"assets/photos/11.jpg"
};
// =====================================================

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
document.addEventListener("DOMContentLoaded",()=>{
  const loader=document.getElementById("loader");
  if(loader){
    setTimeout(()=>loader.remove(),2200);
  }
});

$$(".her").forEach(x=>x.textContent=CONFIG.herName);
$$(".me").forEach(x=>x.textContent=CONFIG.myName);
$("#letterText").textContent=CONFIG.personalLetter;
$("#best").src=CONFIG.finalPhoto;

function page(id){$$(".page").forEach(x=>x.classList.remove("active"));$("#"+id).classList.add("active");scrollTo({top:0,behavior:"instant"});hearts(innerWidth/2,innerHeight*.35,7)}
$$("[data-next]").forEach(b=>b.onclick=()=>page(b.dataset.next));
$$("[data-page]").forEach(b=>b.onclick=()=>{page(b.dataset.page);$("#links").classList.remove("open")});
$("#menu").onclick=()=>$("#links").classList.toggle("open");

function check(){
 let v=$("#name").value.trim().toLowerCase(), n=CONFIG.herName.toLowerCase();
 if(n==="her name"||v===n){$("#hint").textContent="Yep... that's the one. 💗";setTimeout(()=>page("countdown"),650)}
 else $("#hint").textContent="Hmm... nice try 😌 This little world is reserved for someone special.";
}
$("#nameBtn").onclick=check;$("#name").onkeydown=e=>{if(e.key==="Enter")check()};

function countdown(){
 let target=new Date("2026-10-08T00:00:00+05:30").getTime(),diff=Math.max(0,target-Date.now());
 $("#d").textContent=String(Math.floor(diff/86400000)).padStart(2,"0");
 $("#h").textContent=String(Math.floor(diff%86400000/3600000)).padStart(2,"0");
 $("#m").textContent=String(Math.floor(diff%3600000/60000)).padStart(2,"0");
 $("#s").textContent=String(Math.floor(diff%60000/1000)).padStart(2,"0");
}setInterval(countdown,1000);countdown();

const pos=[[6,15],[22,55],[39,8],[56,60],[72,20],[86,52],[47,38],[13,70]];
CONFIG.balloons.forEach((msg,i)=>{let b=document.createElement("div");b.className="balloon";b.innerHTML="♥";b.style.left=pos[i][0]+"%";b.style.top=pos[i][1]+"%";b.style.background=`linear-gradient(145deg,hsl(${330+i*16} 75% 70%),hsl(${280+i*14} 55% 58%))`;b.style.animationDelay=i*.25+"s";b.onclick=()=>{if(b.classList.contains("popped"))return;b.classList.add("popped");toast(msg);hearts(b.offsetLeft,b.offsetTop,10)};$("#balloonsBox").appendChild(b)});

function fallback(img){img.onerror=()=>img.src="assets/photos/placeholder.svg";return img}
CONFIG.herPhotos.forEach(([src,cap],i)=>{let d=document.createElement("div");d.className="photo";d.style.setProperty("--r",[-2,2,-1,3,-3,1][i]+"deg");let im=fallback(new Image());im.src=src;im.alt=cap;d.append(im);let p=document.createElement("p");p.textContent=cap;d.append(p);im.onclick=()=>open(src,cap);$("#herPhotos").append(d)});
CONFIG.ourPhotos.forEach(([src,cap])=>{let d=document.createElement("div");d.className="together-card";let im=fallback(new Image());im.src=src;d.append(im);let p=document.createElement("div");p.className="caption";p.textContent=cap;d.append(p);im.onclick=()=>open(src,cap);$("#ourPhotos").append(d)});

function open(src,cap){$("#modalImg").src=src;$("#modalImg").onerror=()=>$("#modalImg").src="assets/photos/placeholder.svg";$("#modalText").textContent=cap;$("#modal").classList.add("show")}
$("#close").onclick=()=>$("#modal").classList.remove("show");$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")};

CONFIG.reasons.forEach((r,i)=>{let d=document.createElement("div");d.className="reason";d.innerHTML=`<div class="ri"><div class="front">${i+1}</div><div class="back">${r}</div></div>`;d.onclick=()=>d.classList.toggle("open");$("#reasonsGrid").append(d)});

$("#envelope").onclick=()=>{$("#envelope .envelope").classList.add("open");setTimeout(()=>{$("#paper").classList.add("show");$("#letterNext").classList.remove("hidden")},500)};

$("#reveal").onclick=()=>{$("#secretTitle").style.display="none";$("#secretBox").innerHTML=`<div class="revealed">${CONFIG.secretMessage.replace(/\n/g,"<br>")}</div>`;hearts(innerWidth/2,innerHeight/2,40);setTimeout(()=>page("cake"),5200)};

for(let i=0;i<19;i++){let c=document.createElement("div");c.className="candle";c.innerHTML='<div class="flame"></div>';c.onclick=()=>{if(c.classList.contains("out"))return;c.classList.add("out");let left=$$(".candle:not(.out)").length;$("#cakeHint").textContent=left?`${left} candle${left===1?"":"s"} left... make a wish ✨`:"Wish made. ❤️";if(!left){$("#cakeNext").classList.remove("hidden");confetti()}};$("#candles").append(c)}

$("#giftBox").onclick=()=>{$("#giftBox").classList.add("open");confetti();hearts(innerWidth/2,innerHeight/2,55);setTimeout(()=>page("final"),1200)};
$("#restart").onclick=()=>{location.reload()};

let audio=$("#audio"),playing=false;$("#music").onclick=()=>{if(!playing){audio.play().then(()=>{$("#music").textContent="❚❚";playing=true}).catch(()=>toast("Add your MP3 as assets/audio/birthday-song.mp3"))}else{audio.pause();$("#music").textContent="♫";playing=false}};

function hearts(x,y,n){for(let i=0;i<n;i++){let e=document.createElement("div");e.className="toast";e.style.position="fixed";e.style.left=x+"px";e.style.top=y+"px";e.style.opacity="1";e.style.background="none";e.style.border="0";e.style.padding="0";e.style.fontSize="20px";e.style.color=["#ff70ad","#ffd0e4","#a98cff"][i%3];e.textContent=i%4?"♥":"✦";e.style.transition="1s";document.body.append(e);requestAnimationFrame(()=>{e.style.transform=`translate(${Math.random()*220-110}px,${-Math.random()*240-50}px) scale(.3)`;e.style.opacity="0"});setTimeout(()=>e.remove(),1050)}}
function confetti(){hearts(innerWidth/2,innerHeight/2,70)}
function toast(t){let e=document.createElement("div");e.className="toast";e.textContent=t;document.body.append(e);requestAnimationFrame(()=>e.classList.add("show"));setTimeout(()=>{e.classList.remove("show");setTimeout(()=>e.remove(),300)},3000)}
setInterval(()=>{let e=document.createElement("div");e.className="particle";e.textContent=["♥","♡","✦","✧"][Math.floor(Math.random()*4)];e.style.left=Math.random()*100+"%";e.style.color=["#ff7fb5","#ffd0e4","#b99aff","#fff"][Math.floor(Math.random()*4)];e.style.fontSize=10+Math.random()*18+"px";e.style.animationDuration=7+Math.random()*8+"s";document.body.append(e);setTimeout(()=>e.remove(),16000)},650);
