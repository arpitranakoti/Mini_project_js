function makeBubble(){
    let bubbleCollection = "";
    for(let i=1;i<=85;i++)
    {
        let random = Math.floor(Math.random()*10);
        bubbleCollection += `<div class="bubble">${random}</div>`;
    
    }
    document.querySelector("#pbtm").innerHTML=bubbleCollection;
    }
    var timer=60;
    function runTimer(){
        var set=setInterval(function(){
            
            if(timer>0)
            {
                timer--;
                document.querySelector("#timerValue").textContent=timer;
            }
            else
            {
                clearInterval(set);
                document.querySelector("#pbtm").innerHTML=`<h1>GameOver, your score : ${score}</h1>`;
            }
        },1000);
    
    }
    var hit_random ; // declare outside so it can ve use inside increase score 
    function getNewHit(){
        hit_random=Math.floor(Math.random()*10);
        document.querySelector("#hitVal").textContent=hit_random;
    }
    
    var score=0;
    function increaseScore(){
        score +=10;
        document.querySelector("#ScoreVal").textContent=score;    
    }
    
    //jispe click kroge wo element par event raise hoga, aur event listner na milnai uskai parent mai dundega vah nahi mila to parent kai parent mai check kraige
    document.querySelector("#pbtm").addEventListener("click",(e)=>{
        // console.log(e.target.textContent) // return string value  we need to convert it 
        // console.log(Number(e.target.textContent)) // converted
    
        var clickedNumber=Number(e.target.textContent);
        if(hit_random===clickedNumber)
        {
            increaseScore();
            //new bubble will generate and new hit will be generate
            makeBubble();
            getNewHit();
        }
    })
    
    
    
    getNewHit();
    runTimer();
    makeBubble();
    