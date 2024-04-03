const display= document.getElementById("mywatchdispaly")
let timer= null;
let startTime=0;
let elapsedTime=0;
let isRuning=false;

function start(){
    if(!isRuning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update, 10);
        isRuning=true;
    }
}

function stop(){
    if(isRuning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRuning=false

    }

}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRuning=false;
    display.textContent="00:00:00:00"

}
function update(){
    const currentTime=Date.now();
    elapsedTime= currentTime-startTime;

    let hours= Math.floor(elapsedTime/(1000*60*60))
    let minutes= Math.floor(elapsedTime/(1000*60)%60)
    let seconds= Math.floor(elapsedTime/1000%60)
    let milliseconds= Math.floor(elapsedTime%1000/10)
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`

    
}