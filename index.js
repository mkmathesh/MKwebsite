function navlink(a)
{
    if(a=='home')
    {
        open("#","_blank")
    }
    else if(a=='contact')
    {
        open("#footer","_parent");
    }
} 
let welimg=["img/code.jpg","img/fire.jpg","img/forest.jpg","img/galaxy.jpg","img/nebula.jpg"];
let i=0;
function welcomeimg()
{
    let wi=document.getElementById("welcomeimage");
    wi.setAttribute("style","background-image: url("+welimg[i]+");")
    i=(i+1)%welimg.length;
}
setInterval(welcomeimg,10000);

let text="Welcome home!";
let j=0
let text2="May every corner of this space bring you knowledge";
let k=0;
let flag=false;
function typewriter()
{
    if(j<text.length)
    {
        document.getElementById("welhome").innerHTML+=text.charAt(j);
        j++;
        setTimeout(typewriter,100);
    }
    else{
        document.getElementById("welmeg").innerHTML+=text2.charAt(k);
        k++;
        setTimeout(typewriter,50);
    }
}
onload=typewriter;
