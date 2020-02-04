let hashirama = document.getElementById("one");
let tobirama = document.getElementById("two");
let hiruzen = document.getElementById("three");
let minato = document.getElementById("four");
let tsunade = document.getElementById("five");
let kakashi = document.getElementById("six");
let naruto = document.getElementById("seven");
let HClicked, TClicked, HiClicked, MClicked,TsuClicked, KClicked, NClicked = false;
let butt = document.getElementsByClassName("back");
let stats = document.getElementsByClassName("stats");
const NoHashi = [tobirama, hiruzen, minato, tsunade, kakashi, naruto];
const NoTobi = [hashirama, hiruzen, minato, tsunade, kakashi, naruto];
const NoHiru = [tobirama, hashirama, minato, tsunade, kakashi, naruto];
const NoMina = [tobirama, hiruzen, hashirama, tsunade, kakashi, naruto];
const NoTsuna = [tobirama, hiruzen, minato, hashirama, kakashi, naruto];
const NoKakashi = [tobirama, hiruzen, minato, tsunade, hashirama, naruto];
const NoNaru = [tobirama, hiruzen, minato, tsunade, kakashi, hashirama];
const AllKage = [hashirama, tobirama, hiruzen, minato, tsunade, kakashi, naruto];

function reveal() {
    //what I want is to hide every other Kage and make this one fullscreen
    //assign each kage to a variable pref an array and change 
    //the width based on click events
    if(HClicked === true)
    {
        NoHashi.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        hashirama.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[0].style.visibility = "visible";
    }
    else if(TClicked === true)
    {
        NoTobi.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        tobirama.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[1].style.visibility = "visible";
    }
    else if(HiClicked === true)
    {
        NoHiru.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        hiruzen.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[2].style.visibility = "visible";
    }
    else if(MClicked === true)
    {
        NoMina.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        minato.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[3].style.visibility = "visible";
    }
    else if(TsuClicked === true)
    {
        NoTsuna.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        tsunade.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[4].style.visibility = "visible";
    }
    else if(KClicked === true)
    {
        NoKakashi.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        kakashi.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[5].style.visibility = "visible";
    }
    else if(NClicked === true)
    {
        NoNaru.forEach(element => {
            element.style.width = "0vw";
            element.style.visibility = "hidden";
        });    
        naruto.style.width = "100vw";
        //call function to display kage stats - feats or wahtever
        //also make a "back" button, I want a cutie arrow :p
        butt[0].style.visibility = "visible";
        stats[6].style.visibility = "visible";
    }
    //resets the clicked slide
    HClicked = false;
    TClicked = false;
    HiClicked = false;
    MClicked = false;
    TsuClicked = false;
    KClicked = false;
    NClicked = false;
}

function GoBack()
{
    //loops through each kage and sends them back to normal
    AllKage.forEach(element => {
        element.removeAttribute("style");
    });
    //hides the button   
    Array.from(stats).forEach(element => {
        element.style.visibility = "hidden";
    });
    butt[0].style.visibility = "hidden"; 
}
